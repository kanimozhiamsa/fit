// Predefined food calorie data
const foodCalories = {
  apple: 95,
  banana: 105,
  bread: 80,
  rice: 206,
  egg: 78,
  chicken: 165,
  orange: 62,
  milk: 103,
  cheese: 113,
  pizza: 285,
  burger: 354,
  salad: 150,
  pasta: 221,
  potato: 163,
  chocolate: 208
};

let totalCalories = 0;

function addFood() {
  const input = document.getElementById("foodInput");
  const foodName = input.value.trim().toLowerCase();
  
  if (!foodName) return;

  const calories = foodCalories[foodName];

  if (calories === undefined) {
    alert("Food not found in database.");
    return;
  }

  // Create food item in the list
  const list = document.getElementById("foodList");
  const foodItem = document.createElement("div");
  foodItem.className = "food-item";
  foodItem.innerHTML = `<span>${capitalize(foodName)}</span><span>${calories} kcal</span>`;
  list.appendChild(foodItem);

  // Update total
  totalCalories += calories;
  document.getElementById("totalCalories").innerText = totalCalories;

  // Clear input
  input.value = "";
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}