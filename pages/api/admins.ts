import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const members = require('/json/admins.json')
  res.status(200).json(members)
}
