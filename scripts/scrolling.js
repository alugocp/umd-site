$(document).ready(() => {
  $(".link:not(a)").each((i,link) => {
    $(link).click(() => {
      var id="#"+$(link).attr("dest");
      var top=$(id).offset().top-$(".navbar").height()-50;
      $("body,html").animate({scrollTop:(top>0?top:0)},300);
    });
  });
});
