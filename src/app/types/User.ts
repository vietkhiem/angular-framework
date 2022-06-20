export type User = {
    _id: string,
    name: string,
    email: string,
    password: string,
    role: number,

};
export type UsersCreate = {
    name: string,
    email: string,
    password: string,
    role: number,
}