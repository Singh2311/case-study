import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimerService } from '../../service/timer.service';

@Component({
  selector: 'app-timerstamp',
  templateUrl: './timerstamp.component.html',
  styleUrls: ['./timerstamp.component.scss']
})
export class TimerstampComponent implements OnInit,OnDestroy {
  allTimerData: any;
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
