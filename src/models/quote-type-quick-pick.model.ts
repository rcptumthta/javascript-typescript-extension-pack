export class QuoteTypeQuickPick {
  public label: string;
  public value: boolean;

  public constructor(initialize: Required<QuoteTypeQuickPick>) {
    Object.assign(this, initialize);
  }
}
