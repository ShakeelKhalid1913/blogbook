import { allBlogs, allUserBlogs, uploadBlog } from './api'

class BlogService {
  getAllBlogs () {
    return allBlogs()
  }

  getAllUserBlogs (user_id) {
    return allUserBlogs(user_id)
  }

  uploadBlog (blogInfo) {
    return uploadBlog(blogInfo)
  }
}

export default new BlogService()
