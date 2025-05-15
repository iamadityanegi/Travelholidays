import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TourListComponent } from './components/tour-list/tour-list.component';
import { TourDetailComponent } from './components/tour-detail/tour-detail.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { TravelPopupComponent } from './components/travel-popup/travel-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TourListComponent,
    TourDetailComponent,
    ContactFormComponent,
    TravelPopupComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
