import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-timerlimit',
  templateUrl: './timerlimit.component.html',
  styleUrls: ['./timerlimit.component.scss']
})
export class TimerlimitComponent implements OnInit {
  timerForm!: FormGroup;
  @Output() timeLimit = new EventEmitter<number>();
  @Output() timerLimitPauseStatusSendData = new EventEmitter<boolean>();
  @Input() allTimerData: any =[]
 
  pauseTimer:boolean = false;
  timeLimitZero:boolean=true;
  @Input() set totalTimeLeftZero(value:number){
    
    if(value==0){
      this.timeLimitZero = true;
    }
  
  }
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.timerForm = this.fb.group({
      timeLimit : ['',[Validators.required,Validators.min(1),Validators.max(10000)]]
    })
  }

  startTime(event:any){
  

    if(event.timeLimit){
          // this.timeLimit.emit(0);
        // this.resetTimer();
        this.timeLimitZero = false;
        this.timeLimit.emit(event.timeLimit);
        this.timerForm.reset();
    }
    else{
      if(!this.timeLimitZero){
        
        if(this.pauseTimer){
          this.timerLimitPauseStatusSendData.emit(true)
        }
        else{
          this.timerLimitPauseStatusSendData.emit(false)
        }
        this.pauseTimer = !this.pauseTimer;
       
      }
      return;
    }
  }

  resetTimer(){
    this.pauseTimer = false;
    this.timeLimitZero = true;
    this.timeLimit.emit(0);
  }

}
