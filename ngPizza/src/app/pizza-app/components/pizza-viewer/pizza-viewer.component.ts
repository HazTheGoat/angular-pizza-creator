import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { transition, style, animate, trigger } from '@angular/animations';

export const DROP_ANIMATION = trigger('drop', [
  transition(':enter', [
    style({ transform: 'translateY(-200px)', opacity: 0 }),
    animate('300ms cubic-bezier(1.000, 0.000, 0.000, 1.000)', style({ transform: 'translateY(0)', opacity: 1 }))
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0)', opacity: 1 }),
    animate('200ms cubic-bezier(1.000, 0.000, 0.000, 1.000)', style({ transform: 'translateY(-200px)', opacity: 0 }))
  ])
]);

@Component({
  selector: 'app-pizza-viewer',
  animations: [DROP_ANIMATION],
  templateUrl: './pizza-viewer.component.html',
  styleUrls: ['./_pizza-viewer.component.scss']
})

export class PizzaViewerComponent implements OnInit {
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }
}
