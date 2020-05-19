import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { ITransaction } from '../transaction';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {
  transactionDetails: any;
  public errorMsg;
  inputText: string = "";


 
  constructor(private _service: ApiService, private _router: Router, private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.transactionAPI()
  }

  // Function to get all Transactions

  public transactionAPI(){
     let resp=this._service.allTransactionList();
     resp.subscribe(data => { this.transactionDetails = data;
        this.transactionDetails = JSON.parse(this.transactionDetails);
        });
   }
 // After clicking on search button passing Text Box value
   searchByAccount() {
    this._router.navigate(['/transactionType', this.inputText]);
   }

}
