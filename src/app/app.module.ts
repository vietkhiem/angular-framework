import { NgToastModule } from 'ng-angular-popup';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { TableNameComponent } from './table/table-name/table-name.component';
import { IdentityComponent } from './identity/identity.component';
import { GenderComponent } from './table/gender/gender.component';
import { StatusComponent } from './table/status/status.component';
import { AvatarComponent } from './table/avatar/avatar.component';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form/form.component';
import { ShowValidateComponent } from './component/show-validate/show-validate.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { HomeComponent } from './home/home.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/client-page/header/header.component';
import { ProductComponent } from './component/client-page/product/product.component';
import { BannerComponent } from './component/client-page/banner/banner.component';
import { PartnersComponent } from './component/client-page/partners/partners.component';
import { ReviewComponent } from './component/client-page/review/review.component';
import { ReadComponent } from './component/client-page/read/read.component';
import { FooterComponent } from './component/client-page/footer/footer.component';
import { ChoseComponent } from './component/client-page/chose/chose.component';
import { NewsComponent } from './component/client-page/news/news.component';
import { ProductDetailComponent } from './component/client-page/product-detail/product-detail.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { CartComponent } from './component/cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableNameComponent,
    IdentityComponent,
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
    AdminLayoutComponent,
    AdminProductListComponent,
    AdminProductDetailComponent,
    AdminProductFormComponent,
    HeaderComponent,
    ProductComponent,
    BannerComponent,
    PartnersComponent,
    ReviewComponent,
    ReadComponent,
    FooterComponent,
    ChoseComponent,
    NewsComponent,
    ProductDetailComponent,
    SignupComponent,
    SigninComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
