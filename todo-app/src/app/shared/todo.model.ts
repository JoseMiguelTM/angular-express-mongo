export interface MongoResponse {
    text: string;
    _id: string;
    __v: number;
}

export interface MongoToDo {
    code: number;
    success: boolean;
    message: string;
    data: MongoResponse[];
}

export interface ToDoResponse {
    code: number;
    success: boolean;
    message: string;
    data: MongoResponse;
}

export interface ToDo {
    text: string;
}