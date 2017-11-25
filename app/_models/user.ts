import {FoodBusiness} from './business.ts'
export class User {
    id: number;
    
    name: string;
    lastName: string;
    cuit: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    location: string;
    business: FoodBusiness;
}