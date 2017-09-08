
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

var submit = document.getElementById('sub_bt');
submit.onclick = function () {
      //create a request variable
    
    var request = new XMLHttpRequest();
    
    //capture a request and store it in a variable.
    request.onreadystatechange = function () {
      if(request.readyState === XMLHttpRequest.DONE) {
         // Take some action
         if(request.status===200) {
              var names = request.responseText;
              names = JSON.parse(names);
                var list = '';
                for (var i=0; i<names.length;i++) {
                 list+= '<li>'+names[i] + '</li>';
                 }
   var ul=document.getElementById('namelist');
   ul.innerHTML = list;
         }  
      }
      
    };
     
     //make the request
     var nameInput = document.getElementById('name');
     var name = nameInput.value;
     request.open('GET', 'http://kumarpavan284.imad.hasura-app.io/submit-name?name='+ name,true);
     request.send(null); 
    
    
    // Project name

var psubmit = document.getElementById('s_t');
psubmit.onclick = function () {
      //create a request variable
    
    var request = new XMLHttpRequest();
    
    //capture a request and store it in a variable.
    request.onreadystatechange = function () {
      if(request.readyState === XMLHttpRequest.DONE) {
         // Take some action
         if(request.status===200) {
              var pnames = request.responseText;
              pnames = JSON.parse(pnames);
                var plist = '';
                for (var i=0; i<pnames.length;i++) {
                 plist+= '<li>'+pnames[i] + '</li>';
                 }
   var ul=document.getElementById('pnamelist');
   ul.innerHTML = plist;
         }  
      }
      
    };
     
     //make the request
     var pnameInput = document.getElementById('pname');
     var pname = pnameInput.value;
     request.open('GET', 'http://kumarpavan284.imad.hasura-app.io/project-name?pname='+ pname,true);
     request.send(null); 

 
 
};