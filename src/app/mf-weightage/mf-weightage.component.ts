import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MfWeightageService } from '../mf-weightage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Weightage } from '../weightage';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mf-weightage',
  standalone: true,
  imports: [FormsModule,NgForOf,CommonModule],
  templateUrl: './mf-weightage.component.html',
  styleUrl: './mf-weightage.component.css'
})
export class MfWeightageComponent {
  mfWeightage:Weightage;
  numbers: number[] = Array.from({ length: 100 }, (_, i) => i + 1);
  stocks:Observable<any[]> | undefined;
  mutualFunds:Observable<any[]> | undefined;
  mf:any;
  mfname:string='';
  weightage:any;
  total_corpus:any;
  errorMessage:any;
  


  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private weightageService:MfWeightageService,
        private snackBar: MatSnackBar) {
    this.mfWeightage = new Weightage();
    this.mfWeightage.mfid=0;
  }
  ngOnInit() {
    // Move the data loading logic here
    this.stocks = this.weightageService.getStockList();
    this.mutualFunds = this.weightageService.getAllMutualFunds();

    // Check if mfWeightage.mfid is available before attempting to load data
    
  }

  onMutualFundIdSelected()
  {
    if (this.mfWeightage.mfid) {
        this.weightageService.getMutualFund(this.mfWeightage.mfid).subscribe(
        (data: any) => {
          this.mf = data;
          console.log(this.mf?.name_of_mf); // Use optional chaining to handle 'undefined'
          console.log(this.mfWeightage.mfid);
          console.log(this.mf.name_of_mf);
          this.mfname = this.mf.name_of_mf;
          this.weightage = this.mf.available_weightage;
          this.total_corpus=this.mf.total_corpus;
        },
        (error: any) => {
          console.log(error);
        
          
        }
        
      );
     
      
    }
  }
  onSubmit() {
    this.weightageService.save(this.mfWeightage).subscribe(
     (response: any) => {
      // Handle the response here
      console.log('Response:', response);
      console.log('Sucessfull');
      this.showSnackBar('Weightage given Successfully');  
      this.gotoUserList();
      this.mfname = '';
      this.weightage = '';
      this.total_corpus='';
    },
    (error: any) => {
      let errorObj: { message?: string };
      console.log('Data to parse:', error);
      errorObj = error;
    // Extract the message property
     if (errorObj && errorObj.message) {
        this.errorMessage = errorObj.message;
        this.showSnackBar(this.errorMessage);
     } 
  
    
      
    });
          


  }

  gotoUserList() {
    this.mfWeightage = new Weightage();
    this.router.navigate(['giveWeightage']);
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000, // Duration in milliseconds
    });
  }


}
