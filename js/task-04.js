const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", event => {
    event.preventDefault();

    const inputElement = [registerForm.elements.email, registerForm.elements.password];
    let dataObject = {};

    inputElement.forEach(elementsInput=>{
        if (elementsInput.value.trim()!==''){
            dataObject[elementsInput.name]  =  elementsInput.value.trim(); 
        } else {
            alert('All form fields must be filled in');
        }
    })

    registerForm.reset();

    console.log(dataObject);

});


