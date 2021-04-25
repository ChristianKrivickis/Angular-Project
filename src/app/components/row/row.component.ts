import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/coin-api.service'
import { ICoin } from 'src/app/ICoin'

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
  providers: [DataService]
})

export class RowComponent implements OnInit {
  coinData: ICoin[];
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
  }

}
