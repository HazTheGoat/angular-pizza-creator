import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pizza-size',
  templateUrl: './pizza-size.component.html',
  styleUrls: ['./_pizza-size.component.scss']
})
export class PizzaSizeComponent implements OnInit {
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() { }

}
