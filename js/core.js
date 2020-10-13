setInterval(() => {
    var today = new Date();
    var date =today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    $(".time").html(date);
}, 1000);

$(function () {
    var num1, num2, ans, opt;
    // always let the scrren be focused
    $(".screen").focus();


    // check if btn is clicked
    var value = "";
    $(".num").click(function () {
    // collect and store btn value
    value = value + $(this).attr("id");
    // pass value to screen
    $(".screen").val(value);
    });

    $(".op").click(function () {
    num1 = parseFloat($(".screen").val());
    value = "";
    opt = $(this).attr("id");
    $(".screen").val(0);
    });

    $(".equal").click(function () {
    value = "";
    num2 = parseFloat($(".screen").val());
    // alert(opt)
    // alert(num2)
    switch (opt) {
        case "+":
        ans = num1 + num2;
        break;
        case "-":
        ans = num1 - num2;
        break;
        case "*":
        ans = num1 * num2;
        break;
        default:
        ans = num1 / num2;
    }
    $(".screen").val(ans);
    });

    // clear btn
    $(".cancel").click(function () {
        value = "";
        $('.screen').val(0);
    });
});