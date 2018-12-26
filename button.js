$(document).ready(function() {
  $(".hamberger").click(function() {
    $(".menu").toggleClass("menu-active");
    $(".hamberger .top").toggleClass("hamberger-top");
    $(".hamberger .center").toggleClass("hamberger-center");
    $(".hamberger .bottom").toggleClass("hamberger-bottom");
  });
});
