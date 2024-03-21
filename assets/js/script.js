$(document).ready(function(){
    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...");
    });
});
$(document).ready(function(){
    $("h3").on("dblclick", function(){
        $(this).css("color", "red");
    });
});



$(document).ready(function(){
    $(".card-title a").click(function(e){
        e.preventDefault(); 
        
        $(this).closest(".card").find(".card-text").toggle();
    });
});


