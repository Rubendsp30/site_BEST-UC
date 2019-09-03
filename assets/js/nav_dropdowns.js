$(document).ready(function(){

    $("#best_dropdown").hover(function(){
        $(".nav_dropdown_best").toggle();
    });
    $(".nav_dropdown_best").hover(function(){
        $(".nav_dropdown_best").css("display", "inline");
    });

    $("#companies_dropdown").hover(function(){
        $(".nav_dropdown_companies").toggle();
    });
    $(".nav_dropdown_companies").hover(function(){
        $(".nav_dropdown_companies").css("display", "inline");
    });


    $("#students_dropdown").hover(function(){
        $(".nav_dropdown_students").toggle();
    });
    $(".nav_dropdown_students").hover(function(){
        $(".nav_dropdown_students").css("display", "inline");
    });

    $(".fa-bars").click(function(){
        $(".hamburger_dropdown").toggle();
    });

    $("main").hover(function(){
        $(".nav_dropdown_best").css("display", "none");
        $(".nav_dropdown_companies").css("display", "none");
        $(".nav_dropdown_students").css("display", "none");
    });

});
