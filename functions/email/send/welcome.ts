import sendEmail from './'

// ESP Site Name
const SITE_NAME = process.env.SITE_NAME

// ESP Site Domain
const SITE_DOMAIN = process.env.SITE_DOMAIN

// Email Sender
const EMAIL_SENDER = process.env.EMAIL_SENDER || `welcome@info.eviratecsocial.com`

// Email BCC Recpients
const BCC = []
if (process.env.BCC_WELCOME_EMAILS_TO_NAME) {
  BCC.push({
    displayName: process.env.BCC_WELCOME_EMAILS_TO_NAME,
    address: process.env.BCC_WELCOME_EMAILS_TO_ADDR,
  })
}

// Email Subject
const SUBJECT = `Welcome to ${SITE_NAME}!`

// HTML version of the email
const HTML_TEMPLATE = "\
<p>Hi %%DISPLAYNAME%%,</p>\
\
<p>Thanks for signing up to Eviratec!</p>\
\
<p>\
  You may log in with your username:<br />\
  <code>%%USERNAME%%</code>\
</p>\
\
<p>\
  Kind Regards,<br />\
  Eviratec.com.au\
</p>\
"

// Plain text version of the email
const PLAIN_TEXT_TEMPLATE = "\
Hi %%DISPLAYNAME%%,\n\n\
\
Thanks for signing up to Eviratec!\n\n\
\
You may log in with your username:\n\
%%USERNAME%%\n\n\
\
Kind Regards,\n\
Eviratec.com.au\
"

interface EmailAddress {
  address: string
  displayName: string
}

// Send Welcome Email (async) function
export default async function sendWelcomeEmail (
  recipient: EmailAddress,
  displayName: string,
  username: string
): Promise<boolean> {
  const html: string = wrap(HTML_TEMPLATE)
  const plainText: string = wrap(PLAIN_TEXT_TEMPLATE)

  return await sendEmail(
    [recipient],
    [...BCC],
    EMAIL_SENDER,
    SUBJECT,
    { html, plainText }
  )

  // Replace template variables
  // input: string template
  // returns string
  function wrap (input: string): string {
    let str: string = input

    const replacements: { key: string, value: string }[] = [
      { key: 'DISPLAYNAME', value: displayName, },
      { key: 'USERNAME', value: username, },
    ]

    for (let replacement of replacements) {
      str = str.replace(
        new RegExp(`%%${replacement.key}%%`, 'g'),
        replacement.value
      )
    }

    return str
  }
}
