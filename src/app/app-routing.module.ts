import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment/payment/payment.component';
import { RegComponent } from './reg/reg.component';


const routes: Routes = [
  {path:'pay',component:PaymentComponent},
  {path:'',component:RegComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
