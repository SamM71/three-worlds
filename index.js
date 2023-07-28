const prompt = require(`prompt-sync`)({sigint: true})
const colours = require(`ansi-colors`)



const title = `\n \n ---You are playing THREE WORLDS by Nathan, Rubina, and Sam--- \n\n`
const openingText = `You're hungry.\nIt's cold and wet.\nYou look up at the flashing neon sign of the only restaurant for the next 50 miles.
"No wonder this place is a ghost town" you think to yourself, before opening the door and smelling the odours of freshly cooked patties.
You look up at the menu and see three choices: \n A. Cheeseburger Royale, \n B. Champion Chicken Burger, \n C. Amazing Avo Burger.`

function startGame() {

  console.log(colours.green(title))
  console.log(openingText)

  let isValidChoice = false; 
  
  while (!isValidChoice) {
    const choice = prompt(`Which burger do you choose?: `)

    if (choice === "a") {
      console.log(`You ask for the cheeseburger.`)
      break;
    } else if (choice === "b") {
      console.log(`You ask for the chicken burger.`)
      const chickenBurger = require('./world2')
      chickenBurger()
      break;
    } else if (choice === "c") {
      console.log(`You ask for the veggie option.`)
      break; 
    } else {
      console.log('Invalid input, please input only one of the three options above')
    }
  }
}

startGame()





