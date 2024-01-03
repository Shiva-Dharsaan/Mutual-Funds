import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink} from '@angular/router';

@Component({
  selector: 'app-porfolio-investor',
  standalone: true,
  imports: [RouterOutlet ,RouterLink],
  templateUrl: './porfolio-investor.component.html',
  styleUrl: './porfolio-investor.component.css'
})
export class PorfolioInvestorComponent {

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

}
