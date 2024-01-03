import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockDetailsService } from '../stock-details.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-details',
  standalone: true,
  imports: [FormsModule,NgForOf,CommonModule],
  templateUrl: './stock-details.component.html',
  styleUrl: './stock-details.component.css'
})
export class StockDetailsComponent {
 
  stocks:Observable<any[]> | undefined;

  ngOnInit() {
    // Move the data loading logic here
    this.stocks = this.stockService.getStockByDate();
  }
  
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private stockService:StockDetailsService) {
  }

  getStockDetail(nameofstock:String)
  {
    console.log(nameofstock);
    this.stockService.stocks= this.stockService.getStockByName(nameofstock);
    console.log(this.stockService.stocks);
    this.router.navigate(['eachStock']);
  }



}
