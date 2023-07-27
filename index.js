const prompt = require(`prompt-sync`)({sigint: true})
const colours = require(`ansi-colors`)


const title = `---You are playing THREE WORLDS by Nathan, Rubina, and Sam--- \n\n`
const openingText = `You're hungry.\nIt's cold and wet.\nYou look up at the flashing neon sign of the only restaurant for the next 50 miles.
"No wonder this place is a ghost town" you think to yourself, before opening the door and smelling the odours of freshly cooked patties.
You look up at the menu and see three choices: Cheeseburger Royale, Champion Chicken Burger, and Amazing Avo Burger.`

function startGame() {

  console.log(colours.green(title))
  console.log(openingText)

  const choice = prompt(`Which do you choose?: `)

  if (choice == `1`) {
    console.log(`You ask for the cheeseburger.`)
  } else if (choice == `2`) {
    console.log(`You ask for the chicken burger.`)
  } else {
    console.log(`You ask for the veggie option.`)
  }
}

startGame()