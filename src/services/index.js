import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'https://radio-transatlantica.herokuapp.com')
  : (baseURL = 'http://localhost:3000');

const service = axios.create({ withCredentials: true, baseURL });


export const signup = async user => {
    return await service.post("/signup", user)
  }

  export const login = async user => {
    return await service.post("/login", user)
  }

  export const logOut = async () => {
    return await service.get("/logout")
  }

  export const getProfile = async () => {
    return await service.get("/profile")
  }

  //============USERS===========

  export const getAllUsers = async () => {
    return await service.get('/users')
  }

  //========LOVE BUTTON =======

  export const addShowLoved = async showsLoved => {
      return await service.put("/addlove", showsLoved)
  }

  export const deleteShowLoved = async showsLoved => {
    return await service.put('/deletelove', showsLoved)
}

//============SOCIAL===========

  export const facebookLogin = async () => {
    return await service.get("/auth/facebook")
  }
  
//   export const GoogleLogin = async () => {
//     return await service.get("/auth/google")
//   }