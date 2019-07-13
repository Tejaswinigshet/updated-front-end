import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PaymentService } from "../payment.service";

// import { ChargeRequest } from '../chargeRequest.modal';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  // [x: string]: any;
  // chargeRequest: any;
  // paymentService: any;
  // message: string;


  constructor(private http: HttpClient, private paymentService: PaymentService) { }

  ngOnInit() {

    
  }

 

  // chargeCreditCard() {

  //   let form = document.getElementsByTagName("form")[0];
  //     (<
  //   any>window).Stripe.card.createToken({
  //       number: form.cardNumber.value,
  //       exp_month: form.expMonth.value,
  //       exp_year: form.expYear.value,
  //       cvc: form.cvc.value
  //     }, (status:
  //   number, response: any) => {

  //   if (status === 200) {

  //   let token = response.id;
  //         this.chargeCard(token);
  //       }
  //   else {
  //         console.log(response.error.message);
  //       }
  //     });
  //   }

        cardName: any;
        cardNumber: any;
        expiryMonth: any;
        expiryYear: any;
        cvv: any;

    payment(name, number, expmonth, expyear, cvc){

      console.log(name, number, expmonth, expyear, cvc);
      console.log("payment working");

      let obj={
        cardName: name,
        cardNumber: number,
        expiryMonth: expmonth,
        expiryYear:expyear,
        cvv: cvc
        // console.log()
      }
     console.log(obj);
      this.paymentService.savePayment(obj).subscribe(console.log);
    }

}

