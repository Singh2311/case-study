import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TimerService } from '../../service/timer.service';

@Component({
  selector: 'app-timerlimit',
  templateUrl: './timerlimit.component.html',
  styleUrls: ['./timerlimit.component.scss']
})
export class TimerlimitComponent implements OnInit,OnDestroy {
  timerForm!: FormGroup;
  timerData: Array<any> = [];
  pauseTimer:boolean = false;
  timeLimitZero:boolean=true;
  timeLimitZeroSub:any;
  timerDataCountSub:any;

  constructor(private fb:FormBuilder,private timerService:TimerService ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.timerForm = this.fb.group({
      timeLimit : ['',[Validators.required,Validators.min(1),Validators.max(10000)]]
    });
    this.timeLimitZeroSub = this.timerService.timerLimitZero.subscribe((data:boolean)=>{
      this.timeLimitZero = data;
    });
    this.timerDataCountSub = this.timerService.timerDataCount.subscribe((data:any)=>{
      this.timerData = data.data;
    })
  }

  startTime(event:any){
  

    if(event.timeLimit){
        this.resetTimer();
        this.timeLimitZero = false;
        this.timerService.timerLimitSendData(event.timeLimit);
        this.timerForm.reset();
    }
    else{
      if(!this.timeLimitZero){
       
        if(this.pauseTimer){
          this.timerService.timerLimitPauseStatusSendData(true);
        }
        else{
          this.timerService.timerLimitPauseStatusSendData(false);
        }
        this.pauseTimer = !this.pauseTimer;
       
      }
      return;
    }
  }

  resetTimer(){
    this.pauseTimer = false;
    this.timeLimitZero = true;
    this.timerService.timerLimitSendData(0);
  }

  
  ngOnDestroy(){
    this.timeLimitZeroSub.unsubscribe();
    this.timerDataCountSub.unsubscribe();
  }
}

