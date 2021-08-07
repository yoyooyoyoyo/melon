$(function(){
    // header 영역 숨기거나 나타나게 하기

    //화면스크롤이 진행되면 true, 아니면 false
    var didScroll;
    //화면위쪽 위치값
    var lastScrollTop = 0;
    //화면 스크롤 방향을 나타내는 변수
    var delta = 5;
    //header영역의 높이값
    var navbarHeight = $('.header').outerHeight();
    //본문영역의 안쪽 위여백을 header의 높이만큼 설정
    $('.section').css('padding-top',navbarHeight);
    //window화면에 스크롤 이벤트 설정
    $(document).scroll(function(event){
        didScroll = true;
        
    });
    //0.25초 동안 (만약에 스크롤이 진행이 되면 hasScrolled함수 호출)
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    //hasScrolled 함수 선언
    function hasScrolled() {
        //st변수에 body문서의 맨 위쪽 위치값을 저장
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('.header').removeClass('header-down').addClass('header-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.header').removeClass('header-up').addClass('header-down');
            }
        }
        
        lastScrollTop = st;
    }
    //멜론차트
    var ho=0;
    $(".chartList > ul > li > a").click(function(){
        if(ho==0){
            ho=1;
            $(".sub").slideDown(); 
        }else{
            ho=0;
            $(".sub").slideUp();
        }
    });

    //햄버거 버튼
    $(".menu_btn").click(function(){
        $(".nav").animate({"right":0});
    });
    //닫기버튼
    $(".close").click(function(){
        $(".nav").animate({"right":"-80%"});
    });

    var swiper1 = new Swiper(".mySwiper", {
        cssMode: false,
        loop:true,
        autoplay:{delay: 4000, disableOnInteraction: false,},
        keyboard: true,
    });
    //탭메뉴

    $(".tab_content > div").hide();
    $(".con1").show();
    $(".t1").click(function(){
        $(".con1").fadeIn();
        $(".con2").hide();
        $(".t1").addClass("active");
        $(".t2").removeClass("active");
    });
    $(".t2").click(function(){
        $(".con1").hide();
        $(".con2").fadeIn();
        $(".t1").removeClass("active");
        $(".t2").addClass("active");
    });
    
    //맬론 데일리 매거진
    $(".magazine-Swiper").hide();
    
    $(".m1").click(function(e){
        e.preventDefault();
        swiperfn(0);
    });
    $(".m2").click(function(e){
        e.preventDefault();
        swiperfn(1);
    });
    $(".m3").click(function(e){
        e.preventDefault();
        swiperfn(2);
    });
    $(".m4").click(function(e){
        e.preventDefault();
        swiperfn(3);
    });

    function swiperfn(scene){
        $(".magazine-Swiper").show();
        var swiper2 = new Swiper(".magazine-Swiper", {
            cssMode: true,
            initialSlide:scene,
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
            mousewheel: {
                invert: false,
            },
        });   
    }

    $(".swiper-button-close").click(function(){
        $(".magazine-Swiper").hide();
    });
    
    //이벤트 페이지 슬라이드
    var swiper3 = new Swiper(".eventSwiper", {
        cssMode: true,
        loop:true,
        autoplay:{delay: 4000, disableOnInteraction: false,},
        keyboard: true,
    });
    
    //티켓 페이지 슬라이드
    var swiper4 = new Swiper(".ticket_Swiper", {
        cssMode: true,
        loop:true,
        autoplay:{delay: 4000, disableOnInteraction: false,},
        keyboard: true,
    });

    $(".footer h2").click(function(){
        $("html,body").animate({scrollTop:0})
    });
});