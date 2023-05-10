function fadeAnime(){

    //動きの指定
      $('.fadeintrigger').each(function(){ //fadeInTriggerというクラス名が
        var elemPos = $(this).offset().top-30;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadein');// 画面内に入ったらfadeInというクラス名を追記
        }else{
        $(this).removeClass('fadein');// 画面外に出たらfadeInというクラス名を外す
        }
        });
    
    }

        $(window).scroll(function (){

            fadeAnime();

        });


