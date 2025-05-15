import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourListComponent } from './components/tour-list/tour-list.component';
import { TourDetailComponent } from './components/tour-detail/tour-detail.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { TravelPopupComponent } from './components/travel-popup/travel-popup.component';


const routes: Routes = [
  { path: '', component: TourListComponent, pathMatch:'full' },
  { path: 'tour', component: TourDetailComponent },
  { path: 'tourList', component: TourListComponent },
   { path: 'contact', component: ContactFormComponent },
   {path:'travelpopup',component:TravelPopupComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
