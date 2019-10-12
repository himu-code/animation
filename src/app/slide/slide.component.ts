import { Component, OnInit } from '@angular/core';
import { slide1 } from './animations1'
import { animate, transition,trigger, state, style } from '@angular/animations';
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  animations : [
    slide1,

    ]
})
export class SlideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items : any[] = [
    'Wash The Dishes',
    'Call The Accountant',
    'Apply for the car insurance'
  ];
  addItem(input : HTMLInputElement)
  {
    this.items.splice(0,0,input.value)
    input.value ='';
  }
  onRemove(item)
  {
    let index = this.items.indexOf(item)
    this.items.splice(index,1);
    
  }
}
