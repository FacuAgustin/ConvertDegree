document.getElementById('output').style.visibility='hidden';
document.getElementById('lbsInput').addEventListener('input',function(e){
    document.getElementById('output').style.visibility='visible';
    let lbs=e.target.value;
    document.getElementById('kelvinOutput').innerHTML=(lbs*18)+32;
    document.getElementById('fhOutput').innerHTML=lbs+273.15;
    
});