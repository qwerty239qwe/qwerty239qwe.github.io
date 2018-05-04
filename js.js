$(".maincontent").hide();

$(".ab").click(
  function(){
    $(".ab").addClass("clicked");
    $(".mem").removeClass("clicked");
    $(".pub").removeClass("clicked");
    $(".pro").removeClass("clicked");
    $(".cont").removeClass("clicked");
    $(".maincontent").show(700);
    $(".abcont").fadeIn();
    $(".memcont").hide();
    $(".pubcont").hide();
    $(".procont").hide();
    $(".contcont").hide();
    $(".homepage").hide();
    
  });

$(".mem").click(
  function(){
    $(".mem").addClass("clicked");
    $(".ab").removeClass("clicked");
    $(".pub").removeClass("clicked");
    $(".pro").removeClass("clicked");
    $(".cont").removeClass("clicked");
    $(".maincontent").show(700);
    $(".memcont").fadeIn();
    $(".abcont").hide();
    $(".pubcont").hide();
    $(".procont").hide();
    $(".contcont").hide();
    $(".homepage").hide();
    
  });

$(".pub").click(
  function(){
    $(".pub").addClass("clicked");
    $(".ab").removeClass("clicked");
    $(".mem").removeClass("clicked");
    $(".pro").removeClass("clicked");
    $(".cont").removeClass("clicked");
    $(".maincontent").show(700);
    $(".pubcont").fadeIn();
    $(".abcont").hide();
    $(".memcont").hide();
    $(".procont").hide();
    $(".contcont").hide();
    $(".homepage").hide();
    
  });

$(".pro").click(
  function(){
    $(".pro").addClass("clicked");
    $(".ab").removeClass("clicked");
    $(".pub").removeClass("clicked");
    $(".mem").removeClass("clicked");
    $(".cont").removeClass("clicked");
    $(".maincontent").show(700);
    $(".procont").fadeIn();
    $(".abcont").hide();
    $(".pubcont").hide();
    $(".memcont").hide();
    $(".contcont").hide();
    $(".homepage").hide();
    
  });

$(".cont").click(
  function(){
    $(".cont").addClass("clicked");
    $(".ab").removeClass("clicked");
    $(".pub").removeClass("clicked");
    $(".pro").removeClass("clicked");
    $(".mem").removeClass("clicked");
    $(".maincontent").show(700);
    $(".contcont").fadeIn();
    $(".abcont").hide();
    $(".pubcont").hide();
    $(".procont").hide();
    $(".memcont").hide();
    $(".homepage").hide();
    
  });
