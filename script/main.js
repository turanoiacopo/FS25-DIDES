//////////////////////////////////////////////////////////////////
// File: main.js
// Author: Iacopo Turano
// Date: 28.04.2025 (DIDES FS25)
// Description: code for interactions with project. 
// Everything is in this file, I don't think this is a good practice, but that's how it is at the moment.

//////////////////////////////////////////////////////////////////
// page objects

// player objects
const musicPlayer = document.getElementById('player');
const playButton = document.getElementById('play-button');
const reverseButton = document.getElementById('reverse-button');
const forwardButton = document.getElementById('forward-button');
const playMask = document.getElementById('play-mask');

// combat objects
const enemySprite = document.getElementById('enemy-sprite');

// dialogue box objects
const dialogue = document.getElementById('dialogue');

//////////////////////////////////////////////////////////////////
// events

// player events
playButton.addEventListener('click', playAudio);
reverseButton.addEventListener('click', reverseAudio);
forwardButton.addEventListener('click', forwardAudio);

//////////////////////////////////////////////////////////////////
// global variables (god forgive me)

// player variables
let musicReverse = false;
let musicDirection = 0; 

// characters variables
const enemy = characters[Math.floor((Math.random() * 3) + 2)]; // random enemy
const dialogueBox = characters[0]; // dialogue box
const player = characters[1]; // player

// combat variables
let actionBuffer = [[], []];
let actionProgress = false;

//////////////////////////////////////////////////////////////////
// main

window.onload = setup; // runs setup when page loads, then runs loop

//----------------------------------------------------------------
function setup()
//----------------------------------------------------------------
{
    actionProgress = true;
    console.log("Running setup");

    console.log("Rolled enemy: " + enemy.name);

    // introduction dialogues
    dialogue.innerHTML = "You engage <strong>Battle Against a Weird Opponent!</strong>";
    setTimeout(() => {
        dialogue.innerHTML = "Composed by: <strong>Keiichi Suzuki</strong> and <strong>Hirokazu Tanaka</strong>";
    }, 2000);

    setTimeout(() => {
        dialogue.innerHTML = "You encounter <strong>" + enemy.name + "</strong>!";
        enemySprite.src = enemy.sprite;
        
    }, 4000);

    setTimeout(() => {
        actionProgress = false;
        setInterval(loop, 1000); // call loop every 1000 milliseconds
    }, 6000);

    console.log("Done setup");
}

//----------------------------------------------------------------
function loop() 
//----------------------------------------------------------------
{
    if(actionProgress) {
        return; // prevents loop from running if action is in progress
    }

    if(enemy.health <= 0) {
        dialogue.innerHTML = "You defeated " + enemy.name + "!";
        return;
    }

    if(player.health <= 0) {
        dialogue.innerHTML = "You were defeated by " + enemy.name + "!";
        return;
    }

    switch(musicDirection) {
        case 0:
            pauseAction();  
            break;
        case 1:
            rollAction();
            break;
        case 2:
            reverseAction();
            break;
        default:
            console.log("How did we get here?");
            break;
    }
}

//////////////////////////////////////////////////////////////////
// functions

// player functions
//----------------------------------------------------------------
function playAudio()
//----------------------------------------------------------------
{
    if(musicPlayer.paused) {
        musicPlayer.play();
        playMask.src = "resources/button_pause.jpg";
        musicPlayer.loop = true;
        
        if(musicReverse) {
            musicDirection = 2;
        } else {
            musicDirection = 1;
        }
    } else {
        musicPlayer.pause();
        playMask.src = "resources/button_play.jpg";
        musicDirection = 0;
        musicPlayer.loop = true;
    }
}

//----------------------------------------------------------------
function forwardAudio()
//----------------------------------------------------------------
{
    if(!musicPlayer.paused && (musicDirection == 2)) {
        let newTime = musicPlayer.duration - musicPlayer.currentTime;

        musicPlayer.src = "resources/battle_weird_loop.mp3";
        musicPlayer.currentTime = newTime;
        musicPlayer.play();
        musicPlayer.loop = true;
        
        musicReverse = false;
        musicDirection = 1;
    }
}

//----------------------------------------------------------------
function reverseAudio()
//----------------------------------------------------------------
{
    if(!musicPlayer.paused && (musicDirection == 1)) {
        let newTime = musicPlayer.duration - musicPlayer.currentTime;
        
        musicPlayer.src = "resources/battle_weird_loop_rev.mp3";
        musicPlayer.currentTime = newTime;
        musicPlayer.play();
        musicPlayer.loop = true;
        
        musicReverse = true;
        musicDirection = 2;
    }
}

// combat functions
//----------------------------------------------------------------
function rollAction()
//----------------------------------------------------------------
{
    return new Promise((resolve) => {
        actionProgress = true;

        let action = Math.floor(Math.random() * enemy.actions.length);
        let damage = Math.floor(Math.random() * enemy.actions[action].maxDamage);

        if (actionBuffer[0].length === 5) {
            actionBuffer[0].shift();
            actionBuffer[1].shift();
        }

        actionBuffer[0].push(enemy.actions[action].name);
        actionBuffer[1].push(damage);

        dialogue.innerHTML = enemy.actions[action].description;

        setTimeout(() => {
            dialogue.innerHTML = "You took " + damage + " damage!";
            player.health -= damage;

            setTimeout(() => {
                actionProgress = false;
                resolve(); // Done
            }, 1000);
        }, 3000);
    });
}

//----------------------------------------------------------------
function rollAttack()
//----------------------------------------------------------------
{
    return new Promise((resolve) => {
        actionProgress = true;

        let action = Math.floor(Math.random() * player.actions.length);
        let damage = Math.floor(Math.random() * player.actions[action].maxDamage);

        dialogue.innerHTML = player.actions[action].description;

        setTimeout(() => {
            dialogue.innerHTML = "Your opponent takes " + damage + " damage!";
            enemy.health -= damage;

            setTimeout(() => {
                actionProgress = false;
                resolve(); // Done
            }, 1000);
        }, 3000);
    });
}

//----------------------------------------------------------------
function reverseAction()
//----------------------------------------------------------------
{
    actionProgress = true;

    if(actionBuffer[0] == undefined || actionBuffer[0] == 0) {
        dialogue.innerHTML = "Now what?";
        actionProgress = false;
        return;
    } else {
        dialogue.innerHTML = "You rewind " + actionBuffer[0][0] + " action...";

        console.log(actionBuffer[0]);

        setTimeout(() => {
            dialogue.innerHTML = "And regained " + actionBuffer[1][0] + " health!"; 
            
            actionBuffer[0].shift(); // remove oldest action
            actionBuffer[1].shift();
            
            actionProgress = false;
        }, 2000);
    }
}

//----------------------------------------------------------------
function pauseAction()
//----------------------------------------------------------------
{
    dialogue.innerHTML = "Now what?";
}