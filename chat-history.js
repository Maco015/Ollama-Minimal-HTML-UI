/**
 * Format:
 * [
 *      {
 *          "role": "user",
 *          "content": "hello"
 *      },
 *      {
 *          "role": "assistant",
 *          "content": "Hi there!"
 *      }
 * ]
 */
window.chat_history = [];
const historyContainer = document.getElementById("history");

window.addQuestion = (itemText) => {
  window.chat_history.push(itemText);
  // Step 2: Create a new div element
  const newDiv = document.createElement("div");
  newDiv.classList.add("history", "user");

  // Step 3: Set the inner text of the new div
  newDiv.innerHTML = `<div>User: ${markdown.render(itemText)}</div>`;

  // Step 4: Append the new div to the target div
  historyContainer.appendChild(newDiv);
};

window.addResponse = (itemText) => {
  window.chat_history.push(itemText);
  // Step 2: Create a new div element
  const newDiv = document.createElement("div");
  newDiv.classList.add("history", "assistant");

  // Step 3: Set the inner text of the new div
  newDiv.innerHTML = `<div>Assistant: ${markdown.render(itemText)}</div>`;

  // Step 4: Append the new div to the target div
  historyContainer.appendChild(newDiv);
};
