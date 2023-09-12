let secondsHand = document.querySelector('.sec_hand');
let minuteHand = document.querySelector('.min_hand');
let hourHand = document.querySelector('.hour_hand');

setInterval(function setDate(){
    const date=new Date();
    const second= date.getSeconds();
    const secondDegree = (second*6)+90;
secondsHand.style.transform = `rotate(${secondDegree}deg)`;
const minute= date.getMinutes();
    const minuteDegree = (minute*6)+90;
minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
const hour= date.getHours();
    const hourDegree = ((hour/12)*360)+90;
hourHand.style.transform = `rotate(${hourDegree}deg)`;

},1000);
