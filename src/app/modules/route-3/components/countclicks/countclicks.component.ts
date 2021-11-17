import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countclicks',
  templateUrl: './countclicks.component.html',
  styleUrls: ['./countclicks.component.scss']
})
export class CountclicksComponent implements OnInit {
  @Input() allTimerData: any =[]
  constructor() { }

  ngOnInit(): void {
  }

}
