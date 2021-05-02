import { Component, Input, OnInit } from '@angular/core'
import { CoinAPIService } from 'src/app/services/coin-api.service'
import { ICoin, Coin } from 'src/app/interfaces/ICoin'

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
  providers: [CoinAPIService]
})

export class RowComponent implements OnInit {
  @Input() coin: ICoin;
  symbolString:string;

  constructor(private _coinService:CoinAPIService) {}

  ngOnInit(): void {
    this.symbolString = this.coin.symbol.toUpperCase();
  }
}
