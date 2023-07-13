import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private messagSource = new BehaviorSubject({type: '', filter: ''});

  currentMessage = this.messagSource.asObservable();

  constructor() { }

  filter(message: any){

    this.messagSource.next(message);

  }
}
