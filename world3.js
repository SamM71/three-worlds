const prompt = require(`prompt-sync`)({sigint: true})
const colours = require(`ansi-colors`)

const openingText = `"Detective... Detective!"
You look to your right and see a very sad-looking burger-man. A literal beef-burger patty, but with a face, limbs, and fully clothed.
"What do you think?" he asks.
"About what?" you respond.
"The theft! Someone stole my glass avocado! Are you feeling okay detective?"
It's then that you realise, you're a detective in Burgerville (imaginative, I know) and are trying to solve the case of the stolen avocado.`

function avocadoBurger() {
  console.log(openingText);
}

module.exports = avocadoBurger;