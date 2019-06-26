import Cookies from 'js-cookie'

const TokenKey = 'tocean-pm'

export const getToken = () => Cookies.get(TokenKey)

export const setToken = (token: string) => Cookies.set(TokenKey, token)

export const removeToken = () => Cookies.remove(TokenKey)
