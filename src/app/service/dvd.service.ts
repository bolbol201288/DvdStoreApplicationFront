import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PurchaseDto } from '../model/purchase.dto';

@Injectable({
  providedIn: 'root'
})
export class DvdService {

  private apiUrl = 'http://localhost:8080/api/dvds/calculate';

  constructor(private http: HttpClient) { }

  calculateTotalPrice(purchase: PurchaseDto): Observable<number> {
    return this.http.post<number>(this.apiUrl, purchase);
  }
}
