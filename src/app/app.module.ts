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
import { RestService } from './rest.service';
import { ArchiveComponent } from './archive/archive.component';
import { NavigateToArchiveComponent } from './navigate-to-archive/navigate-to-archive.component';
import { HomeComponent } from './home/home.component';


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
      {path: 'archive/dissaray', component: DisarrayComponent},
      {path: 'archive/like', component: LikeComponent},
      {path: 'archive/password', component: PasswordComponent},
    ])
  ],
  providers: [GithubFollowersService],
  bootstrap: [AppComponent],
})
export class AppModule { }
