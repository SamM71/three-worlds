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
str = 1;

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

console.log(colours.blue(dialogue[0].text));
