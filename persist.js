document.addEventListener("DOMContentLoaded", () => {
  // Load saved values from localStorage on page load
  const ipAddressInput = document.getElementById("ip-address");
  const modelNameInput = document.getElementById("model-name");
  const chatInput = document.getElementById("user-chat");

  const savedIpAddress = localStorage.getItem("ipAddress");
  const savedModelName = localStorage.getItem("modelName");
  const savedChatInput = localStorage.getItem("user-chat");

  if (savedIpAddress) {
    ipAddressInput.value = savedIpAddress;
  }

  if (savedModelName) {
    modelNameInput.value = savedModelName;
  }

  if (savedChatInput) {
    chatInput.value = savedChatInput;
  }
});

document
  .getElementById("question-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const ipAddress = document.getElementById("ip-address").value;
    const modelName = document.getElementById("model-name").value;
    const prompt = document.querySelector("#question-form textarea").value;

    // Save values to localStorage
    localStorage.setItem("ipAddress", ipAddress);
    localStorage.setItem("modelName", modelName);
    localStorage.setItem("user-chat", prompt);
  });
