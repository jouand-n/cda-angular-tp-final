export interface ResponseApi<T = void> {
    code : string
    message : string
    data? : T
}
