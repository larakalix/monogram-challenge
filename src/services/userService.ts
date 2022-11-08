import { ApiError } from '@datocms/cma-client-node'
import { request } from './../../lib/datocms'
import { clientRequest } from '../../lib/datocms'
import { UserProps } from 'types/data/user'
import { UserQueryType } from 'types/services/user'
import { SCHEMA_TYPES } from '@constants/schemaTypes'

const ONE_USER_QUERY = `query User ($authreference: String) {
  user (filter: {authreference: {eq: $authreference}}) {
    id
    name
    lastname
    email
    createdAt
    username
    isnew
    authreference
    color {
      hex
      red
      green
      blue
      alpha
    }
    thumbnail {
      basename
      url
    }
  }
}`

const ONE_USER_SUMMARY_QUERY = `query User ($username: String) {
  user (filter: {username: {eq: $username}}) {
    id
    name
    lastname
    email
    createdAt
    username
    authreference
    color {
      hex
      red
      green
      blue
      alpha
    }
    thumbnail {
      basename
      url
    }
    followers {
      id
      follower {
        id
        name
        username
        lastname
        thumbnail {
          basename
          url
        }
      }
    }
  }
}`

const SUGGESTIONS_QUERY = `query Suggestions($limit: IntType, $offset: [ItemId]) {
  allUsers(first: $limit, filter: {id: {notIn: $offset }}) {
    id
    authreference
    name
    lastname
    email
    createdAt
    username
    thumbnail {
      basename
      url
    }
  }
}`

const payloadFactory = (field: string, queryType: UserQueryType) => {
  const payload = {
    ONE_USER: {
      query: ONE_USER_QUERY,
      variables: { authreference: field },
    },
    ONE_USER_SUMMARY: {
      query: ONE_USER_SUMMARY_QUERY,
      variables: { username: field },
    },
  }

  return payload[queryType]
}

export const getUser = async (
  field: string,
  queryType: UserQueryType
): Promise<UserProps> => {
  const { query, variables } = payloadFactory(field, queryType)

  const { user } = await request({
    query,
    variables,
    preview: false,
  })

  return user
}

export const createUser = async (payload: any) => {
  try {
    const client = await clientRequest()
    const user = await client.items.create({
      item_type: { id: SCHEMA_TYPES.USER, type: 'item_type' },
      meta: {
        status: 'published',
      },
      name: `${payload.nickname} user`,
      lastname: payload.email,
      username: payload.nickname,
      email: payload.email,
      authreference: payload.nickname,
      isNew: true,
    })

    return {
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      createdAt: user.createdAt,
      username: user.username,
      authreference: user.authreference,
      issuer: user.authreference,
    } as UserProps
  } catch (e) {
    if (e instanceof ApiError) {
      console.log('ERROR__', e)
    } else {
      throw e
    }
  }
}

export const getSuggestions = async (
  limit: number,
  offset: string
): Promise<UserProps[]> => {
  console.log('OFFSET___', offset)
  const { allUsers } = await request({
    query: SUGGESTIONS_QUERY,
    variables: { limit, offset },
    preview: false,
  })

  return allUsers
}

export const updateUserFollows = async (
  user: UserProps,
  followings: string[]
) => {
  try {
    const client = await clientRequest()

    const follow = await client.items.update(String(user?.id), {
      item_type: { id: SCHEMA_TYPES.USER, type: 'item_type' },
      meta: {
        status: 'published',
      },
      followers: [...(followings as string[])],
    })

    return follow
  } catch (e) {
    if (e instanceof ApiError) {
      console.log('ERROR__', e)
    } else {
      throw e
    }
  }
}
