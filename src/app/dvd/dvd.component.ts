import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { DvdService } from '../service/dvd.service';
import { PurchaseDto } from '../model/purchase.dto';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css']
})
export class DvdComponent {
  dvdForm: FormGroup;
  totalPrice: number | null = null;

  constructor(private fb: FormBuilder, private dvdService: DvdService) {
    this.dvdForm = this.fb.group({
      titles: this.fb.array([this.createTitleFormGroup()])
    });
  }

  get titles(): FormArray {
    return this.dvdForm.get('titles') as FormArray;
  }

  createTitleFormGroup(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required]
    });
  }

  addTitle(): void {
    this.titles.push(this.createTitleFormGroup());
  }

  removeTitle(index: number): void {
    this.titles.removeAt(index);
  }

  onSubmit(): void {
    console.log('Form Submitted:', this.dvdForm.value);
    if (this.dvdForm.valid) {
      console.log('Form is valid');
      const purchaseDto: PurchaseDto = {
        titles: this.dvdForm.value.titles.map((titleGroup: { title: string }) => titleGroup.title)
      };
      this.dvdService.calculateTotalPrice(purchaseDto).subscribe(price => {
        this.totalPrice = price;
      });
    } else {
      console.log('Form is invalid');
      this.validateAllFormFields(this.dvdForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormArray) {
        control.controls.forEach((subControl) => this.validateAllFormFields(subControl as FormGroup));
      } else {
        control?.markAsTouched({ onlySelf: true });
      }
    });
  }
}
