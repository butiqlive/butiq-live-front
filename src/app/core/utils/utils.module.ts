import { NgModule } from '@angular/core';
import { NotificationUtil } from './notification.util';
import { AuthUtil } from './auth.util';

@NgModule({
    providers: [
        NotificationUtil,
        AuthUtil
    ]
})
export class UtilsModule{ }