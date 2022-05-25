import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { TableNameComponent } from './table/table-name/table-name.component';
import { IdentityComponent } from './identity/identity.component';
import { NameComponent } from './name/name.component';
import { GenderComponent } from './table/gender/gender.component';
import { StatusComponent } from './table/status/status.component';
import { AvatarComponent } from './table/avatar/avatar.component';

import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ShowValidateComponent } from './component/show-validate/show-validate.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { HomeComponent } from './home/home.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableNameComponent,
    IdentityComponent,
    NameComponent,
    GenderComponent,
    StatusComponent,
    AvatarComponent,
    FormComponent,
    ShowValidateComponent,
    UserComponent,
    UserListComponent,
    UserFormComponent,
    HomeComponent,
    ClientLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
