import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScanRoutingModule } from './scan-routing.module';
import {ScanComponent} from './scan/scan.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {RippleModule} from 'primeng/ripple';


@NgModule({
  declarations: [
    ScanComponent

  ],
    imports: [
        CommonModule,
        ScanRoutingModule,
        ReactiveFormsModule,
        ButtonModule,
        InputTextModule,
        DropdownModule,
        RippleModule
    ]
})
export class ScanModule { }
