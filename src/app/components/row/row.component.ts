import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/coin-api.service'
import { ICoin } from 'src/app/interfaces/ICoin'

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
  providers: [DataService]
})

export class RowComponent implements OnInit {
  
  @Input() coin: ICoin;
  symbolString:string;

  constructor() { }

  ngOnInit(): void {
    this.symbolString = this.coin.symbol.toUpperCase();
  }

  /*coinData: ICoin[];
  errorMessage: any;

  constructor(private _coinService:DataService) {}

  ngOnInit() {
    this.getCoinDetails();
  }

  getCoinDetails() {
    this._coinService.getCoinData().subscribe({
      next: (coins: ICoin[]) => this.coinData = coins,
      complete: () => console.log('coin service finished'),
      error: (mess) => this.errorMessage = mess}
    )
  }*/
}
