import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel-popup',
  templateUrl: './travel-popup.component.html',
  styleUrls: ['./travel-popup.component.scss']
})
export class TravelPopupComponent {
  @Output() close = new EventEmitter<void>();

  popupFlag: boolean = true;

  constructor(private router: Router) {}

  closePopup() {
    // this.close.emit();
    // this.router.navigate([' ' ]);

    this.popupFlag = false;
  }
}


