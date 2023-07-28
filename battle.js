const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function battle() {
  console.log(
    "On the other side, your heart skips a beat, as you face the villain of your journey: Chef Malum, a renowned culinary genius turned rogue. He eyes you with disdain, sinister grin revealing his malevolent intentions. 'You made it this far,' he sneers, 'but your quest ends here. The secret sauce belongs to me!' Undeterred, you stand tall, fueled by determination. The map, riddles, and challenges have led to this pivotal moment. The legacy of the secret sauce must not fall into wrong hands."
  );
  console.log(
    "The atmosphere crackles with tension. He sneers, 'So, you think you're worthy of the secret sauce recipe? Prove it! We shall settle this with a culinary battle. Get all the 5 answers correct, and the recipe shall be yours. Fail, and you'll leave empty-handed, forever wondering what could have been.'"
  );

  const question1 = await askQuestion(
    "Here is your first challenge: I am crispy and golden, a potato delight, In hot oil, I sizzle and take flight. Served with ketchup, my taste is divine, A favorite side dish, you'll find me with every dine. What am I? "
  );

  if (question1 === "fries" || question1 === "french fries") {
    console.log(`That was easy! Let's see if you can answer this next question!`);
  } else {
    console.log(
      `Ah, what a delightful turn of events! It seems your culinary prowess wasn't quite up to the challenge. My dear rival, you fell short, and the recipe for the secret sauce remains firmly in my grasp. Better luck next time, though I highly doubt you'll ever reach my level of culinary greatness. Perhaps you should stick to simpler fare and leave the grand quests to a true culinary genius like myself. Ta-ta!`
    );
    rl.close();
    return;
  }

  const question2 = await askQuestion(
    `In gardens, I bloom, a vibrant sight, \n My red hue is a sweet delight. \n With tiny seeds upon my skin, \n Taste my essence, and you will grin. \n I'm juicy and colorful, a nature's gem, \n With vitamins and flavors that stem. \n A berry-like fruit, yet not the same, \n Unravel my identity, the fruit with fame. `
  );
  if (question2 === "strawberry" || question2 === "strawberries") {
    console.log(`That was a wild guess! You will not be able to answer the next question.`);
  } else {
    console.log(
      `Ah, what a delightful turn of events! It seems your culinary prowess wasn't quite up to the challenge. My dear rival, you fell short, and the recipe for the secret sauce remains firmly in my grasp. Better luck next time, though I highly doubt you'll ever reach my level of culinary greatness. Perhaps you should stick to simpler fare and leave the grand quests to a true culinary genius like myself. Ta-ta!`
    );
    rl.close();
    return;
  }

  const question3 = await askQuestion(
    `Which aromatic seed from India am I? With a warm and peppery flavor, my presence can make dishes soar high. Known for my use in curries and chai, unravel my name, oh culinary wise.`
  );
  if (question3 === "cardamom") {
    console.log(`Okay! You are smarter than I thought! Let me make it harder for you!`);
  } else {
    console.log(
      `Ah, what a delightful turn of events! It seems your culinary prowess wasn't quite up to the challenge. My dear rival, you fell short, and the recipe for the secret sauce remains firmly in my grasp. Better luck next time, though I highly doubt you'll ever reach my level of culinary greatness. Perhaps you should stick to simpler fare and leave the grand quests to a true culinary genius like myself. Ta-ta!`
    );
    rl.close();
    return;
  }

  const question4 = await askQuestion(
    `Guess the missing ingredient: "You seek the heart of Italian cuisine, a sauce with basil, garlic, and pine nuts in between. But what crucial element have you missed? The nutty, aged cheese that brings perfection to this bliss?" `
  );
  if (question4 === "parmesan cheese" || question4 === "parmesan") {
    console.log(`This cannot be real! This is the last question, guess the secret ingredient and the sauce shall be yours!!`);
  } else {
    console.log(
      `Ah, what a delightful turn of events! It seems your culinary prowess wasn't quite up to the challenge. My dear rival, you fell short, and the recipe for the secret sauce remains firmly in my grasp. Better luck next time, though I highly doubt you'll ever reach my level of culinary greatness. Perhaps you should stick to simpler fare and leave the grand quests to a true culinary genius like myself. Ta-ta!`
    );
    rl.close();
    return;
  }

  const question5 = await askQuestion(
    `Marvelous flavor, I provide, \n In sauces, I'm glorified, \n Nature's gift, green and bright, \n Taste enhancer, oh what a delight! `
  );
  if (question5 === "mint") {
    console.log(
      `Chef Malum: "You win this time, but mark my words, it's not over! The secret sauce's recipe may be in your hands, but its true potential remains untapped. You may have triumphed today, but I'll be back, and next time, victory will be mine!"`
    );
  } else {
    console.log(
      `Ah, what a delightful turn of events! It seems your culinary prowess wasn't quite up to the challenge. My dear rival, you fell short, and the recipe for the secret sauce remains firmly in my grasp. Better luck next time, though I highly doubt you'll ever reach my level of culinary greatness. Perhaps you should stick to simpler fare and leave the grand quests to a true culinary genius like myself. Ta-ta!`
    );
  }

  rl.close();
}

module.exports = {battle} ; 
