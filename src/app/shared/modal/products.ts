export interface Iproduct {
    pName: string;
    pId: string;
    pStatus: ProductStatus;
    canReturn: number;
}

export type ProductStatus = 'In Progress' | 'Dispathched' | 'Delevered';

export interface Iuser {
    userName: string;
    userId: string;
    userRole: 'admin' | 'user';
}