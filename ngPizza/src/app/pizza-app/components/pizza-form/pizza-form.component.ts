import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./_pizza-form.component.scss']
})
export class PizzaFormComponent implements OnInit {
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit() {

  }
}
