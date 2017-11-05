$("#cobrar").click(function(){
    
     window.location.assign("cxc.html");
});


$("#guardar").click(function(){

      var email = $("#email").val();
      var fecha = $("#fecha").val();
      var telefono = $("#telefono").val();
      var numero = $("#numero").val();
      var html = '';
      
      html = html+'<strong>AAA PRESTA</strong><br>';
      html = html+'809-156-165<br>';
      html = html+'Av. las Carreras<br>';
      html = html+'----------------<br>';
      html = html+'Fecha: '+fecha+'<br>';
      html = html+'Email: '+email+'<br>';
      html = html+'Telefono: '+telefono+'<br>';
      html = html+'Numero: '+numero;
     
      $.alert("Los Datos a Imprimir es el siguiente: "+html);
      
    
});