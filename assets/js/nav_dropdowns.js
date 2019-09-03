$(document).ready(function(){

    $("#best_dropdown").click(function(){
        $(".nav_dropdown_best").toggle();
    });

    $("#companies_dropdown").click(function(){
        $(".nav_dropdown_companies").toggle();
    });

    $("#students_dropdown").click(function(){
        $(".nav_dropdown_students").toggle();
    });

    $(".fa-bars").click(function(){
        $(".hamburger_dropdown").toggle();
    });

});
