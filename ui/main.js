var butto = document.getElementById('counter');

    
butto.onclick = function () {
    
     var counter = 0; 
     counter = counter + 1;
     var spa = document.getElementById('count');
     spa.innerHTML = counter.toString();
};