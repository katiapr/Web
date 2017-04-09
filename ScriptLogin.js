function loadPage() {
    $("#txtSport").hide();
    $("#txtAboutUs").hide();
    $("#txtRecipes").hide();
    $("iframe").hide();
    cmdAboutUs = $("#AboutUs").click(clickListener);
    cmdSport = $("#Sport").click(clickListener);
    cmdRecipes = $("#Recipes").click(clickListener);

}
var showTxt = function (num) {
    showTxt[0] = "Hey you!\n\n Let us tell you about us!\n This is a very useful and friendly interface\n" +
                    "It can help you to reduce your wright, upper it or sipmly save it!\n" +
                    "All you need to do is only Sign up and Begin your session!\n" +
                    "You can conntact us by clicking on our names at the end of the page\n\n\n" +
                    "Enjoy!\n\nEasyWayght!:)";
    showTxt[1] = "Wellcome to our sport collection of links!\n" +
                    "Here you can read articles and find useful information about exercises\n\n\n" +
                      "Enjoy!\nEasyWayght!:)";
    showTxt[2] = "Wellcome to our recipes collection of links!\n" +
                    "Here you can find information about healthy food,\n" +
                    "some recipes and more useful information\n\n\n" +
                      "Enjoy!\nEasyWayght!:)";
}

////Get
//var bla = $('#txt_name').val();

////Set
//$('#txt_name').val('bla');
var clickListener = function (e) {
    var txt = document.getElementById("classTxt");

    if (e.target.id == "AboutUs") {
        $("iframe").hide();
        alert("AboutUs");
        $("iframe").show();
        txt.innerText = showTxt(0);


    }
    if (e.target.id == "Sport") {
        $("iframe").hide();
        alert("Sport");
        $("iframe").show();
        txt.innerText = showTxt(1);

    }
    if (e.target.id == "Recipes") {
        $("iframe").hide();
        alert("Recipes");
        $("iframe").show();
        txt.innerText = showTxt(2);

    }
    /*
    *
    var content = myIFrame.contentWindow.document.body.innerHTML;
    */
}
