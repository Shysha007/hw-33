'use strict';

(function () {

    const form  = document.getElementById('form-task');


    form.addEventListener('submit', event => {
        event.preventDefault();
        const obj = {};
        const inputs = event.target.querySelectorAll('input');

        inputs.forEach(input => {
            obj[input.name] = input.value;
        })

        createElement(obj);
        event.target.reset();
    })
    
    document.querySelector('#form-task').addEventListener('keydown',(e) => {
        e.target.classList.remove('error');
    })
    document.querySelector('#form-task').addEventListener('focusout',({target}) => {
        if (target.value.trim() === '') {
            target.classList.add('error');
        }
    })
   
    function createElement(elementData) {
        const div = document.createElement('div');
        div.classList.add('card', `mb-3`);
        const divNameOne = document.createElement('div');
        const divNameTwo = document.createElement('div');

        divNameOne.innerText = elementData.FirstName
        divNameTwo.innerText = elementData.LastName

        document.querySelector('.card-content').append(div);
        div.append(divNameOne);
        div.append(divNameTwo);
    }
  
})()