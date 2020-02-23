$(() => {
  // On DOM Load

  $(".bracket.active.arrow").hide();
  $(".area").hide();

  // HIDE CONTENT AREAS
  const hideAreas = () => {
    $(".projectArea").hide();
    $(".skillArea").hide();
    $(".bioArea").hide();
  };
  
  // HIDE WEB DEVELOPER SUBTITLE
  const hideSub = () => {
    $(".subtitle").hide("slow");
  };

  // SHOW BIO
  $(".navigate.bio").on("click", e => {
    $(".bracket.active.arrow").hide();
    hideSub();
    hideAreas();
    $("#bioArrow").show();
  });

  // SHOW SKILLS
  $(".navigate.skills").on("click", e => {
    $(".bracket.active.arrow").hide();
    hideSub();
    hideAreas();
    $(".skillArea").show("slow");
    $("#skillArrow").show();
  });

  // SHOW PROJECTS
  $(".navigate.projects").on("click", e => {
    $(".bracket.active.arrow").hide();
    hideSub();
    hideAreas();
    $(".projectArea").show("slow");
    $("#projectArrow").show();
  });
});
