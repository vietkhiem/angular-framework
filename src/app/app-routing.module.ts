import { HomeComponent } from './home/home.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserComponent } from './user/user.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'user',
        component: UserComponent
      }
    ]
  },
  {
    path: 'admin',
    component: 
  }

  // {
  //   path: 'user',
  //   component: UserComponent,

  //   children: [
  //     {
  //       path: '',
  //       component: UserComponent
  //     },
  //     {
  //       path: 'create',
  //       component: UserFormComponent
  //     },
  //     {
  //       path: 'edit',
  //       component: UserFormComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
