
    
        $(document).ready(function () {
            $("#navHamburger > a").click(function () {
                if ($("body").hasClass("toggleNavigationVisible") == false) {
                    $("#navMainMenu").show();
                    $("#navHamburger").addClass("expand");
                    $("body").addClass("toggleNavigationVisible");
                    return false;
                }
            });

            $("body").click(function () {
                if ($("body").hasClass("toggleNavigationVisible") == true) {
                    $("#navMainMenu").hide();
                    $("#navHamburger").removeClass("expand");
                    $("body").removeClass("toggleNavigationVisible");
                    return ;
                }
            });
        });

   