"use strict";
let merchDetails;

fetch("assets/merch.json")
  .then((response) => response.json())
  .then((data) => {
    for (const merch of data.merch) {
        document.getElementById("merch").innerText = merch.details.text;
    }
  });

