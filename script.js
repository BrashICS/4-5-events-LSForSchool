/**
 * ICS3U 4.5 - Events in HTML/JS
 * Mr. Brash 🐿️
 *
 * Make sure you read the lesson and watch the in-class demo.
 *
 * Author:
 */

'use strict';

// Event Listeners and Globals
document.getElementById("over").addEventListener("mouseover", over);
document.getElementById("enter").addEventListener("mouseenter", enter);
document.getElementById("move").addEventListener("mousemove", move);
document.getElementById("btn_show_hide").addEventListener("click", show_hide);

document.getElementById("clickable_door").addEventListener("click", open_close);

window.addEventListener("keydown", keyPress);

let mouseover_count = 0;
let mouseenter_count = 0;
let mousemove_count = 0;

let door_closed = true;

function over() {
  document.getElementById("over_span").innerText = ++mouseover_count;
}

function enter() {
  document.getElementById("enter_span").innerText = ++mouseenter_count;
}

function move() {
  document.getElementById("move_span").innerText = ++mousemove_count;
}

function show_hide() {
  document.getElementById("hidden_text").hidden = !document.getElementById("hidden_text").hidden;
}

function open_close() {
  if (door_closed) {
    document.getElementById("clickable_door").src = "images/door_open.png"
  } else {
    document.getElementById("clickable_door").src = "images/door_closed.png"
  }

  door_closed = !door_closed
}

function keydown(event) {
  console.log(event.key);
  event.preventDefault();
}