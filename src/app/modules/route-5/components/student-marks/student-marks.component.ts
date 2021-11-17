import { Component, OnInit } from '@angular/core';
import { studentMarks } from 'src/app/model/model';
import { StudentMarksService } from '../../service/student-marks.service';

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.scss']
})
export class StudentMarksComponent implements OnInit {
  allStudentList$!: studentMarks[];
  allStudentListClone$!: studentMarks[];
  studentObj:any = {};
  // datatype 1 for string and 2 for number
  tableHead:any=[
    {
      name:'name',
      type:3,
      value:'Name',
      dataType : 1
    },
    {
      name:'class',
      type:3,
      value:'Class',
      dataType : 2
    },
    {
      name:'section',
      type:3,
      value:'Section',
      dataType : 1
    },
    {
      name:'sub1',
      type:3,
      value:'Sub1',
      dataType : 2
    },
    {
      name:'sub2',
      type:3,
      value:'Sub2',
      dataType : 2
    },
    {
      name:'sub3',
      type:3,
      value:'Sub3',
      dataType : 2
    }
  ]
  constructor(private studentMarksService:StudentMarksService) { }

  ngOnInit(): void {
    this.getAllProductList();
  }


  getAllProductList(){
    this.studentMarksService.getStudentMakrs().subscribe((data:any)=>{
     this.allStudentList$ = data;
     this.allStudentListClone$ = JSON.parse(JSON.stringify(data));
    },
    error =>{
      alert('something went wrong');
    }
    )
  }

  getSort(data:string,index:number){
    if(data in this.studentObj){
      this.studentObj[data]+=1;
      if(this.studentObj[data]>3){
        this.studentObj[data] = 1;
      }
    }
    else{
      this.studentObj = {};
      this.studentObj[data] = 1;
    }
    this.tableHead.forEach((element:any) => {
      element.type = 3;
    });
    if(this.studentObj[data]==1){
      this.tableHead[index].type = 1;
      this.sortTableData(data,1);
    }
    else if(this.studentObj[data]==2){
      this.tableHead[index].type = 2;
      this.sortTableData(data,2);
    }
    else{
      this.tableHead[index].type = 3;
      this.allStudentList$ = JSON.parse(JSON.stringify(this.allStudentListClone$));
    }
    
  }


  sortTableData(data:string,type:number){
    this.allStudentList$.sort(function(a:any, b:any){
      if(type==1)   {
        return a[data] < b[data] ? -1 : a[data] >  b[data] ? 1 : 0;
      } else {
          return  b[data] < a[data] ? -1 :  b[data] > a[data] ? 1 : 0;
      }
  })
  }
}
