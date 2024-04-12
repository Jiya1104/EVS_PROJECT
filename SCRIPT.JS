document.getElementById("locationForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const location = document.getElementById("location").value;
  fetchResult(location);
});

function fetchResult(location) {
  fetch('/predict', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ location: location })
  })
  .then(response => response.json())
  .then(data => {
      document.getElementById("result").innerText = data.result;
  })
  .catch(error => {
      console.error('Error fetching data:', error);
      document.getElementById("result").innerText = "Error fetching data. Please try again.";
  });
}
