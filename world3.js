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

const suspects = `(1) Big Mac
(2) Barbie Queue
(3) Pepper King
(4) Angus Steakhouse
(5) Mr. Royale`

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
    const choice = prompt(`Please enter: `)

    if (choice === `1`) {
      console.log(`"He is the director of every performance at this theatre, he owns the place. Usually I do the lighting, but for some reason he gave me the leading role for what we're currently showing - Hamlet."`)
    } else if (choice === `2`) {
      console.log(`"I was performing in the play."`)
    } else if (choice === `3`) {
      console.log(`"I've been rehearsing with Barbie."`)
    } else if (choice === `4`) {
      console.log(`"Where do I start? Most people have a reason to hate him, but the timing of it could be important. You should definitely question his business partner, Pepper King. They used to be quite close and she used to come to every performance but she's stopped recently."`)
    } else if (choice === `5`) {
      convoFinished = true
    }
  }
}

function talkToBarbie() {
  let convoFinished = false;
  while (!convoFinished) {
    console.log(`\nWhat do you want to ask?`)
    console.log(questions)
    const choice = prompt(`Please enter: `)

    if (choice === `1`) {
      console.log(`"Well, he is the director and I am always the leading lady! He's a pretty awful director but at least I get some exposure out of it."`)
    } else if (choice === `2`) {
      console.log(`"I was performing in the play of course!."`)
    } else if (choice === `3`) {
      console.log(`"I was rehearsing with Big Mac."`)
    } else if (choice === `4`) {
      console.log(`"That's a tough one! Honestly, he's desperate for attention so he may have done it himself!"`)
    } else if (choice === `5`) {
      convoFinished = true
    }
  }
}

function enterBusiness() {
  const choice = prompt(`Who do you want to talk to first? : `)

  if (choice === `1`) {
    talkToPepper()
  } else if (choice === `2`) {
    talkToAngus()
  }
}

function talkToPepper() {
  let convoFinished = false;
  while (!convoFinished) {
    console.log(`\nWhat do you want to ask?`)
    console.log(questions)
    const choice = prompt(`Please enter: `)

    if (choice === `1`) {
      console.log(`"I've known him for years, we run a business together."`)
    } else if (choice === `2`) {
      console.log(`"This is strictly confidential, but I was at home planning the setup of a new business as this one is no longer profitable. Please don't tell Mr. Royale."`)
    } else if (choice === `3`) {
      console.log(`"I went for lunch with a friend,"`)
    } else if (choice === `4`) {
      console.log(`"Look no further than our own Angus Steakhouse. He has spent the last few weeks sulking over losing his place as Royale's leading man. He's also a terrible employee that gets no work done."`)
    } else if (choice === `5`) {
      convoFinished = true
    }
  }
}

function talkToAngus() {
  let convoFinished = false;
  while (!convoFinished) {
    console.log(`\nWhat do you want to ask?`)
    console.log(questions)
    const choice = prompt(`Please enter: `)

    if (choice === `1`) {
      console.log(`"He is my boss and WAS my director."`)
    } else if (choice === `2`) {
      console.log(`"I was at home, filming an audition tape to send out to the Burger Broadcasting Company."`)
    } else if (choice === `3`) {
      console.log(`"I was here, at work."`)
    } else if (choice === `4`) {
      console.log(`"That fraud, Maclean. I bet he got the taste of the limelight and had to find a way to stay in it."`)
    } else if (choice === `5`) {
      convoFinished = true
    }
  }
}

function chooseCulprit() {
  console.log(`\nThe suspects are stood in front of you.`)
  console.log(suspects)
  const choice = prompt(`Please enter: `)

  if (choice === `1`) {
    console.log(`"Big Mac did it! You say."`)
  } else if (choice === `2`) {
    console.log(`"Barbie did it! You say."`)
  } else if (choice === `3`) {
    console.log(`"Pepper did it! You say."`)
  } else if (choice === `4`) {
    console.log(`"Angus did it! You say."`)
  } else if (choice === `5`) {
    console.log(`"Mr. Royale did it! You say."`)
  }

  console.log(`You offer up no explanation and the correctly-guessed culprit comes clean. The case of the smashed avocado has been solved.`)
}

module.exports = avocadoBurger;