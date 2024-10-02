export class Extension {
  public recommendations: string[];
  public unwantedRecommendations: string[];

  public constructor(initialize: Required<Extension>) {
    Object.assign(this, initialize);
  }
}
