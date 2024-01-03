import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavService } from '../nav.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewmutualfunds',
  standalone: true,
  imports: [FormsModule,NgForOf,CommonModule],
  templateUrl: './viewmutualfunds.component.html',
  styleUrl: './viewmutualfunds.component.css'
})
export class ViewmutualfundsComponent {

  navs:Observable<any[]> | undefined;

  ngOnInit() {
    // Move the data loading logic here
    this.navs=this.navService.getNav();
  }
  
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private navService:NavService) {
  }

}
