import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink} from '@angular/router';

import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../loginservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-investor-sign-up',
  standalone: true,
  imports: [FormsModule,RouterOutlet ,RouterLink],
  templateUrl: './investor-sign-up.component.html',
  styleUrl: './investor-sign-up.component.css'
})
export class InvestorSignUpComponent {
  login:Login ;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private loginService: LoginService) {
    this.login = new Login();
  }

  onSubmit() {
    this.loginService.save2(this.login).subscribe(result => this.gotoUserList());
    console.log('Sucessfull');
  }

  gotoUserList() {
    this.router.navigate(['investorLogIn']);
  }

}
