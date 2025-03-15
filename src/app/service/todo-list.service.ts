import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITaks } from '../interfaces/ITaks';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private readonly _taks: BehaviorSubject<ITaks> = new BehaviorSubject<ITaks>({} as ITaks);
  private readonly _taksArray: BehaviorSubject<ITaks[]> = new BehaviorSubject<ITaks[]>([]);
  constructor() { }
  taksSet(value: ITaks): void {
    this._taks.next(value);
  }

  get taks(): Observable<ITaks> {
    return this._taks;
  }

  // taksSetAr(value: ITaks[]): void {
  //   this._taks.next(value);
  // }

  // get taksAr(): Observable<ITaks[]> {
  //   return this._taks;
  // }
}
