export type TypeLoginRequest = {
    email: string,
    password: string
};

export type TypeLoginResponse = {
    accessToken: string,
    user: {
        id: number,
        email: string
    }
};

export type TypeSignupRequest = {
    email: string,
    password: string
};