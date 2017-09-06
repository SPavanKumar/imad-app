
var button = document.getElementById('counter');


    
button.onclick = function () {
    
    //create a request variable
    
    var request = new XMLHttpRequest();
    
    //capture a request and store it in a variable.
    request.onreadystatechange = function () {
      if(request.readyState === XMLHttpRequest.DONE) {
         // Take some action
         if(request.status===200) {
             var counter = request.responseText;
             var span = document.getElementById('count');
             span.innerHTML = counter.toString();
         }
      }
      
    };
     
     //make the request
     request.open('GET', 'http://kumarpavan284.imad.hasura-app.io/counter',true);
     request.send(null); 
};

// Submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('sub_bt');
submit.onclick = function () {
 
  var names = ['name1', 'name2', 'name3'];
  var list = '';
  for (var i=0; i<name.length;i++) {
      list+= '<li>'+names[i] + '</li>';
  }
   var ul=document.getElementById('namelist');
   ul.innerHTML = list;
};