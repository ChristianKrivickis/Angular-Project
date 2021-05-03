import { Component, OnInit } from '@angular/core';
import { CoinAPIService } from 'src/app/services/coin-api.service'
import { ICoin } from 'src/app/interfaces/ICoin'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [CoinAPIService]
})
export class ListComponent implements OnInit {
  coinData: ICoin[];
  favoriteCoinData: ICoin[];
  errorMessage: any;

  constructor(private _coinService:CoinAPIService) {}

  ngOnInit() {
    this.getCoinDetails();

    this._coinService.getFavoriteCoin().subscribe(favoriteCoinData =>{
      this.favoriteCoinData = favoriteCoinData
    });
  }

  getCoinDetails() {
    this._coinService.getCoinData().subscribe({
      next: (coins: ICoin[]) => this.coinData = coins,
      complete: () => console.log('coin service finished'),
      error: (mess) => this.errorMessage = mess}
    )
  }
}
