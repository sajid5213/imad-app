var button = document.getElementById('counter');
var counter = 0;

button.onclick = function (){
    
    var request = new XMLHttpRequest();
    request.onreddystatechange = function(){
      if(request.readyState === XMLHttpRequest.Done){
          
          if(request.status === 200){
       var counter = request.responseText;
       var span =document.getElementById('count');
       
   span.innerHTML = counter.toString();     
      }
      }
    };
   request.open('Get',"http://sajid5213.imad.hasura-app.io/counter",true);
   request.send(null);
   
};