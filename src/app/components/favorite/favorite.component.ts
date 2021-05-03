import { Component, OnInit, Input } from '@angular/core';
import { ICoin } from 'src/app/interfaces/ICoin'


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input() favoriteCoin : ICoin;

  constructor() { }

  ngOnInit(): void {
    
  }

}
