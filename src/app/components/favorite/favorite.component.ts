import { Component, OnInit, Input } from '@angular/core';
import { ICoin } from 'src/app/interfaces/ICoin'
import { CoinAPIService } from 'src/app/services/coin-api.service'

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  providers: [CoinAPIService]
})
export class FavoriteComponent implements OnInit {

  @Input() favoriteCoin : ICoin;
  symbolString:string;

  constructor(private _coinService:CoinAPIService) { }

  ngOnInit(): void {
    this.symbolString = this.favoriteCoin.symbol.toUpperCase();
  }

  deleteItem(favoriteCoinName:string ){
    this._coinService.deleteItem(favoriteCoinName);
  }
}
