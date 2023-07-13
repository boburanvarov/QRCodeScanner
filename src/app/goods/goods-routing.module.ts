import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GoodsComponent} from './goods/goods.component';
import {AppMainComponent} from '../mains/main/app.main.component';

const routes: Routes = [
    {
        path: '',
        component: AppMainComponent,
        children: [
            {
                path: '',
                component: GoodsComponent
            }
        ]
    }
    ]
;

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GoodsRoutingModule {
}
