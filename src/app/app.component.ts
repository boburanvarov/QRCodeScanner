import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    topbarTheme = 'light';

    menuTheme = 'dim';

    layoutMode = 'light';

    menuMode = 'horizontal';

    isRTL = false;

    inputStyle = 'filled';

    ripple: boolean;

    constructor(private primengConfig: PrimeNGConfig,
                private router : Router) {

    }

    ngOnInit() {
        this.primengConfig.ripple = true;

        // this.router.events.subscribe(e => {
        //
        //
        //     if (e instanceof NavigationEnd) {
        //         if(this.router.url === '/account'){
        //             this.router.navigate(['/account/favorites']);
        //         }
        //         // console.log(this.router.url);
        //         // console.log(this.router.url === '/account/favorites');
        //     }
        //
        // });
    }


}
