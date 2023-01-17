import { LoginComponent } from './login/login.component';
import { RepairSearchComponent } from './repair-search/repair-search.component';
import { PropertySearchComponent } from './property-search/property-search.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { SelfRegistrationComponent } from './self-registration/self-registration.component';
import { RepairdeleteComponent } from './property-repair/property-repairdelete/repairdelete/repairdelete.component';
import { RepairputComponent } from './property-repair/property-repairput/repairput/repairput.component';
import { RepairpostComponent } from './property-repair/property-repairpost/repairpost/repairpost.component';
import { RepairsComponent } from './property-repair/property-repairget/repairs/repairs.component';
import { PropertydeleteComponent } from './property/propertydelete/propertydelete/propertydelete.component';
import { PropertyputComponent } from './property/propertyput/propertyput/propertyput.component';
import { PropertypostComponent } from './property/propertypost/propertypost/propertypost.component';
import { PropertyComponent } from './property/propertyget/property/property.component';
import { OwnerputComponent } from './propertyOwner/ownerput/ownerput.component';
import { OwnerdeleteComponent } from './propertyOwner/ownerdelete/ownerdelete.component';
import { OwnerpostComponent } from './propertyOwner/ownerpost/ownerpost.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './status/notfound/notfound.component';
import { HomeComponent } from './home/home/home.component';
import { OwnersComponent } from './propertyOwner/ownersget/owners.component';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [                                   
  { path: 'home', component: HomeComponent , canActivate: [AuthenticationGuard]},
  { path: 'self-registration', component: SelfRegistrationComponent, canActivate: [AuthenticationGuard] },
  { path: 'GetOwners', component: OwnersComponent, canActivate: [AuthenticationGuard] },
  { path: 'OwnerPost', component: OwnerpostComponent, canActivate: [AuthenticationGuard] },
  { path: 'OwnerPut', component: OwnerputComponent, canActivate: [AuthenticationGuard] },
  { path: 'OwnerDelete', component: OwnerdeleteComponent, canActivate: [AuthenticationGuard] },
  { path: 'GetProperty', component: PropertyComponent, canActivate: [AuthenticationGuard] },
  { path: 'PostProperty', component: PropertypostComponent, canActivate: [AuthenticationGuard] },
  { path: 'PutProperty', component: PropertyputComponent, canActivate: [AuthenticationGuard] },
  { path: 'DeleteProperty', component: PropertydeleteComponent, canActivate: [AuthenticationGuard] },
  { path: 'GetRepair', component: RepairsComponent, canActivate: [AuthenticationGuard] },
  { path: 'PostRepair', component: RepairpostComponent, canActivate: [AuthenticationGuard] },
  { path: 'PutRepair', component: RepairputComponent, canActivate: [AuthenticationGuard] },
  { path: 'DeleteRepair', component: RepairdeleteComponent, canActivate: [AuthenticationGuard] },
  { path: 'UserSearch', component: UserSearchComponent, canActivate: [AuthenticationGuard] },
  { path: 'PropertySearch', component: PropertySearchComponent, canActivate: [AuthenticationGuard] },
  { path: 'RepairSearch', component: RepairSearchComponent, canActivate: [AuthenticationGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', component: NotfoundComponent },
  { path: 'login', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
