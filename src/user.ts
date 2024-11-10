import promptSync from 'prompt-sync'

import { Portfolio } from './portfolio'

const prompt = promptSync()

export class User {
  private portfolio: Portfolio = new Portfolio(this, 0)

  constructor(
    public name: string,
    public lastname: string,
    public dateOfBirth: string,
    public balance: number,
  ) {}

  deposit(value: number): void {
    this.balance += value
  }

  withdraw(value: number): void {
    if (this.balance < value)
      return console.error(
        'You cannot withdraw more than your current balance.',
      )

    this.balance -= value
    console.warn('Withdrawal successful')
  }

  transfer(user: User, value: number): void {
    const checkUser: string = prompt('What is your date of birth? ')

    if (checkUser !== this.dateOfBirth)
      return console.error('Unable to verify user: transfer not authorized.')

    if (this.balance < value)
      return console.error(
        'You cannot transfer more than your current balance.',
      )

    if (user === this) return console.error('You cannot transfer to yourself.')

    user.balance += value
    console.warn(
      `Transaction of $${value} to ${user.name} ${user.lastname} completed successfully.`,
    )
  }

  makeAnInvesment(
    type: string,
    company: string,
    dividendPerShare: number,
    dividendsPayments: number,
    purchasePrice: number,
    sharesOwned: number,
  ): void {
    if (this.balance <= purchasePrice * sharesOwned)
      return console.log('Insufficient balance')

    this.portfolio.addInvestment(
      type,
      company,
      dividendPerShare,
      dividendsPayments,
      purchasePrice,
      sharesOwned,
    )

    this.balance -= purchasePrice * sharesOwned
  }

  totalValueSpent(): void {
    console.log(this.portfolio.totalValueSpent())
  }

  totalReturnInXStock(company: string): void {
    console.log(this.portfolio.totalReturn(company).toFixed(2))
  }

  showMe(): void {
    console.log('Your profile')
    console.table(this)

    console.log('Your portfolio')
    console.table(this.portfolio)

    console.log('Your shares owned')
    console.table(this.portfolio.sharesOwned)
  }
}
