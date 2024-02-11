import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-catering-order',
  templateUrl: './catering-order.component.html',
  styleUrls: ['./catering-order.component.css'],
})
export class CateringOrderComponent implements OnInit {
  cateringOrderForm: FormGroup = new FormGroup({});
  @Output() cateringOrder = new EventEmitter<any>();
  constructor(private fb: FormBuilder) {
    this.createFrom();
  }
  ngOnInit(): void {}

  createFrom() {
    this.cateringOrderForm = this.fb.group({
      quantity: [0, Validators.required],
      bookingDate: ['', Validators.required],
      typeOfOrder: ['CATERING', Validators.required],
    });
  }

  submitCateringOrder() {
    console.log('ddd');
    console.log(this.cateringOrderForm);

    if (this.cateringOrderForm.valid) {
      const cateringOrder = this.cateringOrderForm.value;
      this.cateringOrder.emit(cateringOrder);
    }
  }
}
