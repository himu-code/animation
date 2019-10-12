import { animate, transition,trigger, state, style } from '@angular/animations';

export let slide1 = trigger('slide',[
    transition (':enter',[
      style({ transform: 'translateX(-10px)', background :'red' }),
      animate(2000)
    ]),

    transition (':leave',[
        style({ transform: 'translateX(-100%)', background: 'black' }),
        animate(2000)
  ])

])
/*

export let slide1 = trigger('slide',[
  transition('void => *',[
    style({ transform: 'translateX(-10px)', background: 'red' }),
    animate(3000)
  ]),
   
  transition ('* => void',[
    style({ transform : ' translate(-100%)', background : 'black' })
  ])
])
*/

export let fade1 =  trigger ('fade',[
  transition ('void => *',[
    style ({ paddingLeft:200, background:'red', opacity : 0 }),
    animate(2000)
  ]),
  transition('* => void',[
    style({ paddingLeft :200, background :'black', opacity :0 }),
    animate(3000)
  ])
])