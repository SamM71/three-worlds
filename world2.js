const colours = require(`ansi-colors`);
const { battle } = require("./battle");
const prompt = require(`prompt-sync`)({sigint: true})
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function askQuestion(question) {
//   return new Promise((resolve) => {
//     rl.question(question, (answer) => {
//       resolve(answer);
//     });
//   });
// }

// async function battle() {
//   console.log(
//     "On the other side, your heart skips a beat, as you face the villain of your journey: Chef Malum, a renowned culinary genius turned rogue. He eyes you with disdain, sinister grin revealing his malevolent intentions. 'You made it this far,' he sneers, 'but your quest ends here. The secret sauce belongs to me!' Undeterred, you stand tall, fueled by determination. The map, riddles, and challenges have led to this pivotal moment. The legacy of the secret sauce must not fall into wrong hands."
//   );
//   console.log(
//     "The atmosphere crackles with tension. He sneers, 'So, you think you're worthy of the secret sauce recipe? Prove it! We shall settle this with a culinary battle. Get all the 5 answers correct, and the recipe shall be yours. Fail, and you'll leave empty-handed, forever wondering what could have been.'"
//   );

//   const question1 = await askQuestion(
//     "Here is your first challenge: I am crispy and golden, a potato delight, In hot oil, I sizzle and take flight. Served with ketchup, my taste is divine, A favorite side dish, you'll find me with every dine. What am I? "
//   );

//   if (question1 === "fries" || question1 === "french fries") {
//     console.log(`That was easy! Let's see if you can answer this next question!`);
//   } else {
//     console.log(
//       `Ah, what a delightful turn of events! It seems your culinary prowess wasn't quite up to the challenge. My dear rival, you fell short, and the recipe for the secret sauce remains firmly in my grasp. Better luck next time, though I highly doubt you'll ever reach my level of culinary greatness. Perhaps you should stick to simpler fare and leave the grand quests to a true culinary genius like myself. Ta-ta!`
//     );
//     rl.close();
//     return;
//   }

//   const question2 = await askQuestion(
//     `In gardens, I bloom, a vibrant sight, \n My red hue is a sweet delight. \n With tiny seeds upon my skin, \n Taste my essence, and you will grin. \n I'm juicy and colorful, a nature's gem, \n With vitamins and flavors that stem. \n A berry-like fruit, yet not the same, \n Unravel my identity, the fruit with fame. `
//   );
//   if (question2 === "strawberry" || question2 === "strawberries") {
//     console.log(`That was a wild guess! You will not be able to answer the next question.`);
//   } else {
//     console.log(
//       `Ah, what a delightful turn of events! It seems your culinary prowess wasn't quite up to the challenge. My dear rival, you fell short, and the recipe for the secret sauce remains firmly in my grasp. Better luck next time, though I highly doubt you'll ever reach my level of culinary greatness. Perhaps you should stick to simpler fare and leave the grand quests to a true culinary genius like myself. Ta-ta!`
//     );
//     rl.close();
//     return;
//   }

//   const question3 = await askQuestion(
//     `Which aromatic seed from India am I? With a warm and peppery flavor, my presence can make dishes soar high. Known for my use in curries and chai, unravel my name, oh culinary wise.`
//   );
//   if (question3 === "cardamom") {
//     console.log(`Okay! You are smarter than I thought! Let me make it harder for you!`);
//   } else {
//     console.log(
//       `Ah, what a delightful turn of events! It seems your culinary prowess wasn't quite up to the challenge. My dear rival, you fell short, and the recipe for the secret sauce remains firmly in my grasp. Better luck next time, though I highly doubt you'll ever reach my level of culinary greatness. Perhaps you should stick to simpler fare and leave the grand quests to a true culinary genius like myself. Ta-ta!`
//     );
//     rl.close();
//     return;
//   }

//   const question4 = await askQuestion(
//     `Guess the missing ingredient: "You seek the heart of Italian cuisine, a sauce with basil, garlic, and pine nuts in between. But what crucial element have you missed? The nutty, aged cheese that brings perfection to this bliss?" `
//   );
//   if (question4 === "parmesan cheese" || question4 === "parmesan") {
//     console.log(`This cannot be real! This is the last question, guess the secret ingredient and the sauce shall be yours!!`);
//   } else {
//     console.log(
//       `Ah, what a delightful turn of events! It seems your culinary prowess wasn't quite up to the challenge. My dear rival, you fell short, and the recipe for the secret sauce remains firmly in my grasp. Better luck next time, though I highly doubt you'll ever reach my level of culinary greatness. Perhaps you should stick to simpler fare and leave the grand quests to a true culinary genius like myself. Ta-ta!`
//     );
//     rl.close();
//     return;
//   }

//   const question5 = await askQuestion(
//     `Marvelous flavor, I provide, \n In sauces, I'm glorified, \n Nature's gift, green and bright, \n Taste enhancer, oh what a delight! `
//   );
//   if (question5 === "mint") {
//     console.log(
//       `Chef Malum: "You win this time, but mark my words, it's not over! The secret sauce's recipe may be in your hands, but its true potential remains untapped. You may have triumphed today, but I'll be back, and next time, victory will be mine!"`
//     );
//   } else {
//     console.log(
//       `Ah, what a delightful turn of events! It seems your culinary prowess wasn't quite up to the challenge. My dear rival, you fell short, and the recipe for the secret sauce remains firmly in my grasp. Better luck next time, though I highly doubt you'll ever reach my level of culinary greatness. Perhaps you should stick to simpler fare and leave the grand quests to a true culinary genius like myself. Ta-ta!`
//     );
//   }

//   rl.close();
// }

function redGreenWires () {
    console.log(`As the door creaked open, a mysterious sight awaited you. Inside the dimly lit room, a pedestal stood prominently, and upon it lay a parchment with an enigmatic riddle. Made of oil, egg yolks and a splash of lemon juice, I add a creamy flavor boost to your sandwich and burger without the cheese. What am I?`)

    let isValidChoice = false;

    while (!isValidChoice) {
        const choice = prompt("What is the answer to the riddle? ")

        if (choice === "mayonnaise") {
            console.log(`Confidently answering, "Mayonnaise!", the riddle pedestal reveals an ancient map inside a hidden compartment. The robot beeps with excitement; the map leads to "Sauce Isle," where the secret sauce recipe was born. Following the map, you reach a crossroad with no clear direction. Left or right, the choice is yours.`);
            break; 
        } else {
            console.log(`OH NO!! Wrong answer! You ponder the riddle on the pedestal, trying to decipher the answer. As you rack your brain, you notice a clue engraved on the side of the pedestal: "I am often used to make dressings and dips."`)
        }
    } 
}

function pathway () {

    let isValidChoice = false; 
    
    while (!isValidChoice) {
      const choice = prompt("Which path do you choose? ")

      if (choice === "left") {
        console.log (`Following your instincts, you choose the left path. \n The dense foliage and ancient trees create an enchanting atmosphere as you walk deeper into the heart of the island. The air is filled with the scents of exotic flowers and the distant sound of flowing water. The robot leads the way, its sensors analyzing the surroundings. \n
        After walking for what feels like hours, you come across a sparkling river that cuts through the forest. The map seems to suggest crossing the river, but there's no visible bridge. You notice some stones scattered in the water, forming a makeshift path. \n 
        A fallen trunk lies nearby, adding to the intrigue of the path ahead.`)
        break; 
      } else if (choice === "right") {
        console.log(`As you continue down the right path, a sense of serenity washes over you. The meadow's enchanting beauty fills your heart with joy, and for a moment, you believe you made the right choice. \n However, as you venture deeper, the trail starts to narrow, and the lush greenery gives way to tangled thorns and dense foliage. \n With each step, the path becomes more treacherous, and a sinking feeling begins to gnaw at your confidence. \n Suddenly, the trail comes to an abrupt halt, revealing a dead-end with no way forward. Disheartened, you realize that this was not the correct route to Sauce Isle. \n Regrouping your thoughts, you decide to retrace your steps and try the left path, hoping it will lead you closer to the legendary island you seek.`)
      } else {
        console.log (`Wrong answer, please choose between right and left.`)
      }
    }
  

}

function bridge () {
    console.log (`Faced with two choices, you weigh your options carefully. \n A. You consider using the fallen trunk as a makeshift bridge, testing its stability and evaluating its potential to carry you across the river. \n B. Alternatively, you contemplate gathering the scattered stones to build a bridge, ensuring a secure passage to the other side. Both paths pose their challenges, but your determination to reach Sauce Isle drives you forward. Time is of the essence, and the decision rests on your shoulders.`)

    let isValidChoice = false; 
    
    while (!isValidChoice) {
      const choice = prompt("Which option do you choose to make a bridge: tree or stones? ")
      
      if (choice === "tree") {
        console.log(`With unwavering resolve, you decide to use the fallen trunk as a makeshift bridge. With cautious steps, you test its sturdiness and find it surprisingly reliable. \n Slowly and steadily, you make your way across the glistening river, your heart pounding with every footfall. The robot follows closely behind, providing assistance and support as you navigate the tricky path.`)
        break; 
      } else if (choice === "stones") {
        console.log(`The stones proved exceedingly slippery. As you splash into the river, your heart races, and you quickly swim back to the riverbank, soaking wet. Frustration sets in, and you wonder if you misinterpreted the map. Just as you're about to give up on crossing the river, you notice something peculiar.\n There, carved into a piece of wood, is a message in ancient script. You squint, trying to decipher the mysterious symbols. The robot hovers closer, emitting curious beeps. It seems as intrigued as you are. \n As you study the carving, a realization dawns upon you. The message reads, "Follow the path of the fallen leaves."`)
      } else {
        console.log(`Wrong answer! Please choose between one of the options above. `)
      }
    }
}

function mountain () {
    console.log (`As you reach the other side, a sense of accomplishment washes over you. Your daring choice has paid off, and you've successfully crossed the river. Turning your gaze ahead, you can hardly believe your eyes. There, in the distance, stands the magnificent peak of the mountain on Sauce Isle. Its summit is shrouded in a mesmerizing mist, adding an aura of mystique to the legendary location.\n
    With renewed determination, you press onward, the map guiding you towards the mountain's apex. The terrain becomes more challenging, but your adventurous spirit keeps you going. Ancient trees seem to whisper secrets of the island, and the vibrant flora paints a surreal landscape around you. \n As you continue your ascent towards the mountain's peak, you encounter a deep ravine blocking your path. A river flows swiftly below, cutting off access to the other side. Undeterred by this new obstacle, you remain determined to uncover the secrets that await you.
    Searching for a solution, you explore the surroundings and find a mysterious riddle inscribed on a stone nearby. Its enigmatic words puzzle your mind: \n 
    "I am a number, less than 5, Not one, that much is clear. A prime among my kind, A unique trait you'll find. I'm small and odd, yet mighty, A puzzle for you to crack. Can you guess my value, And see through the number's knack?" `)

    let isValidChoice = false; 
    
    while (!isValidChoice) {
      const choice = prompt("What number am I? ")
      if (choice === "3") {
        console.log(`As the number 3 rolls off your tongue, a miraculous sight unfolds before you. The logs you arranged suddenly lock into place, forming a sturdy bridge across the ravine. You proceed with steady steps, crossing the river with a newfound sense of triumph.`)
        break;
      } else {
        console.log(`Wrong answer! Try again!`)
      }
    }
}
function final () {
    console.log (`As the number 3 rolls off your tongue, a miraculous sight unfolds before you. The logs you arranged suddenly lock into place, forming a sturdy bridge across the ravine. You proceed with steady steps, crossing the river with a newfound sense of triumph.
    On the other side, your heart skips a beat, as you face the villain of your journey: Chef Malum, a renowned culinary genius turned rogue. He eyes you with disdain, sinister grin revealing his malevolent intentions. "You made it this far," he sneers, "but your quest ends here. The secret sauce belongs to me!" Undeterred, you stand tall, fuelled by determination. The map, riddles, and challenges have led to this pivotal moment. The legacy of the secret sauce must not fall into wrong hands.
    `)
    let isValidChoice = false; 
    
    while (!isValidChoice) {
      const choice = prompt(`This is your final chance! Guess the secret ingredient of the sauce or the secret sauce's recipe shall belong to chef Malum forever and ever! The secret ingredient in the sauce is: \n Marvelous flavor, I provide, \n In sauces, I'm glorified, \n Nature's gift, green and bright, \n Taste enhancer, oh what a delight!
      `)
      if (choice === "mint") {
        console.log("You win this time, but mark my words, it's not over! The secret sauce's recipe may be in your hands, but its true potential remains untapped. You may have triumphed today, but I'll be back, and next time, victory will be mine!")
        break;
      } else {
        console.log(`Ah, what a delightful turn of events! It seems your culinary prowess wasn't quite up to the challenge. My dear rival, you fell short, and the recipe for the secret sauce remains firmly in my grasp. Better luck next time, though I highly doubt you'll ever reach my level of culinary greatness. Perhaps you should stick to simpler fare and leave the grand quests to a true culinary genius like myself. Ta-ta!`)
      }
    }
}
function chickenBurger () {
    console.log("\n\n\n Checking out the menu, you decide to try the new Champion Chicken burger - a crispy chicken fillet with lettuce, tomato, cheese, and the restaurant's top-secret special sauce. \n \n You take a seat and eagerly await your order. When the burger arrives, you take a big bite and are delighted by the interplay of flavors. The chicken is juicy, the veggies are fresh, and the special sauce ties it all together. \n\n As you savor the burger, the noisy restaurant suddenly fades away. You find yourself in a dimly lit factory warehouse. Loud machinery whirs around you. \n \n A small robot zips up to you. \n'Thank goodness you're here!' it exclaims. \n'Our secret burger sauce recipe has been stolen! You're the only one who can help recover it from the sauce thief before he sells it to our competitors. Please, you must hurry!'")
  
    console.log(`The robot leads you down a corridor. You come across a high-tech security door. On the wall is a panel with colorful wires sticking out. It seems you need to cut the correct wires to get through the door and continue your pursuit of the secret sauce recipe. You have three options: \n A. Cut the ${colours.red("red")} and ${colours.green("green")} wires \n B. Cut the ${colours.blue("blue")} and ${colours.yellow("yellow")} wires \n C. Ask the robot for help`)
  
    let isValidChoice = false; 
    
    while (!isValidChoice) {
      const choice = prompt("Which option do you choose? ")
  
      if (choice === "a") {
        console.log("You carefully reach for the red and green wires, picturing the Champion Chicken burger in your mind. Lettuce, tomato, cheese... Your fingers tremble as you snip the wires simultaneously. The panel emits a low hum, and the security door slides open with a hiss. You exchange a victorious smile with the robot and proceed further into the mysterious warehouse.")
        redGreenWires()
        pathway()
        bridge ()
        mountain()
        final()
        break; 
      } else if (choice === "b") {
        console.log("You recall something about blue and yellow being complementary colors, and you decide to give it a shot. With a deep breath, you sever the blue and yellow wires simultaneously. Suddenly, the panel starts beeping loudly, and you jump back in alarm. The door remains shut, and the robot lets out a disappointed beep.") 

        console.log (`As the security panel's beeping subsides, a mechanical voice emanates from the console, filling the room with its robotic tone. "I'm the color of an apple or cherry. Also seen on a fire truck in a hurry. I'm associated with anger and with passion, And bright red roses on a romantic occasion." \n \n The message echoes through the chamber, and you realize that this is the answer to the next riddle, a challenge that lies beyond the cut wires. The robot's disappointed beep turns into an expectant hum, as if encouraging you to decipher the clue.`)

      } else if (choice === "c") {
        console.log("You decide to ask the robot for help, not wanting to randomly cut any wires. \n 'I'm afraid I can't reveal the wire sequence,' the robot says apologetically. 'But I can give you a clue. Think back to the burger you just ate - specifically the colors of the ingredients. They will guide you to the correct wires.' \n You think hard, picturing the Champion Chicken burger in your mind. Lettuce, tomato, cheese...you've got it!")

      } else {
        console.log('Invalid input, please input only one of the three options above') 
      }
    }
  }
  
chickenBurger()






module.exports = chickenBurger;
