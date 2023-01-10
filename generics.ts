interface User {
    name: string;
}

const apiCall = <P, R>(data?: P) => {
    console.log(data);
    return {} as R
}

const user = apiCall<number, User>(1000);