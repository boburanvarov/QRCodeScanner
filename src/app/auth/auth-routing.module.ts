import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppLoginComponent} from './login/app.login.component';
import {Loading2Component} from '../mains/loading2/loading2.component';
import {Route} from '../mains/Shared/Route/Route';

const routes: Routes = [
    {
        path: '', component: AppLoginComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
