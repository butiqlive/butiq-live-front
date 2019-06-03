import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService{

    public save(key: string, value: object| string): void{
        localStorage.setItem(key, JSON.stringify(value));
    }

    public load<T>(key: string): T | string{
        let loaded = localStorage.getItem(key);
        try{
            return JSON.parse(loaded) as T;
        }catch(ex){
            return loaded;
        }
    }

    public remove<T>(key): T | string{
        let removed = this.load<T>(key);
        localStorage.removeItem(key);
        return removed;
    }

    public clear(){
        localStorage.clear();
    }

}

export class LocalStorageKeys{
    public static TOKEN: string = "TOKEN";
}