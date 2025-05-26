import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { METHODS } from '../enums/methods.ts'

export class HttpRequest {
    private readonly axiosInstance: AxiosInstance
    private readonly axiosAbort: AbortController

    constructor(baseURL: string, timeout: number = 5000) {
        this.axiosInstance = axios.create({ baseURL, timeout })
        this.axiosAbort = new AbortController()
    }

    private async request<T>(
        method: METHODS,
        { endpoint, params }: { endpoint: string; params?: AxiosRequestConfig },
    ): Promise<T> {
        const config: AxiosRequestConfig = { ...params }
        config.signal = this.axiosAbort.signal
        const response = await this.axiosInstance[method]<T>(endpoint, config)
        return response.data
    }

    async get<T>(endpoint: string, params?: AxiosRequestConfig): Promise<T> {
        return await this.request(METHODS.GET, { endpoint, params })
    }

    async post<T>(
        endpoint: string,
        data?: T,
        params?: AxiosRequestConfig,
    ): Promise<T> {
        const config: AxiosRequestConfig = { ...params, data }
        return await this.request(METHODS.POST, { endpoint, params: config })
    }
    async put<T>(
        endpoint: string,
        data?: T,
        params?: AxiosRequestConfig,
    ): Promise<T> {
        const config: AxiosRequestConfig = { ...params, data }
        return await this.request(METHODS.PUT, { endpoint, params: config })
    }
    async delete<T>(endpoint: string, params?: AxiosRequestConfig): Promise<T> {
        return await this.request(METHODS.DELETE, { endpoint, params })
    }
}
