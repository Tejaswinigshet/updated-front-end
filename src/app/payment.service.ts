import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {




constructor(private http: HttpClient) { }

  // chargeCard(token: string) {

  //   const headers = new Headers ({ 'token': "token"});

  //   this.http.post('http://localhost:8099/api/v1/charge', {})
  //     .subscribe(resp => {
  //       console.log(resp);
  //     });
  // }

  savePayment(obj):Observable<any>{
    let details={
      cardName:obj.cardName,
      cardNumber:obj.cardNumber,
      expMonth:obj.expMonth,
      expYear:obj.expYear,
      cvv:obj.cvv,
    }
    console.log(details, "DETAILS");
    console.log(obj ,"%%%%%%%%");
    //const uri = 'http://localhost:8091/api/v1/cardDetails';
    return this.http.post("http://localhost:8091/api/v1/cardDetails",obj);
  }
}