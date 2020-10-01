import React, {createContext, useState, useEffect} from 'react'
import { getProfile } from './services/index'


export const MyContext = createContext()

export default function Provider({children}){
    const [user,setUser] = useState(null)

    const setContextUser = user => setUser(user)
    const clearContextUser = () => setUser(null)


    useEffect(()=>{
        async function profile(){
            const {data : { user }} = await getProfile()
            setContextUser(user)
        }
        profile()
    },[])

    return (
    <MyContext.Provider
     value={{
         user,
         setContextUser,
         clearContextUser
     }}
     >
        {children}
    </MyContext.Provider>
    )
    


}



