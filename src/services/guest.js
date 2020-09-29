import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'https://radio-transatlantica.herokuapp.com/')
  : (baseURL = 'http://localhost:3000');

const service = axios.create({ withCredentials: true, baseURL });

export const getAllGuests = async () => {
    return await service.get('/guests')
}

export const getOneGuest = async guestId =>{
    return await service.get(`/guests/${guestId}`)
}

export const createGuest = async guestInfo => {
    return await service.post('/guests', guestInfo)
}

export const updateGuest = async ({guestId,guestInfo}) =>{
    return await service.put(`/guests/${guestId}`, guestInfo)
}

export const deleteGuest = async guestId =>{
    return await service.delete(`/guests/${guestId}`)

}


