import type { NextApiRequest, NextApiResponse } from 'next'

import attemptLogin from '@/functions/attemptLogin'

import type { Credentials, Session } from '@/types/Session'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Session|Error>
) {
  const credentials: Credentials = {
    username: req.body.username,
    password: req.body.password
  }

  try {
    const s: Session = await attemptLogin(credentials)
    res.status(200).json(s)
  }
  catch (err) {
    res.status(400).json(err)
  }
}
