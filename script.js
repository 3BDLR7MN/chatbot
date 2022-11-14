require([
  // programmatic
  "dojo/dom",
  "dojo/on",
  "dojo/dom-construct",
  // declarative
  "dojo/parser",
  "dijit/form/TextBox",
  "dojo/domReady!",
], function (dom, on, domConstruct) {
  var messagesContainer = dom.byId("messages");
  var inputField = dom.byId("input");

  // when inside the input field an enter key is pressed
  // save the input field value in a variable and then reset it
  // and a function is run with the input value passed as param
  on(inputField, "keydown", function (e) {
    if (e.keyCode === 13) {
      let input = inputField.value;
      inputField.value = "";
      addChatEntry(input);
    }
  });

  function addChatEntry(input) {
    // creating a div with the input text inside it as a user response
    // then palcing that text at the last child of the messages container
    var userDiv = domConstruct.toDom(
      `<div id="user" class="user response">${input}</div>`
    );
    domConstruct.place(userDiv, messagesContainer, "last");

    // creating a div with the input text inside it as a bot response
    // then palcing that text at the last child of the messages container
    var botDiv = domConstruct.toDom(
      `<div id="bot" class="bot response">${input}</div>`
    );
    domConstruct.place(botDiv, messagesContainer, "last");

    // let userDiv = document.createElement("div");
    // userDiv.id = "user";
    // userDiv.className = "user response";
    // userDiv.innerHTML = `${input}`;
    // messagesContainer.appendChild(userDiv);

    // let botDiv = document.createElement("div");
    // let botText = document.createElement("span");
    // botDiv.id = "bot";
    // botDiv.className = "bot response";
    // botText.innerText = "Typing...";
    // botDiv.appendChild(botText);
    // messagesContainer.appendChild(botDiv);

    // setTimeout(() => {
    //   botText.innerText = `${product}`;
    // }, 2000);
  }
});
