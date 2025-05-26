import { HttpRequest } from './httpRequest'

export const http = new HttpRequest(import.meta.env.VITE_URL_API)
