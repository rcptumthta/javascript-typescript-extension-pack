export class LanguageQuickPick {
  public label: string;
  public value: string;

  public constructor(init: Required<LanguageQuickPick>) {
    Object.assign(this, init);
  }
}
