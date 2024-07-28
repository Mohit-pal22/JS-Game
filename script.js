"use strict"

const Player1 = document.querySelector(".one");
const Player2 = document.querySelector(".two");

const score0 = document.querySelector(".score0");
const score1 = document.querySelector(".score1");

const current0 = document.querySelector(".current0");
const current1 = document.querySelector(".current1");

const diceEl = document.querySelector(".dice");
diceEl.classList.add("hidden");

const newEl = document.querySelector(".new");
const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");

score0.textContent=0;
score1.textContent=0;
current0.textContent=0;
current1.textContent=0;
Player2.classList.add("opacity");
let current=0;
let activePlayer =0;
let score = [0,0];

function winer()
{
    if(score[activePlayer]>=100)
    {
        document.querySelector(`.score${activePlayer}`).textContent = "🏆Winner";
        Player2.classList.toggle("opacity");
        Player1.classList.toggle("opacity");
    }
}

function switchPlayer()
{
    current =0;
    document.querySelector(`.current${activePlayer}`).textContent=0;
    activePlayer = activePlayer==1?0:1;
    Player2.classList.toggle("opacity");
    Player1.classList.toggle("opacity");
}


roll.addEventListener("click", function()
{
    diceEl.classList.remove("hidden");
    const dice = Math.trunc(Math.random()*6)+1;
    diceEl.src = `./00.Pictures/dice-${dice}.png`;
    if(dice!=1)
    {
        current += dice;
        document.querySelector(`.current${activePlayer}`).textContent=current;
    }
    else
    {
        winer();
        score[activePlayer]=0;
        document.querySelector(`.score${activePlayer}`).textContent=0;
        switchPlayer();
    }
})

hold.addEventListener("click", function()
{
    score[activePlayer]+=current;
    document.querySelector(`.score${activePlayer}`).textContent=score[activePlayer];
    winer();
    switchPlayer();
})

newEl.addEventListener("click", function()
{
    current =0;
    current0.textContent=0;
    current1.textContent=0;
    score0.textContent=0;
    score1.textContent=0;
    activePlayer=0;
    score[0]=0;
    score[1]=0;
    Player1.classList.remove("opacity");
    Player2.classList.add("opacity");
    diceEl.classList.add("hidden");
})