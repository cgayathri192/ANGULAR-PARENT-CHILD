import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input()primary:any;
@Input()secondary:any;
@Output()result = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.primary,this.secondary)
  }
  addNumbers(){
     let res = this.primary  + this.secondary;
     this.result.emit(res);
  }

}
