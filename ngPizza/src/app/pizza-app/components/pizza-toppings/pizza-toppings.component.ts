import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./_pizza-toppings.component.scss']
})
export class PizzaToppingsComponent implements OnInit {
  @Input() form: FormGroup;
  @Output() toppingsEmitter = new EventEmitter();
  toppings: Array<string>;

  constructor() { }

  ngOnInit() {
    this.toppings = ["anchovy", "bacon", "basil", "chili", "mozzarella", "mushroom", "olive", "onion", "pepper", "pepperoni", "sweetcorn", "tomato"]
  }
}
