interface IResponseError {
    error?: string;
}

export interface AuthResponse extends IResponseError {
    authenticated: boolean;
}

export interface LogoutResponse extends IResponseError {
    logout: boolean;
}
