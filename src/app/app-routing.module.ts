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
  { path: 'home', component: HomeComponent , canActivate: [AllowAllGuard]},
  { path: 'admin-homepage', component: AdmistratorHomepageComponent , canActivate: [AdminGuard]},
  { path: 'self-registration', component: SelfRegistrationComponent, canActivate: [AllowAllGuard]},
  { path: 'GetOwners', component: OwnersComponent, canActivate: [AdminGuard] },
  { path: 'OwnerPost', component: OwnerpostComponent, canActivate: [AdminGuard] },
  { path: 'OwnerPut', component: OwnerputComponent, canActivate: [AdminGuard,UserGuard] },
  { path: 'OwnerDelete', component: OwnerdeleteComponent, canActivate: [AllowAllGuard,UserGuard]},
  { path: 'GetProperty', component: PropertyComponent, canActivate: [AdminGuard] },
  { path: 'PostProperty', component: PropertypostComponent, canActivate: [AdminGuard] },
  { path: 'PutProperty', component: PropertyputComponent, canActivate: [AdminGuard,UserGuard] },
  { path: 'DeleteProperty', component: PropertydeleteComponent, canActivate: [AdminGuard,UserGuard] },
  { path: 'GetRepair', component: RepairsComponent, canActivate: [AdminGuard] },
  { path: 'PostRepair', component: RepairpostComponent, canActivate: [AdminGuard] },
  { path: 'PutRepair', component: RepairputComponent, canActivate: [AdminGuard,UserGuard] },
  { path: 'DeleteRepair', component: RepairdeleteComponent, canActivate: [AllowAllGuard,UserGuard] },
  { path: 'UserSearch', component: UserSearchComponent, canActivate: [AdminGuard] },
  { path: 'PropertySearch', component: PropertySearchComponent, canActivate: [AdminGuard] },
  { path: 'RepairSearch', component: RepairSearchComponent, canActivate: [AdminGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', component: NotfoundComponent },
  { path: 'login', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
