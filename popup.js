const textarea = document.getElementById("notes");
const clearBtn = document.getElementById("clear");

// Load saved text
browser.storage.local.get("savedText").then((res) => {
  textarea.value = res.savedText || "";
});

// Save on every change
textarea.addEventListener("input", () => {
  browser.storage.local.set({ savedText: textarea.value });
});

// Clear button
clearBtn.addEventListener("click", () => {
  textarea.value = "";
  browser.storage.local.set({ savedText: "" });
});
