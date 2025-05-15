import { Component, Input } from '@angular/core';
import { TourPackage } from 'src/app/models/tour-package';


@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.scss']
})
export class TourDetailComponent {
  @Input() tour?: TourPackage;
  // tour: any;
   
  route: any;
  tourService: any;
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tour = this.tourService.getTourById(id);
  }
  

}

