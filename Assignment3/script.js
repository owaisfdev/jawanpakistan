// Data (brand → models)
const mobiles = {
  Samsung: ["Galaxy S23", "Galaxy A54", "Galaxy Note 20"],
  Infinix: ["Hot 12", "Zero X", "Smart 6"],
  Iphone: ["iPhone 14", "iPhone 13", "iPhone 12"],
  Oppo: ["Reno 8", "A96", "F21 Pro"]
};

const brandSelect = document.getElementById("brandselect");
const modelSelect = document.getElementById("modelselect");
const result = document.getElementById("result");

// Brand change hone par models load karo
brandSelect.addEventListener("change", function () {
  const brand = brandSelect.value;

  // Reset model dropdown
  modelSelect.innerHTML = "<option>Select Model</option>";

  if (mobiles[brand]) {
    mobiles[brand].forEach(function (model) {
      let opt = document.createElement("option");
      opt.textContent = model;
      modelSelect.appendChild(opt);
    });
  }
});

// Search button click
document.getElementById("searchBtn").addEventListener("click", function () {
  const brand = brandSelect.value;
  const model = modelSelect.value;

  if (brand !== "Select Brand" && model !== "Select Model") {
    result.textContent = "You selected: " + brand + " - " + model;
  } else {
    result.textContent = "Please select both brand and model!";
  }
});
