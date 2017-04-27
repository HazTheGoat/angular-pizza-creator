import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-pizza-app',
  templateUrl: './pizza-app.component.html',
  styleUrls: ['./_pizza-app.component.scss']
})
export class PizzaAppComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(){
    this.form = this.fb.group({
      credentials: this.fb.group({
        name: ["", Validators.required],
        email: ["", Validators.required],
        address: ["", Validators.required],
        postcode: ["", Validators.required],
        city: ["", Validators.required],
        number: ["", Validators.required]
      }),
      size: this.fb.group({
        size: ["Medium", Validators.required]
      }),
      toppings: this.fb.array([])
    })
  }

  addTopping(topping){
    let toppingsArray = <FormArray>this.form.get('toppings');

    toppingsArray.push(this.fb.group({
      type: [topping.target.attributes.name.value]
    }))
  }

  removeTopping(topping){
    let toppingsArray = <FormArray>this.form.get('toppings');

    for (let i = 0; i < toppingsArray.length; i++) {
      if (toppingsArray.controls[i].value.type == topping.target.attributes.name.value) toppingsArray.removeAt(i);
    }
  }

  onChange(topping){
    if (topping.target.checked) this.addTopping(topping)
    else  this.removeTopping(topping)
  }
}
