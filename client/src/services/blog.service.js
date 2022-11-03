import {allBlogs} from "./api"

class BlogService{
   getAllBlogs(){
      return allBlogs()
   }
}

export default new BlogService();