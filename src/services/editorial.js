import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'https://radio-transatlantica.herokuapp.com/')
  : (baseURL = 'http://localhost:3000');

const service = axios.create({ withCredentials: true, baseURL });

export const getAllEditorials = async () => {
    return await service.get('/editorial')
}

export const getOneEditorial = async editorialId =>{
    return await service.get(`/editorial/${editorialId}`)
}

export const createEditorial = async editorialInfo =>{
    await service.post('/editorial', editorialInfo)
}

export const updateEditorial = async xxx =>{
    await service.put()
}

export const deleteEditorial = async xxx =>{
    await service.delete()
}
