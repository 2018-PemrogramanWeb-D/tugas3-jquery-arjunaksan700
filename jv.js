$(document).ready(function(){
    $("#btn1").click(function(){
        $("#test1").text("Hello world!");
    });
    $("#btn2").click(function(){
        $("#test2").html("<b>Hello world!</b>");
    });
    $("#btn3").click(function(){
        $("#test1").text("Mohon masukan sebuah kalimat");
        $("#test2").html("<i>Mohon masukan sebuah kalimat</i>");
    });
    $("#btn0").click(function(){
        $("img").animate({
            height: 'toggle'
        });
    });
    $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});