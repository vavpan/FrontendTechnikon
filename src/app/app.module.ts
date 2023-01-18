import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RepairSearchComponent } from './components/repair-search/repair-search.component';
import { PropertySearchComponent } from './components/property-search/property-search.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { RepairdeleteComponent } from './components/property-repair/property-repairdelete/repairdelete/repairdelete.component';
import { RepairputComponent } from './components/property-repair/property-repairput/repairput/repairput.component';
import { RepairpostComponent } from './components/property-repair/property-repairpost/repairpost/repairpost.component';
import { RepairsComponent } from './components/property-repair/property-repairget/repairs/repairs.component';
import { PropertydeleteComponent } from './components/property/propertydelete/propertydelete/propertydelete.component';
import { PropertyputComponent } from './components/property/propertyput/propertyput/propertyput.component';
import { PropertypostComponent } from './components/property/propertypost/propertypost/propertypost.component';
import { PropertyComponent } from './components/property/propertyget/property/property.component';
import { OwnerputComponent } from './components/propertyOwner/ownerput/ownerput.component';
import { OwnerdeleteComponent } from './components/propertyOwner/ownerdelete/ownerdelete.component';
import { OwnerpostComponent } from './components/propertyOwner/ownerpost/ownerpost.component';
import { OwnersComponent } from './components/propertyOwner/ownersget/owners.component';
import { HomeComponent } from './components/home/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { NotfoundComponent } from './components/status/notfound/notfound.component';
import { SelfRegistrationComponent } from './components/self-registration/self-registration.component';
import { AdmistratorHomepageComponent } from './components/admistrator-homepage/admistrator-homepage.component';
import { RepairsPageComponent } from './components/repairs-page/repairs-page.component';
import { PropertyownersPropertiesPageComponent } from './components/propertyowners-properties-page/propertyowners-properties-page.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserPropertyDetailsComponent } from './components/user-property-details/user-property-details.component';
import { UserRepairDetailsComponent } from './components/user-repair-details/user-repair-details.component';


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
    HeaderComponent,
    AdmistratorHomepageComponent,
    RepairsPageComponent,
    PropertyownersPropertiesPageComponent,
    UserDetailsComponent,
    UserPropertyDetailsComponent,
    UserRepairDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
