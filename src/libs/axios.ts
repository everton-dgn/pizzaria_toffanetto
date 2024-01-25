import axios from 'axios'

const baseURL = process.env.PUBLIC_API_BASE_URL

export const httpClient = axios.create({ baseURL })
