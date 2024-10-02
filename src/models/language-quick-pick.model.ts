export class LanguageQuickPick {
  public label: string;
  public value: string;

  public constructor(initialize: Required<LanguageQuickPick>) {
    Object.assign(this, initialize);
  }
}
