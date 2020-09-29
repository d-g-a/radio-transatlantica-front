import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'https://radio-transatlantica.herokuapp.com/')
  : (baseURL = 'http://localhost:3000');

const service = axios.create({ withCredentials: true, baseURL });

export const getShows = async () => {
    return await service.get('/shows')
}

export const getShow = async showId =>{
    return await service.get(`/shows/${showId}`)
}

export const createShow = async showInfo => {
    return await service.post('/shows', showInfo)
}

export const updateShow = async ({showId,showInfo}) =>{
    return await service.put(`/shows/${showId}`, showInfo)
}

export const deleteShow = async showId =>{
    return await service.delete(`/shows/${showId}`)

}
