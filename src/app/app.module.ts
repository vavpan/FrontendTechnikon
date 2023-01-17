import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { NotfoundComponent } from './status/notfound/notfound.component';
import { HomeComponent } from './home/home/home.component';
import { OwnersComponent } from './propertyOwner/ownersget/owners.component';
import { OwnerpostComponent } from './propertyOwner/ownerpost/ownerpost.component';
import { OwnerdeleteComponent } from './propertyOwner/ownerdelete/ownerdelete.component';
import { OwnerputComponent } from './propertyOwner/ownerput/ownerput.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropertyComponent } from './property/propertyget/property/property.component';
import { PropertypostComponent } from './property/propertypost/propertypost/propertypost.component';
import { PropertyputComponent } from './property/propertyput/propertyput/propertyput.component';
import { PropertydeleteComponent } from './property/propertydelete/propertydelete/propertydelete.component';
import { RepairsComponent } from './property-repair/property-repairget/repairs/repairs.component';
import { RepairpostComponent } from './property-repair/property-repairpost/repairpost/repairpost.component';
import { RepairputComponent } from './property-repair/property-repairput/repairput/repairput.component';
import { RepairdeleteComponent } from './property-repair/property-repairdelete/repairdelete/repairdelete.component';
import { SelfRegistrationComponent } from './self-registration/self-registration.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { PropertySearchComponent } from './property-search/property-search.component';
import { RepairSearchComponent } from './repair-search/repair-search.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AuthenticationService } from './services/authentication/AuthenticationService';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HomeComponent,
    OwnersComponent,
    OwnerpostComponent,
    OwnerdeleteComponent,
    OwnerputComponent,
    PropertyComponent,
    PropertypostComponent,
    PropertyputComponent,
    PropertydeleteComponent,
    RepairsComponent,
    RepairpostComponent,
    RepairputComponent,
    RepairdeleteComponent,
    SelfRegistrationComponent,
    UserSearchComponent,
    PropertySearchComponent,
    RepairSearchComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
