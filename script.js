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

document
  .getElementById("question-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const ipAddress = document.getElementById("ip-address").value;
    const modelName = document.getElementById("model-name").value;
    const prompt = document.querySelector("#question-form textarea").value;
    const responseContainer = document.getElementById("response-container");

    // Save values to localStorage
    localStorage.setItem("ipAddress", ipAddress);
    localStorage.setItem("modelName", modelName);

    try {
      // Simulate a network request to an external API
      const res = await fetch(`${ipAddress}/api/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: modelName, prompt }),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      const reader = res.body.getReader();
      let answer = "";

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        const decoder = new TextDecoder("utf-8");
        const chunk = decoder.decode(value);

        const jsonChunk = JSON.parse(chunk);
        answer += jsonChunk.response;

        responseContainer.innerHTML = answer;
      }
    } catch (error) {
      console.error(error);
      responseContainer.innerText = "Error retrieving the answer.";
    }
  });
