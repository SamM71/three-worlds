
const prompt = require(`prompt-sync`)({sigint: true})
const colours = require(`ansi-colors`)
const dialogue = require("./dialogue.json");
    /* Premise: You awaken in a different world, similiar to the universe of Blade Runner 2049, it is dark, dystopian and gritty; bright colours from corporate ads permeate through the thick dense smog
     that fills the city. You learn of a caste system in which the world is inhabited by Humans and Androids/Sentient Machines - though some may claim otherwise. The ultimate goal here will be:
    do you help these machines in becoming their own, granting them the same freedoms the Humans enjoy? Or do you see them simply as tools designed to assist us. */

    /* to do: 
    > add input so you can press enter to advance dialogue?
    > a few meaningful choices?
    > potential random events?
    > declare inventory array
    > basic commands help > displays commands and text-prompt colour tips?
        -ie; blue narrative, cyan character name, white dialogue, yellow important(>)
    */
const charm = 1,
int = 1,
str = 1,
intro = colours.blue(dialogue[0].intro),
intro2 = colours.blue(dialogue[0].intro2),
intro3 = colours.blue(dialogue[0].intro3),
intro4 = colours.blue(dialogue[0].intro4),
intro5 = colours.blue(dialogue[0].intro5),
speech = colours.cyan(dialogue[2].character) + colours.white(dialogue[1].speech),
options = colours.yellow(dialogue[3].options),
co1 = colours.cyan(dialogue[2].character) + colours.white(dialogue[1].speech1),
co2 = colours.cyan(dialogue[2].character) + colours.white(dialogue[1].speech2),
co3 = colours.cyan(dialogue[2].character) + colours.white(dialogue[1].speech3),
expo1 = colours.blue(dialogue[0].expo1),
expo2 = colours.blue(dialogue[0].expo2),
expo3 = colours.blue(dialogue[0].expo3)
let choice = "",
phase = 0;


function cheeseBurger() {
    console.log(intro);
    console.log(intro2);
    console.log(intro3);
    console.log(intro4);
    console.log(intro5);
    console.log(speech);
    console.log(options);
    phase = 1;
    choice = prompt("Choose: ");
    if(phase === 1) {
        switch (choice) {
            case "1":
                console.log(co1);
                delay(expo1, 4000);
                break;
            case "2":
                console.log(co2);
                delay(expo2, 4000);
                break;
            case "3":
                console.log(co3);
                delay(expo3, 4000);
                break;
            default: 
                console.log("invalid input");
        }
    }
}




// Functions to call within cheeseBurger()
function random() {
    const num = Math.floor(Math.random() * 10);
    return num;
}
function charmCheck() {
    return random() + charm;
}
function intCheck() {
    return random() + int;
}
function strCheck() {
    return random() + str;
}

function delay(message, ms) {
    setTimeout(function() {
        console.log(message);
    }, ms);
}
module.exports = cheeseBurger;
