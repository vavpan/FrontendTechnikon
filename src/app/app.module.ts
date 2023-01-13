import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './status/notfound/notfound.component';
import { HomeComponent } from './home/home/home.component';
import { OwnersComponent } from './owners/owners/owners.component';
import { OwnerpostComponent } from './post/ownerpost/ownerpost.component';
import { OwnerdeleteComponent } from './delete/ownerdelete/ownerdelete.component';
import { OwnerputComponent } from './put/ownerput/ownerput.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HomeComponent,
    OwnersComponent,
    OwnerpostComponent,
    OwnerdeleteComponent,
    OwnerputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
