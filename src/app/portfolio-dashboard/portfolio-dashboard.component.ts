import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink} from '@angular/router';


@Component({
  selector: 'app-portfolio-dashboard',
  standalone: true,
  imports: [RouterOutlet ,RouterLink],
  templateUrl: './portfolio-dashboard.component.html',
  styleUrl: './portfolio-dashboard.component.css'
})
export class PortfolioDashboardComponent {

    selectTab(tabIndex: string): void {
      // Declare all variables
      let i: number;
      let tabcontent: HTMLCollectionOf<Element>;
  
      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent") as HTMLCollectionOf<Element>;
      
      for (i = 0; i < tabcontent.length; i++) {
        (tabcontent[i] as HTMLElement).style.display = "none";
      }
  
      // Show the Selected Tab
      const selectedTab = document.getElementById(tabIndex);
      if (selectedTab) {
        selectedTab.style.display = "block";
      }
    }
  
    // You might want to call the function here if needed
    // selectTab('tab1');
  }
  

