import { NgModule } from '@angular/core';

import { AuthGuard } from './auth.guard';
import { HomeGuard } from './home.guard';

@NgModule({
    providers: [
        AuthGuard,
        HomeGuard
    ]
})
export class GuardsModule{ }