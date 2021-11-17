import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  countTime!:number;
  allTimerData:Array<any>=[];
  timerLimitPauseStatus!:boolean;
  totalTimeLeftZero!:number;
  constructor() { }

  ngOnInit(): void {
  }

  getCountTime(event:any){
    
    this.countTime = event;
    this.totalTimeLeftZero = -1;
  }

  timerDataCountSendData(event:any){
    this.allTimerData = event;
  }

  timerLimitPauseStatusSendData(event:any){
    
    this.timerLimitPauseStatus = event;
  }
  timeLeft(event:number){
    
    this.totalTimeLeftZero = event;
  }
}
