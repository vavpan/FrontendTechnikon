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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'self-registration' , component: SelfRegistrationComponent},
  { path: 'GetOwners', component: OwnersComponent },
  { path: 'OwnerPost', component: OwnerpostComponent },
  { path: 'OwnerPut', component: OwnerputComponent },
  { path: 'OwnerDelete', component: OwnerdeleteComponent },
  { path: 'GetProperty' , component: PropertyComponent},
  { path: 'PostProperty' , component: PropertypostComponent},
  { path: 'PutProperty' , component: PropertyputComponent},
  { path: 'DeleteProperty' , component: PropertydeleteComponent},
  { path: 'GetRepair' , component: RepairsComponent},
  { path: 'PostRepair' , component: RepairpostComponent},
  { path: 'PutRepair' , component: RepairputComponent},
  { path: 'DeleteRepair' , component: RepairdeleteComponent},
  { path: 'UserSearch' , component: UserSearchComponent},
  { path: 'PropertySearch' , component: PropertySearchComponent},
  { path: 'RepairSearch' , component: RepairSearchComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
