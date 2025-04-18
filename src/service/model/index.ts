export type ApiResponse<T = unknown> = {
    status_code?: number
    message?: string
    status?: boolean
    access_token?: string
    refresh_token?: string
    issued_at?: number
    expired_at?: number
    data?: T | null
}