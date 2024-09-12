// for adjectives and save them in a array then show it
let arr = [];
const maxClicks = 6;
const appendValue = (element) => {
    const text = element.textContent.trim(); 
    const index = arr.indexOf(text);
    if (index !== -1) {
        arr.splice(index, 1);
        element.style.backgroundColor = ""; 
    } else {
        if (arr.length < maxClicks) {
            arr.push(text); 
            element.style.backgroundColor = "#22223b"; 
        }else{
            alert('You can choose only 6 or fewer items!'); 

        }
    }
    console.log(arr);
    return arr;
};
let inputField = document.querySelector("#name");
let section = document.querySelector("#section2");
let button = document.querySelector("#button")
button.addEventListener("click", ()=>{
    let newDiv = document.createElement('div');
   if(inputField.value === ''){
       newDiv.textContent = `Enter the name`;
   }else{
       newDiv.textContent = `${inputField.value} thinks : { ${arr} }`;
       section.appendChild(newDiv);
       inputField = '';
   }
});

