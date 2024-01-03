import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterOutlet ,RouterLink, ActivatedRoute, Router} from '@angular/router';
import { LoginService } from '../loginservice.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-investor-login-in',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule],
  templateUrl: './investor-login-in.component.html',
  styleUrl: './investor-login-in.component.css'
})
export class InvestorLoginInComponent {

  loginid:any;
  password:any;
  msg:any;
  errorMessage:any;
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private loginService: LoginService,private snackBar: MatSnackBar) {

  }

  onSubmit() {
    
    this.msg=this.loginService.logincheck2(this.loginid,this.password).subscribe(
      (response: string) => {
        // Handle the response here
        console.log('Response:', response);
        this.showSnackBar(response);
        if(response==='Login Successfull')
        {
          this.gotoUserList();
        }
      },
      (error: any) => {
    // Parse the string error to an object
    let errorObj: { message?: string };
      errorObj = JSON.parse(error);
    // Extract the message property
    if (errorObj && errorObj.message) {
      this.errorMessage = errorObj.message;
      this.showSnackBar(this.errorMessage);
    } 
  // Your other error handling logic...
      }
      
    );
    
  }


  gotoUserList() {
    this.router.navigate(['investorDashBoard']);
  }
  
  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000, // Duration in milliseconds
    });
  }

}
