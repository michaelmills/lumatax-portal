import { formatDate } from "@angular/common";
import { Component, OnDestroy } from '@angular/core';
import { InvalidTransactionsSummary } from "../../model/InvalidTransactionsSummary";
import { ValidTransactionsSummary } from "../../model/ValidTransactionsSummary";
import { FileUploadService } from "../../service/file-upload.service";

@Component({
  selector: 'app-file-summary',
  templateUrl: './file-summary.component.html',
  styleUrls: ['./file-summary.component.css']
})
export class FileSummaryComponent implements OnDestroy {

  validSummary: ValidTransactionsSummary;
  invalidSummary: InvalidTransactionsSummary;

  constructor(private fileUploadService: FileUploadService) {
    let fileSummary = fileUploadService.getSalesSummary();

    if (fileSummary != null) {
      this.validSummary = fileSummary.validTransactionsSummary;
      this.invalidSummary = fileSummary.invalidTransactionsSummary;
    }
  }

  ngOnDestroy() {
    this.fileUploadService.clearSalesSummary();
  }


  getTotalValidRows(): number {
    if (this.validSummary != null) {
      return this.validSummary.numberOfRows;
    }  else {
      return 0;
    }
  }

  getTotalInvalidRows(): number {
    if (this.invalidSummary != null) {
      return this.invalidSummary.numberOfRows;
    }  else {
      return 0;
    }
  }

  getDateRange(): string {
    if (this.validSummary != null) {
      return FileSummaryComponent.formatTransactionDate(this.validSummary.startDate) + " - " + FileSummaryComponent.formatTransactionDate(this.validSummary.endDate);
    }
  }

  getTotalSales(): string {
    if (this.validSummary != null) {
      return FileSummaryComponent.formatMoney(this.validSummary.totalSales);
    } else {
      return "$0";
    }
  }

  getTotalTax(): string {
    if (this.validSummary != null) {
      return FileSummaryComponent.formatMoney(this.validSummary.totalTax);
    } else {
      return "$0";
    }
  }

  private static formatTransactionDate(date: Date): string {
    return formatDate(date,'MMM. d, yyy', 'en-US');
  }

  private static formatMoney(money: number): string {
    const options = {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    };

    return "$" + Number(money.toFixed(2)).toLocaleString('en-US', options);
  }
}
