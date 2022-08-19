import type { MockMethod } from 'vite-plugin-mock'
import { getRequestToken, resultError, resultOk } from '../_util'
const userList = [
  {
    userId: '1',
    username: 'admin',
    realName: 'Super Admin',
    avatar: 'https://dummyimage.com/640x640/1c66c7/fff.png&text=admin',
    desc: 'mock user 1',
    password: '123456',
    token: 'mockToken1',
    roles: [
      {
        roleName: 'Super Admin',
        value: 'super',
      },
    ],
  },
  {
    userId: '2',
    username: 'test',
    password: '123456',
    realName: 'test',
    avatar: 'https://dummyimage.com/640x640/1c66c7/fff.png&text=test',
    desc: 'mock user 1',
    token: 'mockToken2',
    roles: [
      {
        roleName: 'Tester',
        value: 'test',
      },
    ],
  },
]

export default [
  {
    url: '/api/login',
    timeout: 200,
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body
      const loginUser = userList.find(item => item.username === username && password === item.password)
      if (!loginUser)
        return resultError('Incorrect account or password!')
      const { userId, username: _username, token, realName, desc, roles } = loginUser
      return resultOk({
        roles,
        userId,
        username: _username,
        token,
        realName,
        desc,
      })
    },
  },
  {
    url: '/api/logout',
    timeout: 200,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request)
      if (!token)
        return resultError('Invalid token')
      const checkUser = userList.find(item => item.token === token)
      if (!checkUser)
        return resultError('Invalid token!')

      return resultOk(undefined, { message: 'Token has been destroyed' })
    },
  },
  {
    url: '/api/getUserInfo',
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request)
      if (!token)
        return resultError('Invalid token')
      const checkUser = userList.find(item => item.token === token)
      if (!checkUser)
        return resultError('The corresponding user information was not obtained!')

      return resultOk(checkUser)
    },
  },
  {
    url: '/api/logout',
    timeout: 200,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request)
      if (!token)
        return resultError('Invalid token')
      const checkUser = userList.find(item => item.token === token)
      if (!checkUser)
        return resultError('Invalid token!')

      return resultOk(undefined, { message: 'Token has been destroyed' })
    },
  },
] as MockMethod