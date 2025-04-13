document.addEventListener("DOMContentLoaded", () => {
  // Load saved values from localStorage on page load
  const ipAddressInput = document.getElementById("ip-address");
  const modelNameInput = document.getElementById("model-name");

  const savedIpAddress = localStorage.getItem("ipAddress");
  const savedModelName = localStorage.getItem("modelName");

  if (savedIpAddress) {
    ipAddressInput.value = savedIpAddress;
  }

  if (savedModelName) {
    modelNameInput.value = savedModelName;
  }
});
