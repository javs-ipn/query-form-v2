import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PendingQueriesComponent } from './components/pending-queries/pending-queries.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { MyQueriesComponent } from './components/my-queries/my-queries.component';
import { QueryFormComponent } from './components/query-form/query-form.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'pending-queries',
    component: PendingQueriesComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'my-queries',
    component: MyQueriesComponent
  },
  {
    path: 'query-form',
    component: QueryFormComponent
  },
  {
    path: '**',
    component: LoginComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
