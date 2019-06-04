import { NgModule } from '@angular/core';

import { ApiService } from './shared/api.service';
import { JwtService } from './shared/jwt.service';
import { LocalStorageService } from './shared/local-storage.service';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@NgModule({
    providers: [
        ApiService,
        JwtService,
        LocalStorageService,
        AuthService,
        UserService
    ]
})
export class ServicesModule{ }