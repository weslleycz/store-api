export type Product = {
    name: string;
    quantity: number;
    price: number;
    discount: number?;
    description: string;
    type: string;
    code_bar: string?;
    url: string?;
};

export type ProductUpdate = {
    name: string?;
    quantity: number?;
    price: number?;
    discount: number?;
    description: string?;
    type: string?;
    code_bar: string?;
    url: string?;
};
