export type Product = {
    id: number | string;
    name: string,
    img: string,
    desc: string,
    status: number
}

export type ProductCreate = {
    name: string,
    status?: number
}