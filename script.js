require([
  // programmatic
  "dojo/dom",
  "dojo/on",
  // declarative
  "dojo/parser",
  "dijit/form/TextBox",
  "dojo/domReady!",
], function (dom, on) {
  var inputField = dom.byId("input");

  // when inside the input field an enter key is pressed
  // save the input field value in a variable and then reset it
  // and a function is run with the input value passed as param
  on(inputField, "keydown", function (e) {
    if (e.keyCode === 13) {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});

function output(input) {}
