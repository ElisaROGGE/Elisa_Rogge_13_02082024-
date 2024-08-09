import { fetchData } from "../../utils/fetch";

export const login = (data) => fetchData(`http://localhost:3001/api/v1/user/login`, 'POST', data)
export const getUser = (token) => fetchData(`http://localhost:3001/api/v1/user/profile`, 'POST', null, token)