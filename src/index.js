import "./styles/reset.scss";
import "./styles/index.scss";
import "./styles/button-background-animations.scss";
import "./styles/flip-card-animations.scss";
import "./styles/tile-tilt-animations.scss";

window.addEventListener("DOMContentLoaded", () => {

    //tilt animations
    let tileContainer = document.querySelector('.tile-tilt-container');
    let tileTiltCard = document.querySelector('.tile-tilt');

    function tilt(event){
        console.log(event);
        // console.log(event.screenX + "    " + event.screenY);
        // console.log(tileContainer.offsetWidth);
        // console.log(tileContainer.offsetHeight);
        // console.log(this, event.target);
        // const gap = 80;
        let xgap = (event.screenX / tileContainer.offsetWidth/3);
        let ygap = (-event.screenY / tileContainer.offsetHeight/3);

        // let xgap = (event.momementX);
        // let ygap = (event.movementY);
        tileTiltCard.style.transform = `rotateX(${xgap}deg) rotateY(${ygap}deg)`;
    }
    tileContainer.addEventListener('mousemove', tilt);
});
