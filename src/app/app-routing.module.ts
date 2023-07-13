import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppAccessdeniedComponent} from './mains/pages/app.accessdenied.component';
import {AppNotfoundComponent} from './mains/pages/app.notfound.component';
import {AppErrorComponent} from './mains/pages/app.error.component';
import {Route} from './mains/Shared/Route/Route';
import {AdminGuard} from './mains/Shared/guards/admin-guard.service';
import {Role} from './mains/Shared/Models/role';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    redirectTo: Route.GOODS,
                    pathMatch: 'full'
                },

                {
                    path: `${Route.GOODS}`,
                    loadChildren: () => import('./goods/goods.module').then(m => m.GoodsModule)
                },
                {
                    path: `${Route.SCAN}`,
                    loadChildren: () => import('./scan/scan.module').then(m => m.ScanModule)
                },


                {path: 'error', component: AppErrorComponent},
                {path: 'access', component: AppAccessdeniedComponent},
                {path: 'notfound', component: AppNotfoundComponent},
                {path: '**', redirectTo: '/notfound'},

            ],
            {scrollPositionRestoration: 'enabled'}
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}

