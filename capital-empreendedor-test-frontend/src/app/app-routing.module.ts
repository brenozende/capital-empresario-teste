import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientOpportunitiesComponent } from './client-opportunities/client-opportunities.component';


const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full'},
  { path: 'clients', component: ClientListComponent},
  { path: ':email', component: ClientOpportunitiesComponent},
  { path: ':email/:name/edit', component: ClientEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
