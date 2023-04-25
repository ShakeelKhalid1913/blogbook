import axios from 'axios'

const url = 'http://localhost:8080' // used in proxy

export const signUpUser = (user) => axios.post('auth/signup', user)
export const loginUser = (user) => axios.post('auth/signin', user)
export const signout = () => axios.post('auth/signout')

export const uploadBlog = (data) => axios.post('blogs/upload', data)
export const allBlogs = () => axios.get('blogs/all')
export const allUserBlogs = (user_id) => axios.get(`blogs/${user_id}`)
