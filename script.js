// ? DOM Selectors
let colorOne = document.querySelector("#color-one");
let colorTwo = document.querySelector("#color-two");
let button = document.querySelector("#btn");
let body =  document.querySelector("body");
let rgbaValue = document.querySelector(".rgba-value")


// !Arrow Functions!!
const setGradient = () => {
    //create function to set background using color input values!!
    body.style.background = "linear-gradient(to right, "
                            + `${colorOne.value}`
                            + ", "
                            + `${colorTwo.value}`
                            + ")";

    rgbaValue.textContent = `${body.style.background};`;
}

const returnRandomColor = () => {
    //function to generate random background color!!
    let letter = '0123456789ABCDEF';
    let color = '#';

     for (let i=0; i<6; i++) {
         color += letter[Math.floor(Math.random() * 16)];
     }
     console.log(color);
     return color;
}

const displayRandomColor = () => {
    //function to initialize random value to color input!!
    colorOne[`value`] = returnRandomColor();
    colorTwo[`value`] = returnRandomColor();

    //call function to set random background on click!!
    setGradient();
}


//call setGradient() to display rgba value!!
setGradient();


// !Event Listeners!!
//instead of using colorOne & colorTwo!! //can use body.addEL to get the same result!!
// body.addEventListener('click', setGradient);

colorOne.addEventListener('input', setGradient);
colorTwo.addEventListener('input', setGradient);
button.addEventListener('click', displayRandomColor);