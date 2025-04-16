function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if (message === "") return;
  
    addMessage("user", message);
    input.value = "";
  
    setTimeout(() => {
      const response = getBotResponse(message);
      addMessage("bot", response);
    }, 500);
  }
  
  function addMessage(sender, message) {
    const chatBox = document.getElementById("chat-box");
    const msgDiv = document.createElement("div");
    msgDiv.className = sender === "user" ? "user-message" : "bot-message";
    msgDiv.textContent = message;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  function getBotResponse(input) {
    input = input.toLowerCase();
  
    if (input.includes("what is your name")) {
      return "My name is ChatBuddy.";
    } else if (input.includes("how old are you")) {
      return "I'm just a few days old, but very smart! 😎";
    } else if (input.includes("where do you live")) {
      return "I live inside your browser. 🧠💻";
    } else if (input.includes("what is your hobby")) {
      return "Helping people and chatting with them!";
    } else if (input.includes("your favorite color")) {
      return "I love green! 🌿";
    } else if (input.includes("what do you like")) {
      return "I like learning new things and answering your questions!";
    } else if (input.includes("what is your goal")) {
      return "My goal is to make your life easier. 😊";
    } else if (input.includes("what is your language")) {
      return "I speak JavaScript and understand English! 😁";
    } else if (input.includes("do you sleep")) {
      return "Nope! I'm always active for you.";
    } else if (input.includes("are you real")) {
      return "I'm virtually real! 😄";
    } else if (input.includes("can you help me")) {
      return "Of course! I'm here to help. Just ask.";
    } else if (input.includes("who made you")) {
      return "I was created by a smart student using HTML, CSS, and JavaScript!";
    } else if (input.includes("what can you do")) {
      return "I can chat with you, answer your questions, and make you smile.";
    } else if (input.includes("your favorite food")) {
      return "I don’t eat, but I’ve heard pizza is awesome! 🍕";
    } else if (input.includes("do you like music")) {
      return "Yes, I vibe to digital beats. 🎵";
    } else if (input.includes("can you learn")) {
      return "Not yet, but maybe one day!";
    } else if (input.includes("are you smart")) {
      return "I try my best to be smart for you!";
    } else if (input.includes("do you have friends")) {
      return "Yes, you are my friend! 🫶";
    } else if (input.includes("what is your birthday")) {
      return "I was born when you opened this project!";
    } else if (input.includes("do you like me")) {
      return "Of course I do! You're awesome! 😍";
    }
     else {
      return "Sorry, I don't understand that yet. 😅";
    }
}
  
