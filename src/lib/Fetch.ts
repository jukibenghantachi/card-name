import fetch from 'isomorphic-fetch';

export class Fetch {
	/**
	 * Fetch username github
	 * @param username username github
	 * @returns json
	 * @deprecated due github ratelimit issue
	 */
	public async fetchUser(username: string): Promise<string> {
		const res = await fetch(`https://api.github.com/users/${username}`);
		const stringify = JSON.stringify(await res.json());
		return stringify;
	}

	/**
	 * Fetch image and convert to base64
	 * @param url url image
	 * @returns base64 string
	 */
	public async fetchImage(url: string): Promise<string> {
		const res = await fetch(url);
		const buffer = await res.arrayBuffer();
		return `data:image/png;base64,${Buffer.from(buffer).toString('base64')}`;
	}
}