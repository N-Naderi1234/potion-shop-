'use strict';

const playerName = prompt("What's your name?");
const playerAge = Number(prompt("How old are you?"));
const favoriteElement = prompt("What's your favorite element? (fire, water, earth, air)");

alert(Welcome ${playerName}! At ${playerAge}, you're just the right age to master the powers of ${favoriteElement}.);

const potions = ['Healing Potion', 'Mana Elixir', 'Invisibility Draft', 'Fire Resistance'];

const potionStock = {
  'Healing Potion': { quantity: 5, price: 10 },
  'Mana Elixir': { quantity: 3, price: 15 },
  'Invisibility Draft': { quantity: 2, price: 25 },
  'Fire Resistance': { quantity: 4, price: 20 },
};

let gold = 0;
let customersHelped = 0;
let potionsBrewed = 0;

for (let i = 0; i < 3; i++) {
  const customer = (prompt("A customer is here! Take their order? (yes/no)")  '').toLowerCase().trim();

  if (customer === 'yes') {
    const menu = Potions
      .map(p => ${p}: $${potionStock[p].price} (Stock: ${potionStock[p].quantity}))
      .join('\n');

    const order = (prompt(Which potion do you want?\n${menu})  '').trim();

    if (potionStock[order] && potionStock[order].quantity > 0) {
      potionStock[order].quantity--;
      gold += potionStock[order].price;
      alert(Sold 1 ${order}!);
      customersHelped++;
    } else if (order) {
      alert(`${order} is out of stock or not found!);
    } else {
      alert('No order entered.');
    }
  } else if (customer === 'no') {
    alert('No customer served.');
  } else {
    alert('Please answer yes or no.');
    i--; // این دور را تکرار کن
  }
}

// ---------- 4) Brewing Potions ----------
for (let i = 0; i < 3; i++) {
  const brew = (prompt("Do you want to brew a potion? (yes/no)")  '').toLowerCase().trim();

  if (brew === 'yes') {
    const potionName = (prompt('Which potion to brew?')  '').trim();
    const amount = Number(prompt('How many?'));

    if (potionStock[potionName] && Number.isFinite(amount) && amount > 0) {
      potionStock[potionName].quantity += amount;
      alert(`Brewed ${amount} ${potionName}(s)!);
      potionsBrewed += amount;
    } else {
      alert('Invalid potion name or amount.');
    }
  } else {
    break;
  }
}

let stockReport = '';
for (const p in potionStock) {
  stockReport += ${p}: ${potionStock[p].quantity}\n;
}

alert(End of Day Report:
Gold earned: ${gold}
Potions left:
${stockReport}
Great job, ${playerName}! You brewed ${potionsBrewed} potions and helped ${customersHelped} customers.);