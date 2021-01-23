import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderService, ISpinnerState } from './loader.service';
import { Subscription } from 'rxjs';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit, OnDestroy {
  options: AnimationOptions = {
    path: '../../../../../assets/loader.json',
  };

  visible = true;

  private _spinnerStateChanged: Subscription = new Subscription();

  constructor(private _loaderService: LoaderService) {}

  ngOnInit(): void {
    this._spinnerStateChanged = this._loaderService.spinnerState.subscribe(
      (state: ISpinnerState) => (this.visible = state.show)
    );
  }

  ngOnDestroy(): void {
    this._spinnerStateChanged?.unsubscribe();
  }

  animationCreated(_animationItem: AnimationItem): void {}
}
