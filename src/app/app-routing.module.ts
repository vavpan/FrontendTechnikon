import { OwnerputComponent } from './put/ownerput/ownerput.component';
import { OwnerdeleteComponent } from './delete/ownerdelete/ownerdelete.component';
import { OwnerpostComponent } from './post/ownerpost/ownerpost.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './status/notfound/notfound.component';
import { HomeComponent } from './home/home/home.component';
import { OwnersComponent } from './owners/owners/owners.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'owners', component: OwnersComponent },
  { path: 'post', component: OwnerpostComponent },
  { path: 'put', component: OwnerputComponent },
  { path: 'delete', component: OwnerdeleteComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
