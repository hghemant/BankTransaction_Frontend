import { Component, OnInit } from '@angular/core';
import { ApiService } from './../service/api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-transaction-type',
  templateUrl: './transaction-type.component.html',
  styleUrls: ['./transaction-type.component.css']
})
export class TransactionTypeComponent implements OnInit {
  transactionType: any;
  constructor(private _service: ApiService,private _router: Router, private _route: ActivatedRoute) { }
 


  ngOnInit() {
    this._route.paramMap.subscribe((params: ParamMap) => {
     let transAccount = params.get('inputText');
      this.transactionType = transAccount;
     this.getTransactionInfo(this.transactionType);
    });
  }

  // Function to get all transaction based on transaction Type.
  getTransactionInfo(transactionType) {
    this._service.getTransactionType(transactionType)
          .subscribe(data => {this.transactionType = data;
           this.transactionType = JSON.parse(this.transactionType);
           },
      );
                   
}

}
