const form = document.getElementById("form");
form.addEventListener("submit", getFormValue);
function getFormValue(event) {
    event.preventDefault();
    let CF = document.getElementById("first").value;
    let Zob = document.getElementById("second").value;
    let VB = document.getElementById("third").value;
    let ZagPr = document.getElementById("fourth").value;
    let PrReal = document.getElementById("fifth").value;
    let Vuryh = document.getElementById("sixth").value;
    let VurZap = document.getElementById("seventh").value;
    let Z = 0;
    let ans = "";
     

    Z = 1.5 * (CF / Zob) + 0.08 * (VB / Zob) + 10 * (ZagPr / VB) + 5 * (PrReal / Vuryh) + 0.3 * (VurZap / Vuryh) + 0.1 * (Vuryh / VB);

    if (Z > 2) {
        ans = 'отже, підприємству банкрутство не загрожує.';
    }
    if (1 < Z & Z < 2) {
        ans = 'отже, фінансовій стійкості підприємства завдано шкоди, але якщо вчасно вжити антикризових заходів, загрози банкрутства не буде.';
    }
    if (0 < Z & Z < 1) {
        ans = 'отже, існує загроза банкрутства за відсутності антикризових заходів.';
    }
    if (Z < 0) {
        ans = 'отже, підприємство майже банкрут.';
    }
  
    document.getElementById("Z").innerHTML = Z.toFixed(3);
    document.getElementById("ans").innerHTML = ans;
}