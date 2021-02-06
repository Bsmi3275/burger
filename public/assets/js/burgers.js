$(function () {

    $(".devour").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: true
        }).then(
            function() {
                console.log("We got this darn burger devoured");
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var anotherBurger = {
            burger_name: $("#buga").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: anotherBurger
        }).then(
            function () {
                console.log("Add another burger");
                location.reload();
            }
        );
    });

})