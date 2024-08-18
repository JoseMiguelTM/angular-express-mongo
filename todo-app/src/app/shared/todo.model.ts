interface MongoResponse {
    text: string;
    _id: string;
    __v: number;
}

export interface ToDo {
    code: number;
    success: boolean;
    message: string;
    data: MongoResponse;
}