document.getElementById('USDboard').hidden = false;
document.getElementById('CADboard').hidden = true;
document.getElementById('EURboard').hidden = true;


document.getElementById('USD').onclick = function(){
    document.getElementById('USDboard').hidden = false;
    document.getElementById('CADboard').hidden = true;
    document.getElementById('EURboard').hidden = true;
};

document.getElementById('CAD').onclick = function(){
    document.getElementById('USDboard').hidden = true;
    document.getElementById('CADboard').hidden = false;
    document.getElementById('EURboard').hidden = true;
};

document.getElementById('EUR').onclick = function(){
    document.getElementById('USDboard').hidden = true;
    document.getElementById('CADboard').hidden = true;
    document.getElementById('EURboard').hidden = false;
};

document.getElementById('DZDboard').hidden = false;
document.getElementById('TNDboard').hidden = true;
document.getElementById('MADboard').hidden = true;


document.getElementById('DZD').onclick = function(){
    document.getElementById('DZDboard').hidden = false;
    document.getElementById('TNDboard').hidden = true;
    document.getElementById('MADboard').hidden = true;
};

document.getElementById('TND').onclick = function(){
    document.getElementById('DZDboard').hidden = true;
    document.getElementById('TNDboard').hidden = false;
    document.getElementById('MADboard').hidden = true;
};

document.getElementById('MAD').onclick = function(){
    document.getElementById('DZDboard').hidden = true;
    document.getElementById('TNDboard').hidden = true;
    document.getElementById('MADboard').hidden = false;
};