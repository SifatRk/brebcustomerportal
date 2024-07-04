function login() {
  const meterNumber = document.getElementById('meterNumber').value;

  if (!meterNumber) {
    alert('Please enter a Meter number.');
    return;
  }

  // Redirect to the data display page with the customer number as a query parameter
  window.location.href = `customerData.html?meterNumber=${meterNumber}`;
  
}

