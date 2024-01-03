import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockDetailsService } from '../stock-details.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-each-stock',
  standalone: true,
  imports: [NgForOf ,CommonModule,FormsModule ],
  templateUrl: './each-stock.component.html',
  styleUrl: './each-stock.component.css'
})
export class EachStockComponent {

  stocks:Observable<any[]> | undefined;

  ngOnInit() {
    // Move the data loading logic here
    this.stocks = this.stockService.stocks;
    console.log(this.stocks);
    
  }
  
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private stockService:StockDetailsService) {
  }

}
