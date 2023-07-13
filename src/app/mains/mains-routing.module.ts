import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppLoginComponent} from '../auth/login/app.login.component';
import {Loading2Component} from './loading2/loading2.component';

const routes: Routes = [
    {
        path: 'login',
        component: AppLoginComponent
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainsRoutingModule {
}
