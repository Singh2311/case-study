import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimerService } from '../../service/timer.service';

@Component({
  selector: 'app-countclicks',
  templateUrl: './countclicks.component.html',
  styleUrls: ['./countclicks.component.scss']
})
export class CountclicksComponent implements OnInit,OnDestroy {
  allTimerData: any =[];
  timerDataCountSub:any;
  constructor(private timerService:TimerService) { }

  ngOnInit(): void {
    this.timerDataCountSub = this.timerService.timerDataCount.subscribe((data:any)=>{
      this.allTimerData = data;
    });
  }

  ngOnDestroy(){
    this.timerDataCountSub.unsubscribe();  
  }

}
