const messageInput = document.getElementById("message");
const charCounter = document.getElementById("charCount");
const Warning = document.getElementById("Warning");

const MAX_CHARS = 200;
messageInput.addEventListener("input", () => {
    let typedLength = messageInput.value.length;

    if (typedLength >= MAX_CHARS) {
        messageInput.value = messageInput.value.substring(0, MAX_CHARS);
        typedLength = MAX_CHARS;
        Warning.classList.remove("hidden");
    } else {
        Warning.classList.add("hidden");
    }

    charCounter.textContent = `${typedLength} / ${MAX_CHARS} characters`;
});
