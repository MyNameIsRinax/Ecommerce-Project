$(document).ready(function() {
    $(".alert").hide();
    $(".buy").click(function showAlert() {
        $(".alert").fadeTo(2000, 500).slideUp(500, function() {
        $(".alert").slideUp(500);
        });
    });
});