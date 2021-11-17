import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-countdowntimer',
  templateUrl: './countdowntimer.component.html',
  styleUrls: ['./countdowntimer.component.scss']
})
export class CountdowntimerComponent implements OnInit {
  countTime!:number;
  started:number=0;
  paused:number=0;
  pauseTimer:boolean = false;
  timerData:Array<any>=[];
  @Output() timerDataCountSendData = new EventEmitter<Array<any>>();
  @Output() timeLeft = new EventEmitter<number>();

  @Input() set countTimeData(value:number){
    
    if(value){
      this.countTime = value;
      this.started++;
      this.timerData.push(this.timerDataObject(this.countTime,1));
        const dispatchData:any = {
          data:this.timerData,
          startcount:this.started,
          pausedCount:this.paused
        }
        this.timerDataCountSendData.emit(dispatchData)
      this.startTimerInerval();
    }
    else{
      this.countTime = value;
      this.resetData();
      clearInterval(this.interval); 
      const dispatchData:any = {
        data:this.timerData,
        startcount:this.started,
        pausedCount:this.paused
      }
      this.timerDataCountSendData.emit(dispatchData)
    }
    
  }

  @Input() set timerLimitPauseStatus(value:boolean){
    
    this.pauseTimer = value;
    if(this.pauseTimer != undefined){
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
      this.timerDataCountSendData.emit(dispatchData);
    }

  }
  interval:any;
  constructor() { }

  ngOnInit(): void {
  }


  startTimerInerval() {
    this.interval = setInterval(() => {
      if(this.countTime > 0) {
        this.countTime--;
      } else {
        this.countTime = 0;
        
        clearInterval(this.interval);
        this.timeLeft.emit(this.countTime);
        this.resetData();
      }
    },1000)
  }

  dateTimeFormat(){
    const date = new Date();
    const time = date.toLocaleTimeString();
     return date.getDate() +'-'+ Number(date.getMonth()+1) +'-'+ date.getFullYear() +' '+time;
  }


  timerDataObject(timer:number,type:number){
    const data = {
      date : this.dateTimeFormat(),
      type: type,
      limit: JSON.parse(JSON.stringify(timer))
    };
    return data;
  }


  resetData(){
    this.timerData = []
    this.started =0;
    this.paused= 0;
  }
}
