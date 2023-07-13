import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodsRoutingModule } from './goods-routing.module';
import {GoodsComponent} from './goods/goods.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {InputNumberModule} from 'primeng/inputnumber';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    GoodsComponent
  ],
    imports: [
        CommonModule,
        GoodsRoutingModule,
        InputTextModule,
        ButtonModule,
        InputNumberModule,
        ReactiveFormsModule
    ]
})
export class GoodsModule { }
