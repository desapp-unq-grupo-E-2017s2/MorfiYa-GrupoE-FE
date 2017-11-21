import {FoodBusiness} from './business.ts'
export class User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    cuit: string;
    phone: string;
    address: string;
    location: string;
    business: FoodBusiness;
}