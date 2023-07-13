import {CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppErrorHandler} from '../app/mains/Shared/Errors/app-error-handler';

import {AppComponent} from './app.component';
import {MainsModule} from './mains/mains.module';
import {InterceptorService} from './mains/Shared/interceptor/interceptor.service';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {MessageService} from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import {MaskDirective} from './mains/Shared/Directive/mask.directive';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MainsModule,
        SweetAlert2Module.forRoot(),
        MessagesModule,
        ToastModule,
    ],
    declarations: [
        AppComponent,

    ],
    providers: [
        MessageService,
        {provide: ErrorHandler, useClass: AppErrorHandler},
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    bootstrap: [AppComponent],

})
export class AppModule {
}
