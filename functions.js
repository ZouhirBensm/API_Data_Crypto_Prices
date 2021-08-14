function function1(tr, element,CURconstant){
    tr.innerHTML = '<td>' + element.id.charAt(0).toUpperCase()+element.id.slice(1) 
    + '</td><td>' + new Intl.NumberFormat('en-US', {style:'currency', currency:'USD'}).format(element.current_price*CURconstant)
    + '</td><td> <img src='+element.image+'/> </td>';
    table = document.getElementById('tableUSD');
    tableUSD.appendChild(tr);
}

function function2(tr, element,CURconstant){
    tr.innerHTML = '<td>' + element.id.charAt(0).toUpperCase()+element.id.slice(1) 
    + '</td><td>CA' + new Intl.NumberFormat('en-CA', {style:'currency', currency:'CAD'}).format(element.current_price*CURconstant)
    + '</td><td> <img src='+element.image+'/> </td>';
    table = document.getElementById('tableCAD');
    tableCAD.appendChild(tr);
}

function function3(tr, element,CURconstant){
    tr.innerHTML = '<td>' + element.id.charAt(0).toUpperCase()+element.id.slice(1) 
    + '</td><td>' + new Intl.NumberFormat('de-GE', {style:'currency', currency:'EUR'}).format(element.current_price*CURconstant)
    + '</td><td> <img src='+element.image+'/> </td>';
    table = document.getElementById('tableEUR');
    tableEUR.appendChild(tr);
}

function function4(tr, element, CURconstant, property){
    tr.innerHTML = '<td>' + element.id.charAt(0).toUpperCase()+element.id.slice(1) 
    + '</td><td>' + new Intl.NumberFormat('en-US').format(element.current_price*CURconstant) + " " + property 
    + '</td><td> <img src='+element.image+'/> </td>';
    table = document.getElementById('tableDZD');
    tableDZD.appendChild(tr);
}

function function5(tr, element,CURconstant, property){
    tr.innerHTML = '<td>' + element.id.charAt(0).toUpperCase()+element.id.slice(1) 
    + '</td><td>' + new Intl.NumberFormat('en-US').format(element.current_price*CURconstant) + " " + property 
    + '</td><td> <img src='+element.image+'/> </td>';
    table = document.getElementById('tableTND');
    tableTND.appendChild(tr);
}

function function6(tr, element,CURconstant, property){
    tr.innerHTML = '<td>' + element.id.charAt(0).toUpperCase()+element.id.slice(1) 
    + '</td><td>' + new Intl.NumberFormat('en-US').format(element.current_price*CURconstant) + " " + property 
    + '</td><td> <img src='+element.image+'/> </td>';
    table = document.getElementById('tableMAD');
    tableMAD.appendChild(tr);
}
