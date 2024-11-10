export class Stock {
  public currentShareValue: number = Stock.simulateSharePriceVariation()
  constructor(
    public company: string,
    public dividendPerShare: number,
    public dividendsPayments: number,
    public purchasePrice: number,
    public sharesOwned: number,
  ) {}

  static simulateSharePriceVariation(): number {
    return Math.floor(Math.random() * (32 - 18) + 18)
  }

  simulateTotalDividendsReturn(): number {
    return this.dividendPerShare * this.sharesOwned * this.dividendsPayments
  }

  simulateCapitalGain(): number {
    return (this.currentShareValue - this.purchasePrice) * this.sharesOwned
  }

  simulateTotalReturn(): number {
    const dividends = this.simulateTotalDividendsReturn()
    const capitalGain = this.simulateCapitalGain()
    return dividends + capitalGain
  }
}
