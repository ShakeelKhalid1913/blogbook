import {allBlogs} from "./api"

class BlogService{
   async getAllBlogs() {
      return await allBlogs().then(res => {
         return res.data.data
      }).catch(err => {
         return err
      })
   }
}

export default new BlogService();