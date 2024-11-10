import { User } from './user'
import { Stock } from './stock'

export class Portfolio {
  constructor(
    private user: User,
    private balance: number = 0,
    public sharesOwned: Stock[] = [],
  ) {}

  addInvestment(
    type: string,
    company: string,
    dividendPerShare: number,
    dividendsPayments: number,
    purchasePrice: number,
    sharesOwned: number,
  ): void {
    if (type === 'stock') {
      const stock = new Stock(
        company,
        dividendPerShare,
        dividendsPayments,
        purchasePrice,
        sharesOwned,
      )

      this.sharesOwned.push(stock)

      const valueSpent = purchasePrice * sharesOwned

      this.balance += valueSpent
    }
  }

  totalValueSpent(): number {
    return this.sharesOwned.reduce(
      (acc, stock) => acc + stock.purchasePrice * stock.sharesOwned,
      0,
    )
  }

  totalReturn(company: string): number {
    const stock = this.sharesOwned.find((stock) => stock.company === company)

    if (!stock) {
      console.error('Stock not found')
      return 0
    }

    return stock.simulateTotalReturn()
  }
}
