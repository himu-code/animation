import { Component, OnInit } from '@angular/core';
import { animate, transition,trigger, state, style } from '@angular/animations';
import { fade1 } from '../slide/animations1';

@Component({
  selector: 'app-todos1',
  templateUrl: './todos1.component.html',
  styleUrls: ['./todos1.component.css'],
  animations : [
    fade1
  ]
})
export class Todos1Component implements OnInit {

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
