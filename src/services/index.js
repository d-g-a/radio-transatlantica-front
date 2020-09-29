import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'here should be your production endpoint')
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

  export const getAllProfiles = async () => {
    return await service.get("/profile")
  }

  //========LOVE BUTTON =======

  export const addShowLoved = async showsLoved => {
      return await service.put("/addlove", showsLoved)
  }

  export const deleteShowLoved = async () => {
    return await service.delete("/addlove")
}

//=======SOCIAL=======

  export const facebookLogin = async () => {
    return await service.get("/auth/facebook")
  }
  
  export const GoogleLogin = async () => {
    return await service.get("/auth/google")
  }