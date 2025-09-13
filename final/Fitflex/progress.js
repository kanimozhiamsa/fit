// Initial empty data
let labels = [];
let data = [];

// Get chart element
const ctx = document.getElementById("progressChart").getContext("2d");

// Create chart
const progressChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: labels,
    datasets: [{
      label: "Workout Minutes",
      data: data,
      borderColor: "blue",
      backgroundColor: "rgba(0,0,255,0.2)",
      borderWidth: 2,
      tension: 0.3,
      fill: true
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Handle form submission
document.getElementById("progressForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const date = document.getElementById("date").value;
  const value = document.getElementById("value").value;

  if (date && value) {
    labels.push(date);
    data.push(value);

    progressChart.update();

    // Clear form
    document.getElementById("progressForm").reset();
  }
});
