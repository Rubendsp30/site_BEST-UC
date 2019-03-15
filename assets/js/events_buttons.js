function showEBEC(){
    $(".event_ebec").show();
    $("#EBECbutton").css("background-color","#FFA615");
    $(".event_bew").hide();
    $("#BEWbutton").css("background-color","#C4C4C4");
    $(".event_hackathon").hide();
    $("#Hackbutton").css("background-color","#C4C4C4");
    $(".event_workshop").hide();
    $("#Workshopbutton").css("background-color","#C4C4C4");
    $(".event_palestra").hide();
    $("#Palestrasbutton").css("background-color","#C4C4C4");
}

function showBEW(){
    $(".event_ebec").hide();
    $("#EBECbutton").css("background-color","#C4C4C4");
    $(".event_bew").show();
    $("#BEWbutton").css("background-color","#42b089");
    $(".event_hackathon").hide();
    $("#Hackbutton").css("background-color","#C4C4C4");
    $(".event_workshop").hide();
    $("#Workshopbutton").css("background-color","#C4C4C4");
    $(".event_palestra").hide();
    $("#Palestrasbutton").css("background-color","#C4C4C4");
}

function showHackathons(){
    $(".event_ebec").hide();
    $("#EBECbutton").css("background-color","#C4C4C4");
    $(".event_bew").hide();
    $("#BEWbutton").css("background-color","#C4C4C4");
    $(".event_hackathon").show();
    $("#Hackbutton").css("background-color","#25A9D2");
    $(".event_workshop").hide();
    $("#Workshopbutton").css("background-color","#C4C4C4");
    $(".event_palestra").hide();
    $("#Palestrasbutton").css("background-color","#C4C4C4");
}

function showWorkshops(){
    $(".event_ebec").hide();
    $("#EBECbutton").css("background-color","#C4C4C4");
    $(".event_bew").hide();
    $("#BEWbutton").css("background-color","#C4C4C4");
    $(".event_hackathon").hide();
    $("#Hackbutton").css("background-color","#C4C4C4");
    $(".event_workshop").show();
    $("#Workshopbutton").css("background-color","rgb(255,0,0)");
    $(".event_palestra").hide();
    $("#Palestrasbutton").css("background-color","#C4C4C4");
}

function showPalestras(){
    $(".event_ebec").hide();
    $("#EBECbutton").css("background-color","#C4C4C4");
    $(".event_bew").hide();
    $("#BEWbutton").css("background-color","#C4C4C4");
    $(".event_hackathon").hide();
    $("#Hackbutton").css("background-color","#C4C4C4");
    $(".event_workshop").hide();
    $("#Workshopbutton").css("background-color","#C4C4C4");
    $(".event_palestra").show();
    $("#Palestrasbutton").css("background-color","#96ce8f");
}
