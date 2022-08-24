"use strict";
const flights = [
  {
    time: "08:11",
    destination: "Toronto",
    flight: "OX 155",
    gate: "A 01",
    remarks: "On time",
  },
  {
    time: "10:15",
    destination: "Kyiv",
    flight: "OR 155",
    gate: "B 05",
    remarks: "On time",
  },
  {
    time: "12:00",
    destination: "Vilnius",
    flight: "OJ 034",
    gate: "C 03",
    remarks: "On time",
  },
  {
    time: "03:14",
    destination: "Amsterdam",
    flight: "OD 145",
    gate: "A 12",
    remarks: "Cancelled",
  },
  {
    time: "06:35",
    destination: "New York",
    flight: "AW 786",
    gate: "C 03",
    remarks: "Delayed",
  },
  {
    time: "11:11",
    destination: "Ottawa",
    flight: "OH 105",
    gate: "H 21",
    remarks: "Delayed",
  },
];

let hour = 15;
const destinations = [
  "Toronto",
  "Kyiv",
  "Vilnius",
  "Amsterdam",
  "New York",
  "Ottawa",
];
const remarks = ["On time", "Delayed", "Cancelled"];

const tableBodyElem = document.getElementById("table-body");

const populateTable = (items) => {
  for (const flight of items) {
    const tableRow = document.createElement("tr");

    for (const flightInfo in flight) {
      const tableCell = document.createElement("td");
      tableCell.classList.add("clearfix");
      tableCell.classList.add("cell");
      const word = Array.from(flight[flightInfo]);

      for (const [index, letter] of word.entries()) {
        const letterElement = document.createElement("div");

        setTimeout(() => {
          letterElement.classList.add("flip");
          letterElement.classList.add("letter");
          letterElement.textContent = letter;
          tableCell.append(letterElement);
        }, 100 * index);
      }
      tableRow.append(tableCell);
    }

    tableBodyElem.append(tableRow);
  }
};

function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const randomLetter = alphabet.charAt(
    Math.floor(Math.random() * alphabet.length)
  );
  return randomLetter;
}

function generateRandomNumber(maxNumber) {
  const numbers = "0123456789";

  if (maxNumber) {
    const newNumbers = numbers.slice(0, maxNumber + 1);
    return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length));
  }

  const randomNumber = numbers.charAt(
    Math.floor(Math.random() * numbers.length)
  );
  return randomNumber;
}

function generateTime() {
  let displayHour = hour;

  if (hour < 24) {
    hour++;
  }
  if (hour > 24) {
    hour = 1;
    displayHour = hour;
  }
  if (hour < 10) {
    displayHour = "0" + hour;
  }

  const time =
    displayHour + ":" + generateRandomNumber(5) + generateRandomNumber();
  return time;
}

function shuffleUp() {
  flights.shift();
  flights.push({
    time: generateTime(),
    destination: destinations[Math.floor(Math.random() * destinations.length)],
    flight:
      generateRandomLetter() +
      generateRandomLetter() +
      generateRandomLetter() +
      " " +
      generateRandomNumber() +
      generateRandomNumber(),
    gate:
      generateRandomLetter() +
      " " +
      generateRandomNumber() +
      generateRandomLetter(),
    remarks: remarks[Math.floor(Math.random() * remarks.length)],
  });
  tableBodyElem.textContent = "";
  populateTable(flights);
}

// setInterval(shuffleUp, 5000);

populateTable(flights);
