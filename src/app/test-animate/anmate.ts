import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition('void => *', [
    animate(3000, keyframes([
      style({ opacity: 0, transform: 'translateX(-100%)', offset: 0}),
      style({ opacity: 0.5, transform: 'translateX(-25px)', offset: 0.3}),
      style({ opacity: 1, transform: 'translateX(0)', offset: 1.0})
    ]))
  ]),
  transition('* => void', [
    animate(300, keyframes([
      style({ opacity: 1, transform: 'translateX(0)', offset: 0}),
      style({ opacity: 0.7, transform: 'translateX(-25px)', offset: 0.7}),
      style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0})
    ]))
  ])
]);
