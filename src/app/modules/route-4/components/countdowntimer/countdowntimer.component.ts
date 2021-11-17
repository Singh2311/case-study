import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimerService } from '../../service/timer.service';

@Component({
  selector: 'app-countdowntimer',
  templateUrl: './countdowntimer.component.html',
  styleUrls: ['./countdowntimer.component.scss']
})
export class CountdowntimerComponent implements OnInit,OnDestroy {
  countTime:number = 0;
  interval:any;
  pauseTimer:boolean = false;
  started:number=0;
  paused:number=0;
  timerData:Array<any>=[];
  timerLimitSub:any;
  timerLimitPauseStatusSub:any;
  constructor(private timerService:TimerService) { }

  ngOnInit(): void {
    this.timerLimitSub = this.timerService.timerLimit.subscribe((data:number)=>{
      if(data){
        this.countTime = data;
        // type  1 for start and 2 for paused 
        this.started++;
        this.timerData.push(this.timerDataObject(this.countTime,1));
        const dispatchData:any = {
          data:this.timerData,
          startcount:this.started,
          pausedCount:this.paused
        }
        this.timerService.timerDataCountSendData(dispatchData)
        this.startTimerInerval();
      }
      else{
        this.countTime = data;
        this.timerData =[];
        this.started = 0;
        this.paused = 0;
        clearInterval(this.interval); 
        const dispatchData:any = {
          data:this.timerData,
          startcount:this.started,
          pausedCount:this.paused
        }
        this.timerService.timerDataCountSendData(dispatchData)
      }

    });
    this.timerLimitPauseStatusSub = this.timerService.timerLimitPauseStatus.subscribe((data:boolean)=>{
      this.pauseTimer = data;
      
      if(this.pauseTimer){
        this.timerData.push(this.timerDataObject(this.countTime,1));
        this.started++;
        this.startTimerInerval();
      }
      else{
        this.timerData.push(this.timerDataObject(this.countTime,2));
        this.paused++;
        clearInterval(this.interval); 
      }
      const dispatchData:any = {
        data:this.timerData,
        startcount:this.started,
        pausedCount:this.paused
      }
      this.timerService.timerDataCountSendData(dispatchData)
    });
  }


  timerDataObject(timer:number,type:number){
    const data = {
      date : this.dateTimeFormat(),
      type: type,
      limit: JSON.parse(JSON.stringify(timer))
    };
    return data;
  }

  startTimerInerval() {
    this.interval = setInterval(() => {
      if(this.countTime > 0) {
        this.countTime--;
      } else {
        this.countTime = 0;
        clearInterval(this.interval);
        this.timerService.timerLimitZeroSendData(true)
      }
    },1000)
  }

  dateTimeFormat(){
    const date = new Date();
    const time = date.toLocaleTimeString();
     return date.getDate() +'-'+ Number(date.getMonth()+1) +'-'+ date.getFullYear() +' '+time;

  }


  ngOnDestroy(){
    clearInterval(this.interval);
    this.timerLimitSub.unsubscribe();
    this.timerLimitPauseStatusSub.unsubscribe();
  
  }

}
