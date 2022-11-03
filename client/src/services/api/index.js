import axios from 'axios'

const url = "http://localhost:8080"

export const signUpUser = (user) => axios.post(`${url}/auth/signup`, user, {})
export const loginUser = (user) => axios.post(`${url}/auth/signin`, user)
export const signout = () => axios.post(`${url}/auth/signout`)

export const allBlogs = () => axios.get('/blogs/all');