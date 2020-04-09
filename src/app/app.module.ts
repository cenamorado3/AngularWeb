import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
import { DisarrayComponent } from './disarray/disarray.component';
import { FormComponent } from './form/form.component';
import { PasswordComponent } from './password/password.component';
import { GithubComponent } from './github/github.component';
import { GithubFollowersService } from './github-service.service';
import { ArchiveComponent } from './archive/archive.component';
import { NavigateToArchiveComponent } from './navigate-to-archive/navigate-to-archive.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryGroupComponent } from './inventory-group/inventory-group.component';
import { InventoryKeyboardsComponent } from './inventory-keyboards/inventory-keyboards.component';
import { InventoryMiceComponent } from './inventory-mice/inventory-mice.component';
import { InventoryAdminModalComponent } from './inventory-admin-modal/inventory-admin-modal.component';

import { RestService } from './rest.service';
import { MiceService } from './mice-service.service';
import { ProductService } from './product-service.service';


@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    DisarrayComponent,
    FormComponent,
    PasswordComponent,
    GithubComponent,
    ArchiveComponent,
    NavigateToArchiveComponent,
    HomeComponent,
    InventoryComponent,
    InventoryGroupComponent,
    InventoryKeyboardsComponent,
    InventoryMiceComponent,
    InventoryAdminModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'archive', component: ArchiveComponent},
      {path: 'archive/form', component: FormComponent},
      {path: 'archive/github', component: GithubComponent},
      {path: 'archive/disarray', component: DisarrayComponent},
      {path: 'archive/like', component: LikeComponent},
      {path: 'archive/password', component: PasswordComponent},
      {path: 'archive/product', component: InventoryComponent},
      {path: 'archive/keyboards', component: InventoryKeyboardsComponent},
      {path: 'archive/mice', component: InventoryMiceComponent},
    ])
  ],
  providers: [GithubFollowersService, RestService, MiceService, ProductService],
  bootstrap: [AppComponent],
})
export class AppModule { }
