import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timerstamp',
  templateUrl: './timerstamp.component.html',
  styleUrls: ['./timerstamp.component.scss']
})
export class TimerstampComponent implements OnInit {
    @Input() allTimerData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
