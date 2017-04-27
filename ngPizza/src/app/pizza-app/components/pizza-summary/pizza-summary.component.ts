import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-pizza-summary',
  templateUrl: './pizza-summary.component.html',
  styleUrls: ['./_pizza-summary.component.scss']
})
export class PizzaSummaryComponent implements OnInit, DoCheck {
  @Input() form: any;
  total: number;
  pizzaSize: number;
  constructor() { }

  ngOnInit() { }

  ngDoCheck(){
    if (this.form.controls.size.controls.size.value == 'Large') {
        this.pizzaSize = 178;
    }

    if (this.form.controls.size.controls.size.value == 'Medium') {
        this.pizzaSize = 118;
    }

    if (this.form.controls.size.controls.size.value == 'Small') {
        this.pizzaSize = 98;
    }

    this.total = (this.form.controls.toppings.controls.length * 18) + this.pizzaSize;
  }
}
