const prompt = require("prompt-sync")();

const answer = prompt("Would you like to go on an adventure? (y/n)");

let character = null;
let armor = null;
let weapon = null;

if (answer.toLowerCase() === "y") {
  //Character
  const answer2 = prompt("Choose your character: (Julius/Joan)");
  if (answer2.toLowerCase() === "julius") {
    character = "Julius";
  } else if (answer2.toLowerCase() === "joan") {
    character;
  }
  //Armor
  const answer3 = prompt("Choose your armor: (Platebody/Chainmail)");
  if (answer3.toLowerCase() === "platebody") {
    armor = "Platebody";
  } else if (answer3.toLowerCase() === "chainmail") {
    armor = "Chainmail";
  }

  const answer4 = prompt("Choose your weapon: (Sword/Bow)");
  if (answer4.toLowerCase() === "sword") {
    weapon = "Sword";
  } else if (answer4.toLowerCase() === "bow") {
    weapon = "Bow";
  }

  const answer5 = prompt(
    "The journey begins! Which route do you want to take? (Forest/Riverlands)"
  );
  //Forest route
  if (answer5 === "Forest" && armor === "Platebody") {
    const answer6 = prompt(
      "You've been ambushed by archers! Luckily your thick platebody armor has protected you and you were able to escape towards the river. You see a boat; take it downstream? (y/n)"
    );

    if (answer6.toLowerCase() === "y") {
      const answer8 = prompt("The river leads you to a castle, enter? (y/n)");
      if (answer8.toLowerCase() === "y") {
        const answer9 = prompt("A dragon rises from its slumber! Fight? (y/n)");

        //winning option
        if (answer9 === "y" && weapon === "Sword") {
          console.log(
            "You've slain the dragon and discovered a room full of gold! You win!"
          );
        } else if (answer9 === "y" && weapon === "Bow") {
          console.log(
            "Your arrows don't do anything against the dragons tough hide and it rips you to shreds..."
          );
        } else if (answer9 === "n") {
          console.log(
            "The dragon burns you to a crisp while you're trying to escape..."
          );
        }
      } else if (answer8.toLowerCase() === "n") {
        console.log("Aliens come from nowhere and abduct you...");
      }
    } else if (answer6.toLowerCase() === "n") {
      console.log(
        "The archers caught up and defeat you in hand to hand combat..."
      );
    }
  } else if (answer5 === "Forest" && armor === "Chainmail") {
    console.log(
      "You've been ambushed by archers! Their arrows pierce your thin chainmail and you die a gruesome death..."
    );

    //Riverlands route
  } else if (answer5 === "Riverlands" && armor === "Chainmail") {
    const answer7 = prompt(
      "You take a canoe downstream but it leads straight to a waterfall! Luckily after you capsize your chainamil is light enough for you to stay afloat and get back into your boat. Keep paddling downstream or stop at an embankment to rest? (Downstream/Stop)"
    );

    if (answer7 === "Downstream") {
      const answer8 = prompt("The river leads you to a castle, enter? (y/n)");

      if (answer8.toLowerCase() === "y") {
        const answer9 = prompt("A dragon rises from its slumber! Fight? (y/n)");

        //winning option
        if (answer9 === "y" && weapon === "Sword") {
          console.log(
            "You've slain the dragon and discovered a room full of gold! You win!"
          );
        } else if (answer9 === "y" && weapon === "Bow") {
          console.log(
            "Your arrows don't do anything against the dragons tough hide and it rips you to shreds..."
          );
        } else if (answer9 === "n") {
          console.log(
            "The dragon burns you to a crisp while you're trying to escape..."
          );
        } else if (answer8.toLowerCase() === "n") {
          console.log("Aliens come from nowhere and abduct you...");
        }
      }
    } else if (answer7 === "Stop") {
      console.log("You're ambushed by water gnomes who kill you...");
    } else if (answer5 === "Riverlands" && armor === "Platebody") {
      console.log(
        "You take a canoe downstream but it leads straight to a waterfall! You capsize and your heavy platebody armor is too heavy and you drown..."
      );
    }
  }
} else if (answer === "n") {
  console.log("The adventure awaits you at another time!");
}
