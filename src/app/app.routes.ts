import { Routes } from '@angular/router';
import { PortfolioLoginComponent } from './portfolio-login/portfolio-login.component';
import { HomeComponent } from './home/home.component';
import { PortfolioSignUpComponent } from './portfolio-sign-up/portfolio-sign-up.component';
import { InvestorLoginInComponent } from './investor-login-in/investor-login-in.component';
import { InvestorSignUpComponent } from './investor-sign-up/investor-sign-up.component';
import { PortfolioDashboardComponent } from './portfolio-dashboard/portfolio-dashboard.component';
import { DefineMfComponent } from './define-mf/define-mf.component';
import { MfWeightageComponent } from './mf-weightage/mf-weightage.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { EachStockComponent } from './each-stock/each-stock.component';
import { PorfolioInvestorComponent } from './porfolio-investor/porfolio-investor.component';
import { ViewmutualfundsComponent } from './viewmutualfunds/viewmutualfunds.component';

export const routes: Routes = [
    { path:"pmLogin" , component:PortfolioLoginComponent},
    { path:"portfolioSignUp" , component:PortfolioSignUpComponent},
    { path:"portfolioDashBoard" , component:PortfolioDashboardComponent},
    { path:"investorDashBoard" , component:PorfolioInvestorComponent},
    { path:"investorLogIn" , component:InvestorLoginInComponent},
    { path:"investorSignUp" , component:InvestorSignUpComponent},
    { path:"defineMf" , component:DefineMfComponent},
    { path:"giveWeightage" , component:MfWeightageComponent},
    { path:"seeStocks" , component:StockDetailsComponent},
    { path:"eachStock" , component:EachStockComponent},
    { path:"viewMutualFund" , component:ViewmutualfundsComponent},
    { path:"home",component:HomeComponent},
    { path:'',redirectTo:'/home',pathMatch:'full'},
];
