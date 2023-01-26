/*
* File: app.js
* Author: Zsiga Gergely
* Copyright: 2023, Zsig Gergely
* Group: Szoft I-2-E
* Date: 2023-01-26
* Github: https://github.com/zsi-ga/
* Licenc: GNU GPL
*/
const asideElem = document.querySelector("#aside");
const bsideElem = document.querySelector("#bside");
const csideElem = document.querySelector("#cside");
const dsideElem = document.querySelector("#dside");

const calcButton = document.querySelector("#calcButton");

const areaElem = document.querySelector("#area");

calcButton.addEventListener('click', () => {
    //console.log('mükdik')
    //let area = calcArea(13, 4, 7, 4)
    let aside = Number(asideElem.value);
    let bside = Number(bsideElem.value);
    let cside = Number(csideElem.value);    
    let dside = Number(dsideElem.value);

    let area =calcArea(aside, bside, cside, dside);
    areaElem.value = area;

    //console.log(area)
});

function calcArea(a, b, c, d){
    let terulet = ((a + c)/(4*(a - c))) 
    * Math.sqrt(
        (a+b-c+d)*
        (a-b-c+d)*
        (a+b-c-d)*
        (-a+b+c+d)
    )
    return terulet;
}
