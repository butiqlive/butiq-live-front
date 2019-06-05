import { User } from "../../../shared/models/user.model";

export class UserMapper{
    static mapFromBe(be): User{
        return new User({
            id: be.id,
            name: be.name,
            lastName: be.lastName,
            email: be.email,
            password: be.password,
            birthDate: be.birthDate,
            phoneNumber: be.phoneNumber
        });
    }

    static mapToBe(user: User){
        return {
            id: user.id,
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
        }
    }
}