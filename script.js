require([
  // programmatic
  "dojo/dom",
  "dojo/on",
  "dojo/dom-class",
  "dojo/dom-construct",
  "dojo/domReady!",
], function (dom, on, domClass, domConstruct) {
  var popup = dom.byId("chat-popup");
  var chatBtn = dom.byId("chat-btn");
  var chatArea = dom.byId("chat-area");
  var inputElm = dom.byId("input");

  // chat button toggler
  on(chatBtn, "click", function () {
    domClass.toggle(popup, "show");

    // focus on input field when chat box is shown
    if (domClass.contains(popup, "show")) {
      inputElm.focus();
    }
  });

  // hide chatbot if clicked outside it's box or by chatbot button
  on(document, "click", function (e) {
    if (!popup.contains(e.target) && !chatBtn.contains(e.target)) {
      domClass.remove(popup, "show");
    }
  });

  // send msg by pressing enter then pass it to func as long as it's not empty
  on(inputElm, "keydown", function (e) {
    if (e.keyCode === 13) {
      if (inputElm.value !== "") {
        let input = inputElm.value;
        inputElm.value = "";
        addChatEntry(input);
      }
    }
  });

  // a func for whenever a new chat entry is added
  function addChatEntry(input) {
    // creating a div with the input text inside it as a user response
    // then palcing that text at the last child of the messages container
    var userDiv = domConstruct.toDom(
      `<div class="out-msg">
      <span class="my-msg">${input}</span>
      </div>`
    );
    domConstruct.place(userDiv, chatArea, "last");

    // creating a div with the input text inside it as a bot response
    // then palcing that text at the last child of the messages container
    var botDiv = domConstruct.toDom(
      `<div class="income-msg">
      <span class="msg">Echo: ${input}</span>
      </div>`
    );
    domConstruct.place(botDiv, chatArea, "last");

    // this code will keep the scroll bar down when new chats are entered
    chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  }
});
