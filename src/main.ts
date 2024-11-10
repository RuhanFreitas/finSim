import promptSync from 'prompt-sync'
import { User } from './user'

const prompt = promptSync()

console.log('Welcome to the Investment Platform!')

function createUser(): User {
  const name = prompt('Enter your first name: ')
  const lastname = prompt('Enter your last name: ')
  const dateOfBirth = prompt('Enter your date of birth (YYYY-MM-DD): ')
  const balance = parseFloat(prompt('Enter your initial balance: '))
  return new User(name, lastname, dateOfBirth, balance)
}

function main() {
  const user = createUser()
  console.log('\nUser created successfully!\n')

  while (true) {
    console.log('\nSelect an option:')
    console.log('1 - Deposit funds')
    console.log('2 - Withdraw funds')
    console.log('3 - Transfer funds to another user')
    console.log('4 - Make an investment')
    console.log('5 - View total spent on investments')
    console.log('6 - View total return on a specific stock')
    console.log('7 - Show user and portfolio details')
    console.log('0 - Exit')

    const option = prompt('Your choice: ')
    switch (option) {
      case '1':
        const depositAmount = parseFloat(prompt('Enter deposit amount: '))
        user.deposit(depositAmount)
        console.log(`Deposited $${depositAmount}`)
        break

      case '2':
        const withdrawAmount = parseFloat(prompt('Enter withdrawal amount: '))
        user.withdraw(withdrawAmount)
        break

      case '3':
        const transferName = prompt(
          'Enter the name of the user to transfer to: ',
        )
        const transferLastname = prompt('Enter their last name: ')
        const transferAmount = parseFloat(prompt('Enter transfer amount: '))
        const recipient = new User(
          transferName,
          transferLastname,
          user.dateOfBirth,
          0,
        )
        user.transfer(recipient, transferAmount)
        break

      case '4':
        const type = prompt("Enter investment type (e.g., 'stock'): ")
        const company = prompt('Enter company name: ')
        const dividendPerShare = parseFloat(
          prompt('Enter dividend per share: '),
        )
        const dividendsPayments = parseInt(
          prompt('Enter number of dividend payments: '),
        )
        const purchasePrice = parseFloat(
          prompt('Enter purchase price per share: '),
        )
        const sharesOwned = parseInt(prompt('Enter number of shares: '))
        user.makeAnInvesment(
          type,
          company,
          dividendPerShare,
          dividendsPayments,
          purchasePrice,
          sharesOwned,
        )
        console.log('Investment made successfully!')
        break

      case '5':
        console.log('Total value spent on investments:')
        user.totalValueSpent()
        break

      case '6':
        const stockCompany = prompt(
          'Enter company name to calculate total return: ',
        )
        user.totalReturnInXStock(stockCompany)
        break

      case '7':
        user.showMe()
        break

      case '0':
        console.log('Exiting the application. Goodbye!')
        return

      default:
        console.log('Invalid option. Please choose a valid number.')
        break
    }
  }
}

main()
