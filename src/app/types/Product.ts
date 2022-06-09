export type Product = {
    _id: string,
    name: string,
    price: number,
    img: string,
    desc: string,
    status: number
}

export type ProductCreate = {
    name?: string,
    price: number,
    img: string,
    desc: string,
    status?: number
};