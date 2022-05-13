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

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableNameComponent,
    IdentityComponent,
    NameComponent,
    GenderComponent,
    StatusComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
