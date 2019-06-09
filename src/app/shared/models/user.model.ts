import { BaseModel } from "./base/base-model";

export class User extends BaseModel<User>{

    public name: string;
    public lastName: string;
    public email: string;
    public password: string;
    public birthDate: string;
    public numberIdentifier: string;
    public address: string;
    public phoneNumber: string;
    public status: boolean;
    public cityName: string;
    public provinceName: string;
    public emergencyContactName: string;
    public emergencyContactPhone: string;
    public gender: string;
    public weight: number;
    
}