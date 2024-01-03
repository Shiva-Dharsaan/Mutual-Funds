import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MutualFundService } from '../mutual-fund.service';
import { MutualFund } from '../mutual-fund';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-define-mf',
  standalone: true,
  imports: [FormsModule,NgForOf],
  templateUrl: './define-mf.component.html',
  styleUrl: './define-mf.component.css'
})
export class DefineMfComponent {
 
  mutualFund:MutualFund;
  num: number[] = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private mfService: MutualFundService,
        private snackBar: MatSnackBar) {
    this.mutualFund = new MutualFund();
  }
  onSubmit() {
    this.mfService.save(this.mutualFund).subscribe(result => this.gotoUserList());
    console.log('Sucessfull');
    this.showSnackBar('Mutual Fund Created SuccessFully');

  }

  gotoUserList() {
    this.router.navigate(['portfolioDashBoard']);
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000, // Duration in milliseconds
    });
  }

}
