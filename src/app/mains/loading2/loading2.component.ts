import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Route} from '../Shared/Route/Route';

@Component({
  selector: 'app-loading2',
  templateUrl: './loading2.component.html',
  styleUrls: ['./loading2.component.scss']
})
export class Loading2Component implements OnInit {

  constructor(
      private router: Router
  ) { }

  ngOnInit(): void {
      this.loadingCount()

  }

  loadingCount(){
      let counter = 0;
      let c = 0;
      let i = setInterval(()=>{
          document.querySelector(".loading-page .counter h1").innerHTML=c + "%";
          document.querySelector(".loading-page .counter hr").setAttribute("style" ,`width ${c}%`)


          counter++;
          c++;

          if(counter == 101) {
              clearInterval(i);
              // this.router.navigate([`${Route.PAYMO}`]).then();
          }
      }, 50);
  }

}
