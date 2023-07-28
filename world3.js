const prompt = require(`prompt-sync`)({sigint: true})
const colours = require(`ansi-colors`)

const openingText = `"Detective... Detective!"
You look to your right and see a very sad-looking burger-man. A literal beef-burger patty, but with a face, limbs, and fully clothed.
${colours.red("What do you think?")} he asks.
"About what?" you respond.
"The theft! Someone stole my glass avocado! Are you feeling okay detective?"
It's then that you realise, you're a detective in Burgerville (imaginative, I know) and are trying to solve the case of the stolen avocado.
Here's what you know so far:
The victim is the wealthy Mr Royale, his glass avocado was stolen while he was directing the local am-dram performance. He lives by himself, and most people find him intolerable. Honestly, anyone in the town could have done it.
"Is there anyone who might be out to get you?" You question.
"Of course not! Everyone in this town loves me!" Royale responds with not a hint of sarcasm.
Mr Royale is clearly going to be no help so you'll have to ask others for clues.\n`

const leaveHouseText = `Just as you go to leave, you hear something smash outside.
Both you and Mr. Royale rush out to find green glass shattered everywhere.
"My avocado! My precious avocado! It was the only thing I cared about in this entire world!"
"Well, well, well" you mutter. "It looks like the case of the stolen avocado, just became the case of the smashed avocado...\n"`

const questions = `(1) How do you know Mr. Royale?
(2) Where were you when the avocado was stolen?
(3) Where were you when the avocado was smashed?
(4) Do you know of anyone who might have done this?
(5) End conversation.`

function avocadoBurger() {
  console.log(openingText);
  chooseLocation();
}

function chooseLocation() {
  const choice = prompt(`Where do you want to start? The theatre (1), or Mr. Royale's business (2)?: `)
  console.log(leaveHouseText)
  
  if (choice === `1`) {
    enterTheatre()
  } else if (choice === `2`) {
    enterBusiness()
  }
}

function enterTheatre() {
  const choice = prompt(`Who do you want to talk to first? : `)

  if (choice === `1`) {
    talkToBigMac()
  } else if (choice === `2`) {
    talkToBarbie()
  }
}

function talkToBigMac() {
  let convoFinished = false;
  while (!convoFinished) {
    console.log(`\nWhat do you want to ask?`)
    console.log(questions)
    let choice = prompt(`Please enter: `)

    if (choice === `1`) {
      console.log(`"He is the director of every performance at this theatre, he owns the place. Usually I do the lighting, but for some reason he gave me the leading role for what we're currently showing - Hamlet."`)
    } else if (choice === `2`) {
      console.log(`"I was performing in the play."`)
    } else if (choice === `3`) {
      console.log(`"I've been rehearsing with Barbie."`)
    } else if (choice === `4`) {
      talkToBarbie(`"Where do I start? Most people have a reason to hate him, but the timing of it could be important. You should definitely question his business partner, Pepper King. They used to be quite close and she used to come to every performance but she's stopped recently."`)
    } else if (choice === `5`) {
      convoFinished = true
    }
  }
}

function talkToBarbie() {
  let convoFinished = false;
  while (!convoFinished) {
    console.log(`What do you want to ask?`)
    const choice = prompt(questions)
  }
}

module.exports = avocadoBurger;