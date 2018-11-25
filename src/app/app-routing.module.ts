import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ShowClientComponent } from './components/show-client/show-client.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: "", redirectTo:"/clients", pathMatch: 'full', canActivate: [AuthGuard]},
  {path: "clients", component: ListClientsComponent},
  {path: "clients/add", component: AddClientComponent, canActivate: [AuthGuard]},
  {path: "clients/edit/:idClient", component: EditClientComponent, canActivate: [AuthGuard]},
  {path: "clients/:id", component: ShowClientComponent, canActivate: [AuthGuard]},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
