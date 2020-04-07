import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminPanelValidator } from '../common/validators/admin-panel-validator';

@Component({
  selector: 'inventory-admin-modal',
  templateUrl: './inventory-admin-modal.component.html',
  styleUrls: ['./inventory-admin-modal.component.css']
})
export class InventoryAdminModalComponent{
  form: FormGroup;
  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      formType: ['', 
      Validators.required,
      AdminPanelValidator.GetDeleteRadio],
      PID: ['', Validators.required],
      ProductName: ['', Validators.required],
      ProductDescription: ['', Validators.required],
      ProductPrice: ['', Validators.required],
      FilePath: ['', Validators.required],

    },
    {
    });
  }

  openDialog()
  {
    document.getElementById("admin-panel-modal").classList.add("admin-panel-modal-open");
    document.getElementById("admin-panel-modal-lock").classList.add("admin-panel-modal-lock");
  }

  close()
  {
    document.getElementById("admin-panel-modal").classList.remove("admin-panel-modal-open");
    document.getElementById("admin-panel-modal-lock").classList.remove("admin-panel-modal-lock");
  }



  get CurrentType()
  {
    return this.form.get('formType');
  }

  get PID()
  {
    return this.form.get('PID');
  }
  get ProductName()
  {
    return this.form.get('ProductName');
  }

  get ProductDescription()
  {
    return this.form.get('ProductDescription');
  }

  get ProductPrice()
  {
    return this.form.get('ProductPrice');
  }

  get FilePath()
  {
    return this.form.get('FilePath');
  }


}