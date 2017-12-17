import {FoodMenu} from './menu'
export class FoodBusiness {
    id: number;
    name: string;
    logo: string;
    mapLocation: string;
    description: string;
    deliveryLocation: string;
    website: string;
    menues: Array<FoodMenu>;
}