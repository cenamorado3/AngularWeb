import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'inventory-admin-modal',
  templateUrl: './inventory-admin-modal.component.html',
  styleUrls: ['./inventory-admin-modal.component.css']
})
export class InventoryAdminModalComponent{
  form: FormGroup;
  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      formType: ['', [Validators.required]]
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
}