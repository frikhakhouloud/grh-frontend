import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollaborateurComponent } from './pages/collaborateur/collaborateur.component';
import { AddCollaborateurComponent } from './pages/add-collaborateur/add-collaborateur.component';

const routes: Routes = [
  { path: "collaborateur", component: CollaborateurComponent },
  { path: 'addcollab', component: AddCollaborateurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
