import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-header-component',
  templateUrl: './nav-header-component.component.html',
  styleUrls: ['./nav-header-component.component.scss']
})
export class NavHeaderComponentComponent implements OnInit {

  constructor(private _router: Router) { }

  router = this._router;
  
  ngOnInit() {
  }

}
