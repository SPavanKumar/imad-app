console.log('Loaded!');
var button = document.getElementById('counter');

    
button.onclick = function () {
    
     var counter = 0; 
     counter = counter + 1;
     var spa = document.getElementById('count');
     spa.innerHTML = counter.toString();
};