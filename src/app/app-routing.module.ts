import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { TransactionTypeComponent } from './transaction-type/transaction-type.component';

const routes: Routes = [
  { path: '', redirectTo: '/allTransaction', pathMatch: 'full'},
  { path: 'allTransaction', component: TransactionDetailsComponent},
  { path: 'transactionType/:inputText', component: TransactionTypeComponent},
  { path: "**", component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TransactionDetailsComponent, TransactionTypeComponent, PageNotFoundComponent]
