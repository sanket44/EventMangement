import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-flowers-order',
  templateUrl: './flowers-order.component.html',
  styleUrls: ['./flowers-order.component.css'],
})
export class FlowersOrderComponent {
  flowersOrderForm: FormGroup = new FormGroup({});
  @Output() flowerOrder = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.flowersOrderForm = this.fb.group({
      typeOfOrder: ['FLOWERS', Validators.required],
      bookingDate: ['', Validators.required],
      flowerDetails: this.fb.array([]),
    });
  }
  get flowerDetailsArray() {
    return this.flowersOrderForm.get('flowerDetails') as FormArray;
  }

  addFlowerDetails() {
    this.flowerDetailsArray.push(
      this.fb.group({
        flowerType: ['', Validators.required],
        quantity: [, Validators.required],
      })
    );
  }

  submitFlowersOrder() {
    if (this.flowersOrderForm.valid) {
      const flowersOrder = this.flowersOrderForm.value;
      this.flowerOrder.emit(flowersOrder);
    }
  }
}
