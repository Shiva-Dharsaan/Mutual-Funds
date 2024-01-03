import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './loginservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MutualFundService } from './mutual-fund.service';
import { MfWeightageService } from './mf-weightage.service';
import { StockDetailsService } from './stock-details.service';
import { NavService } from './nav.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    HttpClientModule,
    FormsModule],
    providers: [LoginService,MutualFundService,MfWeightageService,StockDetailsService,NavService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mutual-Funds';
}
