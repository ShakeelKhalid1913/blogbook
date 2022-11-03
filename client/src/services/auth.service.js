import {loginUser, signUpUser} from "./api"

class AuthService{
   login(data){
      return loginUser(data).then(res => {
         if (res.data.accessToken ){
            localStorage.setItem("user", JSON.stringify(res.data))
         }
         return res.data;
      })
   }

   logout(){
      localStorage.removeItem("user")
   }

   register(data){
      return signUpUser(data)
   }

   getCurrentUser(){
      return JSON.parse(localStorage.getItem("user"))
   }
}

export default new AuthService();