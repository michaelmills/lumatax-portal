import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SalesTransactionsSummary } from "../model/SalesTransactionsSummary";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private salesSummary: SalesTransactionsSummary;

  constructor(private httpClient: HttpClient) { }

  upload(file: any): Observable<void> {
    if (file != null) {
      const formData = new FormData();
      formData.append('file', file);

      return this.httpClient.post<SalesTransactionsSummary>('/sales/transactions/file', formData)
        .pipe(
          map(response => {
            this.salesSummary = Object.assign(new SalesTransactionsSummary(), response);
          })
        );
    }
  }

  getSalesSummary() {
    return this.salesSummary;
  }

  clearSalesSummary() {
    this.salesSummary = null;
  }
}
