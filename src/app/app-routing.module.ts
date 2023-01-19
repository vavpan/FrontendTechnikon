import { UpdateMyRepairComponent } from './components/user-repair-details/update-my-repair/update-my-repair.component';
import { UpdateMyPropertyComponent } from './components/user-property-details/update-my-property/update-my-property.component';
import { UpdateUserComponent } from './components/user-details/update-user/update-user/update-user.component';
import { DeleteUserComponent } from './components/user-details/delete-user/delete-user/delete-user.component';
import { UserRepairDetailsComponent } from './components/user-repair-details/user-repair-details.component';
import { UserPropertyDetailsComponent } from './components/user-property-details/user-property-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AdmistratorHomepageComponent } from './components/admistrator-homepage/admistrator-homepage.component';
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
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import { AllowAllGuard } from './guards/allow-all-guard.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AllowAllGuard] },
  { path: 'admin-homepage', component: AdmistratorHomepageComponent, canActivate: [AdminGuard] },
  { path: 'user-details', component: UserDetailsComponent, canActivate: [UserGuard] },
  { path: 'user-property-details', component: UserPropertyDetailsComponent, canActivate: [UserGuard] },
  { path: 'user-repair-details', component: UserRepairDetailsComponent, canActivate: [UserGuard] },
  { path: 'delete-myuser', component: DeleteUserComponent, canActivate: [UserGuard]},
  { path: 'update-myuser', component: UpdateUserComponent, canActivate: [UserGuard]},
  { path: 'self-registration', component: SelfRegistrationComponent, canActivate: [AllowAllGuard] },
  { path: 'GetOwners', component: OwnersComponent, canActivate: [AdminGuard] },
  { path: 'OwnerPost', component: OwnerpostComponent, canActivate: [AdminGuard] },
  { path: 'OwnerPut', component: OwnerputComponent, canActivate: [AdminGuard] },
  { path: 'OwnerDelete', component: OwnerdeleteComponent, canActivate: [AdminGuard] },
  { path: 'GetProperty', component: PropertyComponent, canActivate: [AdminGuard] },
  { path: 'PostProperty', component: PropertypostComponent, canActivate: [AdminGuard] },
  { path: 'PutProperty', component: PropertyputComponent, canActivate: [AdminGuard] },
  { path: 'DeleteProperty', component: PropertydeleteComponent, canActivate: [AdminGuard] },
  { path: 'GetRepair', component: RepairsComponent, canActivate: [AdminGuard] },
  { path: 'PostRepair', component: RepairpostComponent, canActivate: [AdminGuard] },
  { path: 'PutRepair', component: RepairputComponent, canActivate: [AdminGuard] },
  { path: 'DeleteRepair', component: RepairdeleteComponent, canActivate: [AdminGuard] },
  { path: 'UserSearch', component: UserSearchComponent, canActivate: [AdminGuard] },
  { path: 'PropertySearch', component: PropertySearchComponent, canActivate: [AdminGuard] },
  { path: 'RepairSearch', component: RepairSearchComponent, canActivate: [AdminGuard] },
  { path: 'administrator-homepage', component: AdmistratorHomepageComponent, canActivate: [AdminGuard] },
  { path: 'home', component: HomeComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
