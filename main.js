
function turning_page(page_container, page_to_be_turned, opposite_page, 
                      page_to_be_turned_writing, opposite_page_writing, 
                      opposite_page_hover_deg, animation_name, delay){

    $("#"+page_to_be_turned_writing).hide("slow", "swing");
    $("#"+opposite_page_writing).hide("slow", "swing");

    //page turning animation
    $("#"+page_to_be_turned).css({
        "animation" : animation_name+" "+delay+"ms"
    });

    // turning off opposite page hovering during page turning
    $("#"+opposite_page).mouseover(function(){
        $("#"+opposite_page).css({
            "transform" : "rotateY(0deg)"
        });
    });

    $("#"+page_container).css({
        "z-index": "2"
    });

    // run the below function after 3500 milisec to go to initial state
    setTimeout(function(){
        $("#"+page_to_be_turned).css({
            "animation" : ""
        });

        $("#"+opposite_page).hover(
            function(){$("#"+opposite_page).css({"transform" : "rotateY("+opposite_page_hover_deg+")"})},
            function(){$("#"+opposite_page).css({"transform" : "rotateY(0deg)"})}
        );

        $("#"+page_container).css({
            "z-index": "1"
        });

    }, delay);
}

// main
$(document).ready(function () {
    
    // left-to-right page turning
    $("#odd1").click(function(){
        /*
        <--- arguments for left to right turning ---->
        page_container = "odd"
        page_to_be_turned = "odd1"
        opposite_page = "even1"
        page_to_be_turned_writing = "odd-page-1"
        opposite_page_writing = "even-page-1"
        degree_to_be_rotated = "-15deg"
        animation_name = "left-to-right"
        delay(milisec) = 3500
        */
        turning_page("odd", "odd1", "even1", "odd-page-1",
                     "even-page-1", "-15deg", "left-to-right", 3500);
    });

    // right-to-left page turning
    $("#even1").click(function(){
        turning_page("even", "even1", "odd1", "even-page-1",
                     "odd-page-1", "15deg", "right-to-left", 3500);
    }); 
});

