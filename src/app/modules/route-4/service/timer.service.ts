import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timerLimit = new Subject<number>();
  timerLimitZero = new Subject<boolean>();
  timerLimitPauseStatus = new Subject<boolean>();
  timerDataCount = new Subject<any>();
  constructor() { }


  timerLimitSendData(data:number){
    this.timerLimit.next(data)
  }

  timerLimitZeroSendData(data:boolean){
    this.timerLimitZero.next(data)
  }

  timerLimitPauseStatusSendData(data:boolean){
    this.timerLimitPauseStatus.next(data)
  }

  timerDataCountSendData(data:any){
    this.timerDataCount.next(data);
  }

}
