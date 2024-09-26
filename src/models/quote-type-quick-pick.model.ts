export class QuoteTypeQuickPick {
  public label: string;
  public value: boolean;

  public constructor(init: Required<QuoteTypeQuickPick>) {
    Object.assign(this, init);
  }
}
