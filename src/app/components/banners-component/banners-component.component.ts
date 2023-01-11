import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banners-component',
  templateUrl: './banners-component.component.html',
  styleUrls: ['./banners-component.component.scss'],
})
export class BannersComponentComponent implements OnInit {
  text: string = 'asdasdas';
  // imgUrl: string = './asset';

  constructor() {}

  ngOnInit() {
    this.text = 'hola comoestas';
  }
}
