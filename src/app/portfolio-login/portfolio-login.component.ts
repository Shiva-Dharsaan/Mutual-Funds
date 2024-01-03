import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink, ActivatedRoute, Router} from '@angular/router';
import { LoginService } from '../loginservice.service';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-portfolio-login',
  standalone: true,
  imports: [RouterOutlet ,RouterLink,FormsModule],
  templateUrl: './portfolio-login.component.html',
  styleUrl: './portfolio-login.component.css'
})
export class PortfolioLoginComponent {

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
    
    this.msg=this.loginService.logincheck(this.loginid,this.password).subscribe(
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
    console.log('Error object',error);
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
    console.log(this.loginService.token);
    this.router.navigate(['portfolioDashBoard']);
  }
  
  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000, // Duration in milliseconds
    });
  }
}
