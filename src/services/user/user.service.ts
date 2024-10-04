import { fetchData } from "../../utils/fetch";

interface ILogin {
    email: string
    password: string
}
interface IUser{
    lastName: string
    firstName: string
}

export const login = (data: ILogin) => fetchData(`http://localhost:3001/api/v1/user/login`, 'POST', data)
export const getUser = (token: string) => fetchData(`http://localhost:3001/api/v1/user/profile`, 'POST', null, token)
export const updateUser = (data: IUser, token: string) => fetchData(`http://localhost:3001/api/v1/user/profile`, 'PUT', data, token)