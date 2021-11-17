import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.scss']
})
export class DynamicDivComponent implements OnInit,AfterViewInit {
  @ViewChild('dynamicDiv') dynamicDiv!:ElementRef;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
     if (event.target['scrollingElement'].clientHeight + event.target['scrollingElement'].scrollTop + 30 >= event.target['scrollingElement'].scrollHeight) {
      this.createDiv();
     }
  }
  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.createDiv();
    let simple = this.renderer.listen(this.dynamicDiv.nativeElement, 'click', (evt) => {      
     if(evt.target.children.length ==0){
      const index = Array.from(evt.target.parentNode.parentNode.childNodes).indexOf(evt.target.parentNode) + 1
      alert(`Button in ${this.addSuffixNumber(index)} div  clicked`)
     }
     });
  }

  createDynamicDiv(){
    const div = this.renderer.createElement('div');
    const button = this.renderer.createElement('button');
    const button_text = this.renderer.createText('Click');
    this.renderer.appendChild(div, button);
    this.renderer.addClass(div, 'divSection');
    this.renderer.appendChild(button, button_text);
    this.renderer.addClass(button, 'divbutton');
    this.renderer.appendChild(this.dynamicDiv.nativeElement, div);
  }


  createDiv(){
    for(let i=0;i<20;i++){
      this.createDynamicDiv();
    }
  }

   addSuffixNumber(index:number) {
    var j = index % 10,
        k = index % 100;
    if (j == 1 && k != 11) {
        return index + "st";
    }
    if (j == 2 && k != 12) {
        return index + "nd";
    }
    if (j == 3 && k != 13) {
        return index + "rd";
    }
    return index + "th";
}

}
