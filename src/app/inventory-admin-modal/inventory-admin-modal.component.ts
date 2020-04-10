import { Component, Injectable, Input, NgModule} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminPanelValidator } from '../common/validators/admin-panel-validator';
import {MiceService} from "../mice-service.service";
import { HttpClient } from '@angular/common/http';
import { IRestService, RestService } from '../rest.service';
import { ProductService } from '../product-service.service';
import { AdminPanelService } from '../admin-panel-service.service';
@Component({
  selector: 'inventory-admin-modal',
  templateUrl: './inventory-admin-modal.component.html',
  styleUrls: ['./inventory-admin-modal.component.css']
  //providers:[ProductService, MiceService, AdminPanelService, RestService, ]
})

@NgModule({
  providers:[ProductService, MiceService, AdminPanelService, RestService, ]
})
export class InventoryAdminModalComponent{
  form: FormGroup;
  constructor(fb: FormBuilder, private pservice: ProductService, private mservice: MiceService) { 
    //super('http://127.0.0.1:5000/archive/admin', http)

    this.form = fb.group({
      formType: ['', Validators.required],
      PID: ['', Validators.required],
      ProductName: ['', Validators.required],
      ProductDescription: ['', Validators.required],
      ProductPrice: ['', Validators.required],
      FilePath: ['', Validators.required],
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

  DisableControlsForDelete()
  {
    this.ProductName.disable();
    this.ProductDescription.disable();
    this.ProductPrice.disable();
    this.FilePath.disable();
  }

  EnableControls()
  {
    this.ProductName.enable();
    this.ProductDescription.enable();
    this.ProductPrice.enable();
    this.FilePath.enable();
  }
  loc()
  {
    console.log(window.location.href);
  }

  onSubmit(form)
  {
    if(form.value['formType'] === 'Create')
    {
      alert('FAILURE: THIS FEATURE IS NOT YET IMPLEMENTED');
    }

    if(form.value['formType'] === 'Update')
    {
      alert('FAILURE: THIS FEATURE IS NOT YET IMPLEMENTED');
    }

    if(form.value['formType'] === 'Delete')
    {
      if(window.location.href.includes('keyboards'))
      {
        this.pservice.delete(form.value['PID'], form.value).subscribe(msg =>
          {
            alert(msg['Response']);
          });
      }

      if(window.location.href.includes('mice'))
      {
        this.mservice.delete(form.value['PID'], form.value).subscribe(msg =>
          {
            alert(msg['Response']);
          });
      }

      else
      {
        alert('You must be at a valid location to delete items.')
      }
    }
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