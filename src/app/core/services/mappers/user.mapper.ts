import { User } from "../../../shared/models/user.model";

export class UserMapper{
    static mapFromBe(be){}

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