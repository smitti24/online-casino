import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface ISpinnerState {
  show: boolean;
}

@Injectable()
export class LoaderService {
  private _spinnerSubject = new Subject();

  spinnerState =  this._spinnerSubject as Observable<ISpinnerState>;

  public show(): void {
    this._spinnerSubject.next( { show: true } as ISpinnerState);
  }

  public hide(): void {
    this._spinnerSubject.next( { show: false } as ISpinnerState);
  }
}
