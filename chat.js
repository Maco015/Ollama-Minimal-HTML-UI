document
  .getElementById("question-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const ipAddress = document.getElementById("ip-address").value;
    const modelName = document.getElementById("model-name").value;
    const prompt = document.querySelector("#question-form textarea").value;
    const responseContainer = document.getElementById("current-response");
    const errorContainer = document.getElementById("error-container");
    const submitButton = document.getElementById("submit-button");

    errorContainer.innerText = null;
    submitButton.disabled = true;

    // The true, unmodified response from the AI
    let answer = "";

    window.addQuestion(prompt);

    try {
      // Simulate a network request to an external API
      const res = await fetch(`${ipAddress}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: modelName,
          messages: window.chat_history,
        }),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      const reader = res.body.getReader();

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        const decoder = new TextDecoder("utf-8");
        const chunk = decoder.decode(value);

        try {
          const jsonChunk = JSON.parse(chunk);
          answer += jsonChunk.message.content;
        } catch (e) {}

        responseContainer.innerHTML = markdown.render(answer);
        console.log(answer);
      }
    } catch (error) {
      console.error(error);
      errorContainer.innerText = "Error while generating: " + error?.message;
    } finally {
      submitButton.disabled = false;
      responseContainer.innerHTML = null;
      window.addResponse(answer);
    }
  });
