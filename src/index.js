import "./styles/reset.scss";
import "./styles/button-background-animations.scss";
import "./styles/flip-card-animations.scss";
import "./styles/tile-tilt-animations.scss";
import "./styles/image-overlay-animations.scss";
import "./styles/text-animations.scss";
import "./styles/index.scss";

window.addEventListener("DOMContentLoaded", () => {

    //tilt animations
    let tileContainer = document.querySelector('.tile-tilt-container');
    let tileTiltCard = document.querySelector('.tile-tilt');

    // function tilt(event){

    //     let offsetXReset = event.offsetX - 425;
    //     let offsetYReset = event.offsetY - 200;
    //     let xgap = ((offsetXReset)/ tileContainer.offsetWidth);
    //     let ygap = ((offsetYReset)/ tileContainer.offsetHeight);

    //     if (offsetXReset >= 0 && offsetYReset <= 0){
    //         tileTiltCard.style.transform = `rotateX(${-xgap}deg) rotateY(${ygap}deg)`;
    //     } else if (offsetXReset <= 0 && offsetYReset <= 0){
    //         tileTiltCard.style.transform = `rotateX(${xgap}deg) rotateY(${-ygap}deg)`;
    //     } else if (offsetXReset <= 0 && offsetYReset >= 0){
    //         tileTiltCard.style.transform = `rotateX(${-xgap}deg) rotateY(${ygap}deg)`;
    //     } else if (offsetXReset >= 0 && offsetYReset >= 0){
    //         tileTiltCard.style.transform = `rotateX(${xgap}deg) rotateY(${-ygap}deg)`;
    //     }


    // }
    // tileContainer.addEventListener('mousemove', tilt);

    //img spotlight cursor animation

    // let spotlightImg = document.querySelector('.spotlight-img');


    // function spotlight(event){
        
    // }

    // spotlightImg.addEventListener('mousemove', spotlight);

    // let rotation = document.getElementsByClassName('rotate-word');
    // for(let i = 0; i < rotation.length; i++){
    //     rotation[i].classList.add('rotate-word-animation')
    // }


    //typewriter text animation
    //Created with the help of Traversy Media: https://www.youtube.com/watch?v=POX3dT-pB4E
    let testing = document.getElementById('testing');
    let words = ["World!", "Planet!", "Globe!", "Earth!", "Galaxy!", "Universe!"];
    let wordsIndex = 0;
    let wordIdx = 0;
    let insertStr = "";
    let removeWord = false;
    let timer = 500;

    function typewriter(){
        let actualWordIdx = wordsIndex % words.length;

        if (removeWord){
            timer = 100;
            insertStr = insertStr.slice(0, insertStr.length - 1);
            if(insertStr.length === 0){
                removeWord = false;
                timer = 500;
            }
        }
        else{
            if (insertStr.length === words[actualWordIdx].length){
                wordsIndex += 1;
                wordIdx = 0;
                removeWord = true;
                timer = 2000;
            } else {
                insertStr += words[actualWordIdx][wordIdx];
                wordIdx += 1;
                timer = 500;
            }
        }     

        testing.innerHTML = insertStr;

        setTimeout(() => typewriter(), timer);
    }

    typewriter();

});

