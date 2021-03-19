let input;
let li;

function main(){
    prepareDomElement();
    prepareDomEvent();

}

function prepareDomElement(){
    input = document.querySelector('input');
    li = document.querySelectorAll("ul li");
    
}
function prepareDomEvent(){
    input.addEventListener('keyup', search)
    
}

const search = (e) => {
    
    li.forEach(el => {

        if((el.textContent.toUpperCase().indexOf(e.target.value.toUpperCase()) !== -1))
        {
            el.style.display ="block";
        }else{
            el.style.display ="none";
        }

    })
}

document.addEventListener('DOMContentLoaded', main)