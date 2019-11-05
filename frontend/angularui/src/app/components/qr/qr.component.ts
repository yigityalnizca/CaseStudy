import { Component, OnInit } from '@angular/core';
import { QrService } from 'src/app/services/qr.service';
import { Qr } from './qr';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css'],
  providers: [QrService]
})
export class QrComponent implements OnInit {

  constructor(private qrService: QrService) { }

  qrSales: Qr
  
  ngOnInit() {
    this.getQrSales();
  }

  getQrSales() {
    this.qrService.getQrSales().subscribe(data => {
      this.qrSales = data;
    })
  }
}
