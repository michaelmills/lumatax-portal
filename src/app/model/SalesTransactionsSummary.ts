import { InvalidTransactionsSummary } from "./InvalidTransactionsSummary";
import { ValidTransactionsSummary } from "./ValidTransactionsSummary";

export class SalesTransactionsSummary {
  validTransactionsSummary: ValidTransactionsSummary;
  invalidTransactionsSummary: InvalidTransactionsSummary;
}
