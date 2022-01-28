import { VercelRequest, VercelResponse } from '@vercel/node'

export default async function render(_: VercelRequest, res: VercelResponse) {
    try {
        return res.status(200).send({
            status: 'success',
            message: { list_api: ['https://card-name-generator/api/github'] }
        })
    } catch (err: any) {
        return res.send({
            status: 'error',
            message: err.message
        })
    }
}
