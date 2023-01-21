const form = document.getElementById("form");
form.addEventListener("submit", getFormValue);
function getFormValue(event) {
  event.preventDefault();
  let BPr = document.getElementById("first").value;
    let VarAktuv = document.getElementById("second").value;
    let HusVur = document.getElementById("third").value;
    let VlasKap = document.getElementById("fourth").value;
    let KorZob = document.getElementById("fifth").value;
    let DovgoZob = document.getElementById("sixth").value;
    let NerozPr = document.getElementById("seventh").value;
    let Za = 0;
   
    let ans = "";
     

    Za = 1.2 * (VlasKap / VarAktuv) + 1.4 * (NerozPr / VarAktuv) + 3.3 * (BPr / VarAktuv) + 0.99 * (HusVur / VarAktuv) + 0.6 * (VlasKap / (KorZob + DovgoZob));

    if (Za > 3.0) {
        ans = 'отже, ймовірність банкрутства дуже низька.';
    }
    if (2.61 < Za & Za < 2.99) {
        ans = 'отже, ймовірність банкрутства ймовірна.';
    }
    if (1.81 < Za & Za < 2.60) {
        ans = 'отже, ймовірність банкрутства висока.';
    }
    if (Za < 1.80) {
        ans = 'отже, ймовірність банкрутства дуже висока.';
    }
  
document.getElementById("Za").innerHTML = Za.toFixed(3);
  document.getElementById("ans").innerHTML = ans;

    
    
    
    
    
    
    
    
    
    
    
    
    
 
}