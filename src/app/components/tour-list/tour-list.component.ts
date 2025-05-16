import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TourPackage } from 'src/app/models/tour-package';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.scss']
})

export class TourListComponent implements OnInit {
  tours: TourPackage[] = [];
 popupVisible: boolean = false;
  constructor(private tourService: TourService, private router: Router) {}

  ngOnInit(): void {
    this.tours = this.tourService.getTours();
  }

  viewDetails(id: number) {
    this.router.navigate(['/tour', id]);
  }
 

bookNow() {debugger
  this.popupVisible = true;
}
  closePopup() {debugger
    // this.close.emit();
    // this.router.navigate([' ' ]);

    this.popupVisible = false;
  }
  
  }

