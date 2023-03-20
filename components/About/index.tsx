import React from 'react'

import Link from 'next/link'

import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles._}>
      <p>
        My name is Callan Milne. I’m a full-stack web development expert from
        Australia. I have been developing full-stack websites and web
        applications full-time since 2007. I started developing single-page
        applications (SPAs), and web APIs in 2011.
      </p>

      <p>
        I love science, video games, computers, and programming; and was
        a hobbyist programmer before I started working as a PHP Developer in
        March 2007.
      </p>

      <p>
        I <em>first</em> started working with software engineering tools in 1998; My
        first programming experience was with Microsoft Visual Basic, and C++.
        I started working with web technology in 2001, and published my first
        PHP-Nuke CMS powered website in 2003.
      </p>

      <p>
        Since then, I have created numerous web applications, user interfaces,
        web APIs, and software packages. I love to contribute to open source
        software. My first public contribution was published on SourceForge
        in 2006. I now keep my public contributions on <Link href="https://github.com/eviratec">GitHub</Link>,
        and I have packages published on <Link href="https://www.npmjs.com/~luminous-patterns">NPM</Link>.
      </p>

      <p>
        I like to keep my skills up-to-date, and have extensive experience with
        state-of-the-art web development technologies including: Next.js,
        React.js, TypeScript, Cypress, Jest, Storybook, and AWS.
      </p>

      <p>
        I am passionate about test automation, and test driven development
        (TDD), with strong experience in developing tests using Node.js,
        Jasmine, Cypress, and Jest.
      </p>
    </div>
  )
}
