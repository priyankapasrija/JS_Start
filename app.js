const productNameInoutElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');
const maxAllowedChars = productNameInoutElement.maxLength;


function updateRemainingCharacters(event) {
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;

    const remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;

    if (remainingCharacters === 0){
        remainingCharsElement.classList.add('error');
        productNameInoutElement.classList.add('error');
    } else if (remainingCharacters <= 10) {
        remainingCharsElement.classList.add('warning');
        productNameInoutElement.classList.add('warning');
        remainingCharsElement.classList.remove('error');
        productNameInoutElement.classList.remove('error');
    } else {
        remainingCharsElement.classList.remove('warning');
        productNameInoutElement.classList.remove('warning');
    }
}

productNameInoutElement.addEventListener('input', updateRemainingCharacters)