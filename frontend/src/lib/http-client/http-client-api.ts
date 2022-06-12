import { HttpClient } from './http-client'

const httpClientApi = new HttpClient(process.env.CLIENT_URL as string)

const httpClient = httpClientApi.httpClient
export { httpClient }
