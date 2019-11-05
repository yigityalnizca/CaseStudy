import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Payment, PaymentBody } from '../components/payment/payment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }
  path = environment.path


  getPayment(): Observable<Payment> {
    return this.http.post<Payment>(this.path + '/api/payment/pay', {
      "returnCode": 1000,
      "returnDesc": "success",
      "receiptMsgCustomer": "beko Campaign",
      "receiptMsgMerchant": "beko Campaign Merchant",
      "paymentInfoList": [
        {
          "paymentProcessorID": 67,
          "paymentActionList": [
            {
              "paymentType": 3,
              "amount": 100,
              "currencyID": 949,
              "vatRate": 800
            }
          ]
        }
      ],
      "QRdata": "00020153039495403100800201810200821904-11-2019 14:31:49830515-328608800-100#8734ECd56a02772ee34ae597c8467abeda984d890118405254858844secureqrsigniturewillbehereinthenearfuture1="
    })
  }

}
