interface User {
    name: string;
    surname: string;
}

interface SuccessResponse<T> {
    success: true,
    payload: T
}

interface ErrorResponse {
    success: false,
    error: string
}

type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

const response: ApiResponse<User> = {
    success: true,
    payload: {
        name: 'Marcin',
        surname: 'Grygierek'
    }
}

const errorResponse: ApiResponse<User> = {
    success: false,
    error: 'User does not exist'
}

interface Address {
    city: string;
    street: string;
}

type UserWithAddress = User & Address;

const userWithAddress: UserWithAddress = {
    name: 'Marcin',
    surname: 'Grygierek',
    city: 'Gliwice',
    street: 'Główna'
}
