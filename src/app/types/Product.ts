export type Product = {
    _id: string,
    name: string,
    price: number,
    desc: string,
    img: string,
    category: string,
    sale_price: number,
    status: number,
}

export type ProductCreate = {
    name?: string,
    price: number,
    img: string,
    desc: string,
    status?: number
};

export type ProductCart = {
    _id: string,
    name: string,
    img: string
    price: number,
    quantity: number,
    value: number,
    sale_price: number
};
