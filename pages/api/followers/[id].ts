import { NextApiRequest, NextApiResponse } from 'next'
import { getFollowers } from '@services/userService'
import { FollowerProps } from 'types/data/follower'

export default async function suggestions(
    req: NextApiRequest,
    res: NextApiResponse<{ followers: FollowerProps[] }>
) {
    try {
        const { id } = req.query

        const followers = await getFollowers(20, String(id))

        res.status(200).json({ followers })
    } catch (error: any) {
        console.log(error)
        res.status(500).end(error.message)
    }
}
