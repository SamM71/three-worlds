const prompt = require(`prompt-sync`)({sigint: true})
const colours = require(`ansi-colors`)


const chickenBurger = require('./world2')
const avocadoBurger = require(`./world3`)



const title = `\n \n ---You are playing THREE WORLDS by Nathan, Rubina, and Sam--- \n\n`
const openingText = `You're hungry.\nIt's cold and wet.\nYou look up at the flashing neon sign of the only restaurant for the next 50 miles.
"No wonder this place is a ghost town" you think to yourself, before opening the door and smelling the odours of freshly cooked patties.
You look up at the menu and see three choices: (1) Cheeseburger Royale, (2) Champion Chicken Burger, (3) 3. Amazing Avo Burger.`

function startGame() {

  console.log(colours.green(title))
  console.log(openingText)

  let isValidChoice = false; 
  
  while (!isValidChoice) {
    const choice = prompt(`Which burger do you choose?: `)

    if (choice === "1") {
      console.log(`You ask for the cheeseburger.`)
      break;
    } else if (choice === "2") {
      console.log(`You ask for the chicken burger.`)
      enterWorld()
      chickenBurger()
      break;
    } else if (choice === "3") {
      console.log(`You ask for the veggie option.`)
      enterWorld()
      avocadoBurger()
      break; 
    } else {
      console.log('Invalid input, please input only one of the three options above')
    }
  }
  enterWorld()
}

function endGame() {
  console.log(`\nYou open your eyes and see the remnants of a delicious burger on your fingers. You've just had a burger that transported you to a different world.
  "Another one please" you shout.
  
  ---THE END---`)
}

startGame()

endGame()

function enterWorld() {
  const opening = `\nYou look down at your burger and notice that it looks nowhere near as good as it did on the sign.
  "Oh well" you say to yourself as you take a bite that changes your life.
  You've never quite eaten anything like this, it's just so perfect.
  You get completely lost in the burger, shutting your eyes to truly appreciate the taste....\n`

  console.log(opening)
}