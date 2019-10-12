import { Component, OnInit } from '@angular/core';
import { trigger, animate, state, style, transition } from '@angular/animations';

@Component({
  selector: 'app-todos2',
  templateUrl: './todos2.component.html',
  styleUrls: ['./todos2.component.css'],
  animations : [
    trigger ('fade',[
      // both transition same style you ca write in state()
      state('void', style({ paddingLeft: 200, background : 'red', opacity : 0 })),
      //' void => *' and '* => void' == ':enter', ':leave'
      // transition ('void => *' , '* => void')
      //transition ('void <=>) *')
      //transition (':enter , : leave')
      transition(':enter, :leave',[
        animate(3000)
      ]),
      
    ])
  ]
})
export class Todos2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
items : any [] = [
  'Maharastra',
  'Nagpur',
  'Pune',
  'Mumbai',
  'Kolhapur'
];
addItem(input : HTMLInputElement)
{
  this.items.splice(0,0, input.value)
  input.value = '';
}
removeItem(item)
{
  let index = this.items.indexOf(item)
  this.items.splice(index ,1);
}
}
