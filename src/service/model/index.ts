export type ApiResponse<T = unknown> = {
    code?: number
    message?: string
    status?: boolean
    data?: T | null
    dataProfile?: T | null
}