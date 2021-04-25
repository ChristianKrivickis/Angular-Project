import { Component, OnInit } from '@angular/core';
import { DataService } from './services/coin-api.service'
import { ICoin } from './interfaces/ICoin'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})

export class AppComponent{
  searchedCoinData: ICoin[];
  errorMessage: any;

  constructor(private _coinService:DataService) {}

  searchedCoin(coinName:string) : boolean{
    this._coinService.searchForCoin(coinName).subscribe(
      searchedCoinData => {
        this.searchedCoinData = searchedCoinData;
      },
      error => this.errorMessage = <any>error
    );
    return false;
  }
}
