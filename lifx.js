var mybutton = document.getElementById("mybutton");

function LightsOn() {
   var url = "https://api.lifx.com/v1/lights/all/state";

var xhr = new XMLHttpRequest();
xhr.open("PUT", url);

xhr.setRequestHeader("Authorization", "Bearer c288985458348ba46a168c05bb04ab6a4d5d1053b8ceaa2986f602db4c5ec48c");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = "power=on";

xhr.send(data);
  }
  

  function LightsOff() {
   var url = "https://api.lifx.com/v1/lights/all/state";

   var xhr = new XMLHttpRequest();
   xhr.open("PUT", url);
   
   xhr.setRequestHeader("Authorization", "Bearer c288985458348ba46a168c05bb04ab6a4d5d1053b8ceaa2986f602db4c5ec48c");
   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
   
   xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
         console.log(xhr.status);
         console.log(xhr.responseText);
      }};
   
   var data = "power=off";
   
   xhr.send(data);
  }


  function LightsRed() {
      var url = "https://api.lifx.com/v1/lights/all/state";
    
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);
    
    xhr.setRequestHeader("Authorization", "Bearer c288985458348ba46a168c05bb04ab6a4d5d1053b8ceaa2986f602db4c5ec48c");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
       }};
    
    var data = "color=red";
    
    xhr.send(data);
    }
  

    function LightsBlue() {
      var url = "https://api.lifx.com/v1/lights/all/state";

var xhr = new XMLHttpRequest();
xhr.open("PUT", url);

xhr.setRequestHeader("Authorization", "Bearer c288985458348ba46a168c05bb04ab6a4d5d1053b8ceaa2986f602db4c5ec48c");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = "color=blue";

xhr.send(data);
    }