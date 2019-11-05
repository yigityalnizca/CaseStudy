import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';
import { Payment, PaymentBody } from './payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [PaymentService]
})
export class PaymentComponent implements OnInit {

  constructor(private paymentService: PaymentService) { }

  payment: Payment
  paymentBody: PaymentBody 
  ngOnInit() {
      this.getPayment();
  }

  getPayment() {

    this.paymentService.getPayment().subscribe(data => {
      this.payment = data;
    })
  }
}
