import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScanComponent} from './scan/scan.component';
import {AppMainComponent} from '../mains/main/app.main.component';

const routes: Routes = [
    {
        path: '',
        component: AppMainComponent,
        children: [
            {
                path: '',
                component: ScanComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScanRoutingModule {
}
