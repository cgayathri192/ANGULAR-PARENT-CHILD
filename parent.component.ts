import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
firstvalue = 20;
secondvalue = 30;
result:any;
  constructor() { }
  showParentResult(res:any){
    this.result = res;
    console.log(this.result)
  }

  ngOnInit(): void {
  }


}
