import { Component, Injectable, Input, NgModule, OnInit, OnDestroy} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MiceService} from "../mice-service.service";
import { IRestService, RestService } from '../rest.service';
import { ProductService } from '../product-service.service';
import { AdminPanelService } from '../admin-panel-service.service';
import { Subscription } from 'rxjs';
import { ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';
import { InventoryGroupComponent } from '../inventory-group/inventory-group.component';



@Component({
  selector: 'inventory-admin-modal',
  templateUrl: './inventory-admin-modal.component.html',
  styleUrls: ['./inventory-admin-modal.component.css']
})

export class InventoryAdminModalComponent implements OnInit {
  form: FormGroup;
  service: IRestService;
  //subscriptions: Subscription[];
  constructor(fb: FormBuilder, private router: Router, private keyboard: ProductService, private mice: MiceService) { 
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

  ngOnInit()
  {
    if(this.router.url.includes('archive/keyboards'))
    {
      this.service = this.keyboard;
    }
    if(this.router.url.includes('archive/mice'))
    {
     this.service = this.mice;
    }
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
      console.log(form.value);
      this.service.create(form.value).subscribe(msg => 
        {
          alert(msg['Response']);
        });
    }

    if(form.value['formType'] === 'Update')
    {
      this.service.update(form.value['PID'], form.value).subscribe(msg =>
        {
          alert(msg['Response'])
        })
    }

    if(form.value['formType'] === 'Delete')
    {
      //super.delete
      this.service.delete(form.value['PID'], form.value).subscribe(msg =>
        {
          alert(msg['Response']);
        });
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