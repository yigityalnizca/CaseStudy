import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Qr } from '../components/qr/qr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrService {

  constructor(private http: HttpClient) { }
  path = environment.path

  getQrSales():Observable<Qr>{
    return this.http.post<Qr>(this.path + '/api/qr/sale',{"totalReceiptAmount": 100})
  }
}
