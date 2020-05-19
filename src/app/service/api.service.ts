import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    //Service to reterive the Transactions based on Transaction account .
    getTransactionType(transactionType) {
        return this.http.get("http://localhost:8081/apis/transactions?transactionAccount="+transactionType, { responseType: 'text' as 'json' });
    }

    //Function to get all the Payment and saving Transaction.
    public allTransactionList() {
          return this.http.get("http://localhost:8081/apis/transactions", { responseType: 'text' as 'json' })
    }

    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || "Server Error");
    }
}
