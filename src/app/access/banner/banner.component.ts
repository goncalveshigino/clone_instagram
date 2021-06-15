import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
      state('hide', style({
        opacity: 0
      })),
      state('show', style({
        opacity: 1
      })),
      transition('hide <=> show', animate('2s ease-in')),
 
    ])
  ]
})
  
export class BannerComponent implements OnInit {

  status: string = 'hide';

  constructor() { }

  ngOnInit(): void {
  }

  toggleStatus(): void {
    this.status = this.status === 'show' ? 'hide': 'show'
  }

}
