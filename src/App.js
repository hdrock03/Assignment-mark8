import "./index.css";
import React, { useState } from "react";

const App = () => {
  var emojiList = {
    "🏳️‍🌈": "Pride Flag",
    "🍉": "Watermelon",
    "🥕": "Carrot",
    "🍋": "Lemon",
    "🏳️": "White Flag",
    "🏴‍☠️": "Pirate Flag",
    "🍕": "Pizza",
    "🥪": "Sandwhich",
    "⏱️": "Stopwatch",
    "🧸": "Teddy-Bear",
    "😈": "evil",
    "🙈": "See-No-Evil Monkey",
    "🙉": "Hear-No-Evil Monkey",
    "🙊": "Speak-No-Evil Monkey",
    "🦍": "Gorilla",
    "🦧": "Orangutan",
    "🐵": "Monkey-Face",
    "🦌": "Deer",
    "🦝": "Raccoon",
    "🐆": "Leopard",
    "🦁": "Lion",
    "🦮": "Guide Dog",
    "🐺": "Wolf",
    "🦙": "Llama",
    "🐪": "Camel",
    "🐷": "Pig Face",
    "🦓": "Zebra",
    "🐃": "Water Buffalo",
    "🐂": "Ox",
    "🐯": "Tiger Face",
    "🐈": "Cat",
    "🦄": "Unicorn",
    "🐻": "Bear",
    "🦦": "Otter",
    "🦨": "Skunk",
    "🦃": "Turkey",
    "🦚": "Peacock",
    "🦎": "Lizard",
    "🐉": "Dragon",
    "🐙": "Octopus",
    "🐜": "Ant",
    "🐚": "Spiral Shell",
    "🐛": "Bug",
    "🦗": "Cricket",
    "🐝": "Honeybee",
    "🦂": "Scorpion",
    "🐞": "Lady Beetle",
  };
  var emojiWeKnow = Object.keys(emojiList);
  var [inputEvent, setInputEvent] = useState("");

  function changeF(event) {
    inputEvent = event.target.value;
    if (inputEvent in emojiList) {
      inputEvent = emojiList[event.target.value];
    } else if (inputEvent === "") {
      inputEvent = "Translation will appeare here...";
    } else {
      inputEvent = "Sorry we don't know about this 😥";
    }
    return setInputEvent(inputEvent);
  }

  function emojiF(emoji) {
    setInputEvent(emojiList[emoji]);
  }
  if (inputEvent === "") {
    inputEvent = "Translation will appear here...";
    setInputEvent(inputEvent);
  }
  return (
    <div className="App">
      <h1> 🏳️ WELCOME TO MY EMOJI LIBRARY 🏳️</h1>
      <input onChange={changeF} placeholder="ENTER YOUR EMOJI HERE"></input>

      <h1>{inputEvent}</h1>
      <h1>Emojis that We know </h1>
      <div>
        {emojiWeKnow.map(emojis => {
          return (
            <span style={{ fontSize: "2rem", padding: " 0.5rem" }} onClick={() => emojiF(emojis)}>
              {emojis}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
};
export default App;
