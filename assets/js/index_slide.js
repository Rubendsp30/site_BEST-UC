var active_slide=1;

$(document).ready(function(){

    $("#arrow_left").click(function(){
        console.log("click arrow left");

        if(active_slide==1){
            $(".slide1").hide();
            active_slide=3;
            $(".slide3").show();
        } else if(active_slide==2){
            $(".slide2").hide();
            active_slide=1;
            $(".slide1").show();
        } else if(active_slide==3){
            $(".slide3").hide();
            active_slide=2;
            $(".slide2").show();
        }
    });

    $("#arrow_right").click(function(){
        console.log("click arrow right");

        if(active_slide==1){
            $(".slide1").hide();
            active_slide=2;
            $(".slide2").show();
        } else if(active_slide==2){
            $(".slide2").hide();
            active_slide=3;
            $(".slide3").show();
        } else if(active_slide==3){
            $(".slide3").hide();
            active_slide=1;
            $(".slide1").show();
        }
    });
});

$(document).keydown(function(e) {
    console.log(e.keyCode);

    if(e.keyCode==37){
        console.log("click arrow left");

        if(active_slide==1){
            $(".slide1").hide();
            active_slide=3;
            $(".slide3").show();
        } else if(active_slide==2){
            $(".slide2").hide();
            active_slide=1;
            $(".slide1").show();
        } else if(active_slide==3){
            $(".slide3").hide();
            active_slide=2;
            $(".slide2").show();
        }
    } else if(e.keyCode==39){
        console.log("click arrow right");

        if(active_slide==1){
            $(".slide1").hide();
            active_slide=2;
            $(".slide2").show();
        } else if(active_slide==2){
            $(".slide2").hide();
            active_slide=3;
            $(".slide3").show();
        } else if(active_slide==3){
            $(".slide3").hide();
            active_slide=1;
            $(".slide1").show();
        }
    }
});
