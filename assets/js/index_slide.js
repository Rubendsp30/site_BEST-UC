var active_slide=1;

//funcao para fazer o dlideshowautomatico
function slider(){
    active_slide ++;
    if(active_slide == 4)
        active_slide = 1;

    $(".slide"+active_slide).fadeIn(400);

    console.log("\n fadeIn" + active_slide);

    $(this).delay(1000);
    if(active_slide == 1)
        $(".slide3").hide();
    $(".slide"+(active_slide-1)).hide();

    console.log("\n hide " + active_slide-1);

}

$(document).ready(function(){
    //chama a funcao slider de 5 em 5 segundos
    setInterval(slider, 5000);

    $("#arrow_left").click(function(){
        console.log("click arrow left");

        if(active_slide==1){
            active_slide=3;
          //  $(".slide3").show();
          $( ".slide3" ).fadeIn(400);
          $(".slide1").hide();
        } else if(active_slide==2){
            active_slide=1;
          //  $(".slide1").show();
          $( ".slide1" ).fadeIn(400);
          $(".slide2").hide();
        } else if(active_slide==3){
            active_slide=2;
          //  $(".slide2").show();
          $( ".slide2" ).fadeIn(400);
          $(".slide3").hide();
        }
    });

    $("#arrow_right").click(function(){
        console.log("click arrow right");

        if(active_slide==1){
            $(".slide1").hide();
            active_slide=2;
          //  $(".slide2").show();
            $(".slide2").fadeIn(400);
        } else if(active_slide==2){
            $(".slide2").hide();
            active_slide=3;
           // $(".slide3").show();
            $(".slide3").fadeIn(400);
        } else if(active_slide==3){
            $(".slide3").hide();
            active_slide=1;
          //  $(".slide1").show();

            $(".slide1").fadeIn(400);
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
