import { NotfoundComponent } from './components/status/notfound/notfound.component';
import { OwnersComponent } from './components/propertyOwner/ownersget/owners.component';
import { HomeComponent } from './components/home/home/home.component';
import { OwnerpostComponent } from './components/propertyOwner/ownerpost/ownerpost.component';
import { OwnerdeleteComponent } from './components/propertyOwner/ownerdelete/ownerdelete.component';
import { OwnerputComponent } from './components/propertyOwner/ownerput/ownerput.component';
import { PropertyComponent } from './components/property/propertyget/property/property.component';
import { PropertypostComponent } from './components/property/propertypost/propertypost/propertypost.component';
import { PropertyputComponent } from './components/property/propertyput/propertyput/propertyput.component';
import { PropertydeleteComponent } from './components/property/propertydelete/propertydelete/propertydelete.component';
import { RepairsComponent } from './components/property-repair/property-repairget/repairs/repairs.component';
import { RepairpostComponent } from './components/property-repair/property-repairpost/repairpost/repairpost.component';
import { RepairputComponent } from './components/property-repair/property-repairput/repairput/repairput.component';
import { RepairdeleteComponent } from './components/property-repair/property-repairdelete/repairdelete/repairdelete.component';
import { SelfRegistrationComponent } from './components/self-registration/self-registration.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { PropertySearchComponent } from './components/property-search/property-search.component';
import { RepairSearchComponent } from './components/repair-search/repair-search.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [                                   
  { path: 'home', component: HomeComponent , canActivate: [AuthenticationGuard]},
  { path: 'self-registration', component: SelfRegistrationComponent},
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
