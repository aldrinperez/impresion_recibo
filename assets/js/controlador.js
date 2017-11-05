$(document).ready(function(){

   $("#formulario").submit(function(){

       var usuario = $("#usuario").val();
       var password = $("#password").val();
           
       
       if(usuario=="Admin" && password=="1234"){
       
           window.location.assign("menu.html");
           
       }else{
          $("#error").show(); 
       }
       
   return false;

   });

     $("#usuario").focus();
    $("#error").hide();

});