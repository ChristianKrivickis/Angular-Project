import { Component } from '@angular/core';
import { CoinApiService } from './services/coin-api.component'
import { APIResponse } from './apiresponse'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CoinApiService]
})
export class AppComponent {
  coinData: APIResponse;
  errorMessage: any;

  constructor(private _coinService:CoinApiService) {}

  getCoinDetails(coinName:string) : boolean {
    this._coinService.getCoinData(coinName).subscribe(
      coinData => {
        this.coinData = coinData;
      },
      error => this.errorMessage = <any>error
    );
  return false;
  }
}
