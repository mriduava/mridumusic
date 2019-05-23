import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [
      transition('void =>*', [
        style({opacity:0}),
        animate(1000)
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  input = '';

  constructor(private route: Router) { }

  ngOnInit() {
  }

  submit(input: string) {
    this.route.navigate([input]);
  }
}
