import { Card } from '../src/lib/Card'
import { VercelRequest, VercelRequestQuery, VercelResponse } from '@vercel/node'

export default async function render(req: VercelRequest, res: VercelResponse) {
    try {
        const {
            name,
            bio,
            facebook,
            youtube,
            twitter,
            instagram,
            github,
            discord,
            telegram,
            linkedin,
            image
        }: VercelRequestQuery = req.query
        const card = new Card()
        const generate = await card.render({
            name,
            bio,
            facebook,
            youtube,
            twitter,
            instagram,
            github,
            discord,
            telegram,
            linkedin,
            image
        })
        res.setHeader('Content-type', 'image/svg+xml')
        return res.status(200).send(generate)
    } catch (err: any) {
        return res.send({
            status: 'error',
            message: err.message
        })
    }
}
