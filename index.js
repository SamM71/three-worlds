const prompt = require(`prompt-sync`)({sigint: true})
const colours = require(`ansi-colors`)


const title = `\n \n ---You are playing THREE WORLDS by Nathan, Rubina, and Sam--- \n\n`
const openingText = `You're hungry.\nIt's cold and wet.\nYou look up at the flashing neon sign of the only restaurant for the next 50 miles.
"No wonder this place is a ghost town" you think to yourself, before opening the door and smelling the odours of freshly cooked patties.
You look up at the menu and see three choices: \n - Cheeseburger Royale, \n - Champion Chicken Burger, \n - Amazing Avo Burger.`

function startGame() {

  console.log(colours.green(title))
  console.log(openingText)

  let isValidChoice = false; 
  
  while (!isValidChoice) {
    const choice = prompt(`Which burger do you choose?: `)

    if (choice == `cheeseburger royale`) {
      console.log(`You ask for the cheeseburger.`)
      break;
    } else if (choice == `champion chicken burger`) {
      console.log(`You ask for the chicken burger.`)
      break;
    } else if (choice === 'amazing avo burger') {
      console.log(`You ask for the veggie option.`)
      break; 
    } else {
      console.log('invalid input, please input only one of the three options above')
    }
  }
}

startGame()
