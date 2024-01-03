import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../loginservice.service';
import { FormsModule } from '@angular/forms';
import { RouterOutlet ,RouterLink} from '@angular/router';

@Component({
  selector: 'app-portfolio-sign-up',
  standalone: true,
  imports: [FormsModule,RouterOutlet ,RouterLink],
  templateUrl: './portfolio-sign-up.component.html',
  styleUrl: './portfolio-sign-up.component.css'
})
export class PortfolioSignUpComponent {
  login:Login ;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private loginService: LoginService) {
    this.login = new Login();
  }

  onSubmit() {
    this.loginService.save(this.login).subscribe(result => this.gotoUserList());
    console.log('Sucessfull');
  }

  gotoUserList() {
    this.router.navigate(['portfolioDashBoard']);
  }

}
