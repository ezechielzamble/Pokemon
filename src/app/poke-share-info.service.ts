import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  public stringVar = new Subject<string>();

  getObservable(): Subject<string>{
    return this.stringVar;
  }
  public setValue(newStringVar: string){
    this.stringVar.next(newStringVar);
  }

  constructor() { }
  // value: string;
  // getValue(): string{
  //   return this.value;
  // }
  // setValue(value: string){
  //   this.value = value;
  // }
}
