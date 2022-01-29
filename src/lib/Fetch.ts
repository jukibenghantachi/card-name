import fetch from 'isomorphic-fetch'

export class Fetch {
    /**
     * Fetch username github
     * @param {username} username github
     * @returns json
     * @deprecated due github rate limit issues
     */
    public async fetchUser(username: string): Promise<string> {
        const res = await fetch(`https://api.github.com/users/${username}`)
        const json = JSON.stringify(await res.json())
        return json
    }

    /**
     * Fetch image and convert to base64
     * @param {url} url image
     * @returns base64 string
     */
    public async fetchImage(url: string): Promise<string> {
        const res = await fetch(url)
        const buffer = await res.arrayBuffer()
        return `data:image/png;base64,${Buffer.from(buffer).toString('base64')}`
    }

    /**
     * Fetch counter page using couterapi.xyz
     * @param {key} key value
     * @returns json
     */
    public async fetchCount(key: string): Promise<string> {
        const res = await fetch(`https://api.countapi.xyz/hit/${key}`)
        const json = JSON.stringify(await res.json())
        return json
    }
}
