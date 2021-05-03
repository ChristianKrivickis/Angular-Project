import { Component, OnInit } from '@angular/core';
import { CoinAPIService } from './services/coin-api.service'
import { ICoin, Coin } from './interfaces/ICoin'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CoinAPIService]
})

export class AppComponent{
  searchedCoinData: ICoin[];
  favoritecoinsData: ICoin[];
  errorMessage: any;

  constructor(private _coinService:CoinAPIService) {}

  ngOnInit() : void{
    
  }

  searchedCoin(coinName:string) : boolean{
    this._coinService.searchForCoin(coinName).subscribe(
      searchedCoinData => {
        this.searchedCoinData = searchedCoinData;
      },
      error => this.errorMessage = <any>error
    );
    return false;
  }

  addCoinToFavorites(symbol: string, name: string, image: string, current_price: number, market_cap_rank: number) : boolean{
    let tempCoin : ICoin;
    tempCoin = new Coin(symbol, name, image, current_price, market_cap_rank);
    console.log(tempCoin);
    this._coinService.addCoinData(tempCoin);
    return false;
  }
  
}
