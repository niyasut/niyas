$(document).ready(function(){
$("#name").blur(function(){
    var namess=$(this).val()
    if(namess.length<4){
       $("#error").show()
      
    }
    else{
        $("#error").hide()
    }

})
// validator
$("#gform").validate({
    rules:{
      
    name:{
        required:true,
        minlength:4
    },
    email:{
        required:true,
        email:true
    },
    message:{
        required:true,
        minlength:30
    }
  
}
})

$("#submit").click(function (e){
    $("#gform").hide();
    $("#aftermailsent").show()
})

})
// Javascript for form sending 
const gform = document.getElementById("gform");

gform.addEventListener("submit",(e) =>{
e.preventDefault();
const request = new XMLHttpRequest();
request.open("post","https://script.google.com/macros/s/AKfycbz8gCfNx7ZrZVMwqf0PRUJvRC-YhQYfNWeVI7CH/exec");
request.onload = function (){
    console.log(request.responseText)
}
request.send(new FormData(gform));
});