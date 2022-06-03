export type Product = {
    _id: number | string;
    name: string,
    img: string,
    desc: string,
}

export type ProductCreate = {
    name: string
}