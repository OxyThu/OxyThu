
$(document).ready(function(){
  setLanguage();
  
     $(document).scroll(function(){
          closeNav();
         animation();
         toTopArrow();
     });
});
  
function openNav(){
    $("#mySidenav").css("width","250px");
    $(".sidenav a ").css("font-size","20px");
    $(".myDropDown").css("font-size","15px");
    $(".navbar").hide(550);
    
};
function closeNav(){
    $('#mySidenav').css("width","0px");
    $(".sidenav a ").css("font-size","0");
    $(".myDropDown").css("font-size","0");
    $(".navbar").show(550);
};


function toTopArrow(){
 var screenHeight=$(window).scrollTop();
 if(screenHeight>500){
   $(".fixed").css("display","block");
   $(".fixed").show(550);
 }else{
   $(".fixed").css("display","none");
   $(".fixed").hide(1000);
 }
}


function animation(){
  var preHeight;
  var height = $(window).scrollTop();
  var width=$(window).width();
  var skillSection=$("#Skill_section").position();
  var eduSection=$("#Edu_section").position();
  var contactSection=$("#Contact_section").position();
  var formSection=$("#form_section").position();
 
  if(width <650){
     preHeight=500;
  }else{
    preHeight=300;
  }
  var finalHeight= height+preHeight;

  if(finalHeight > skillSection.top.toFixed()){
    $("#Skill_section").addClass("animate__swing").css("animation-duration","1750ms");
  }
  if(finalHeight >eduSection.top.toFixed()){
    $("#Edu_section").addClass("animate__swing").css("animation-duration","1750ms");
  }
  if(finalHeight >contactSection.top.toFixed()){
    $(".contact_title").addClass("animate__heartBeat").css("animation-duration","1500ms");
    $(".contact_link1").addClass("animate__heartBeat").css("animation-duration","1500ms");
    $(".contact_link2").addClass("animate__heartBeat").css("animation-duration","1750ms");
    $(".contact_link3").addClass("animate__heartBeat").css("animation-duration","2000ms");
    $(".contact_link4").addClass("animate__heartBeat").css("animation-duration","2250ms");
    $(".contact_link5").addClass("animate__heartBeat").css("animation-duration","2500ms");
  }
  if(finalHeight > formSection.top.toFixed()){
    $(".formInput1").addClass("animate__heartBeat").css("animation-duration","1750ms");
    $(".formInput2").addClass(" animate__heartBeat").css("animation-duration","2000ms");
    $(".formInput3").addClass("animate__heartBeat").css("animation-duration","2250ms");
    $(".formInput4").addClass("animate__heartBeat").css("animation-duration","2500ms");
  }
}


function setLanguage(lang){
  var language=lang;  
  if(language=='en'){
    $(".language").text(en.language);
    $(".myanmar").text(en.myanmar);
    $(".english").text(en.english);
    $(".home").text(en.home);
    $(".skills").text(en.skills);
    $(".education").text(en.education);
    $(".contact").text(en.contact);
    $("#home_section").text(en.bio);
    $("#paragraph").html(en.bioBody).addClass("engParagraph");
    $("#skillTitle").text(en.skills);
    $("#eduTitle").text(en.education);
    $("#university").text(en.university);
    $("#contactTitle").text(en.contact);
    $("#formName").text(en.formName);
    $("#formMail").text(en.formMail);
    $("#formSubject").text(en.formSubject);
    $("#formSubmit").text(en.formSubmit);
    $("#warningTitle").text(en.warningTitle);
    $("#warningBody").text(en.warningBody);
  }
 else if(language=='mm'){
  $(".language").text(mm.language);
  $(".myanmar").text(mm.myanmar);
  $(".english").text(mm.english);
  $(".home").text(mm.home);
  $(".skills").text(mm.skills);
  $(".education").text(mm.education);
  $(".contact").text(mm.contact);
  $("#home_section").text(mm.bio);
  $("#paragraph").html(mm.bioBody).addClass("myanParagraph");
  $("#skillTitle").text(mm.skills);
  $("#eduTitle").text(mm.education);
  $("#university").text(mm.university);
  $("#contactTitle").text(mm.contact);
  $("#formName").text(mm.formName);
  $("#formMail").text(mm.formMail);
  $("#formSubject").text(mm.formSubject);
  $("#formSubmit").text(mm.formSubmit);
  $("#warningTitle").text(mm.warningTitle);
  $("#warningBody").text(mm.warningBody);
 }
 closeNav();
}
var en={
  "language":"Language",
  "myanmar":"Myanmar",
  "english":"English",
  "home":"HOME",
  "skills":"SKILLS",
  "education":"EDUCATION",
  "contact":"CONTACT",
  "bio":"BIO",
  "bioBody":"Hello <br> I am currently studying at Computer University (Sittwe) <br> I am an undergraduate student . I enjoy to study computer science. Now I am studying the subjects required to become a Full Stack Web Developer .  If you have any suggestions, please feel free to contact me via Gmail",
"university":"Studies At University Of Computer Studies-Sittway",
  "formName":"Name",
  "formMail":"Email",
  "formSubject":"Subject",
  "formSubmit":"SUBMIT",
  "warningTitle":"Notice Alert",
  "warningBody":"This feature is unavailable right now",
};
var mm={
  "language":"ဘာသာစကား",
    "myanmar":"မြန်မာ",
    "english":"အင်္ဂလိပ်",
    "home":"ပင်မစာမျက်နှာ",
    "skills":"ကျွမ်းကျင်မှုများ",
    "education":"ပညာရေး",
    "contact":"ဆက်သွယ်ရန်",
    "bio":"မိတ်ဆက်",
    "bioBody":" သာလီစွပါ <br> ကျွန်တော်ကတော့ အခုလက်ရှိ <br class=\"d-block d-md-none\"> ရခိုင်ပြည်နယ်၊စစ်တွေမြို့မှာရှိတဲ့ <br> ကွန်ပျူတာတက္ကသိုလ်မှာ <br class=\"d-none d-md-inline\"> ဘွဲ့ကြို တက်ရောက်နေတဲ့ကျောင်းသား  တစ်ယောက်ဖြစ်ပါတယ် <br class=\"d-none d-md-inline\"> ကွန်ပျူတာဘာသာရပ်တွေကို လေ့လာရတာ နှစ်သက်ပါတယ် <br> အခု ကျွန်တော်က Full Stack Web Developer တစ်‌ယောက် ဖြစ်ဖို့အတွက် <br class=\"d-none d-md-block\"> လိုအပ်တာတွေကို လေ့လာနေပါတယ် <br> မိမိအား အကြံညဏ်များပေးလိုပါက အောက်တွင်ဖော်ပြထားတဲ့ <br class=\"d-none d-md-inline\">Gmail ကနေတစ်ဆင့်ဆက်သွယ်အကြံပြုနိုင်ပါတယ် ",
    "university":"ကွန်ပျူတာတက္ကသိုလ်(စစ်တွေ) တွင်ပညာသင်ကြားနေပါသည်",
    "formName":"အမည်",
    "formMail":"အီးမေး",
    "formSubject":"အကြောင်းအရာ",
    "formSubmit":"ပေးပို့သည်",
    "warningTitle":"အသိပေးချက်",
    "warningBody":"ဤလုပ်ဆောင်ချက်ကို အသုံးပြု၍မရသေးပါ",
}
