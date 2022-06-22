interface addRessUser{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

export interface userType {
    id: number;
    name: string;
    username: string;
    email: string;
    address: addRessUser;
    phone: string;
    website: string;
}

export default function hold(){
    return 'ok'
}