const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {

    let eventValue    =   event.currentTarget.value.trim();

    console.log(eventValue);

    if (eventValue=='') {
        output.textContent = 'Anonymous';
    } else {
        output.textContent = eventValue;
    }

});