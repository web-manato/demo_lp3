// セクションタイトルアニメーション
// 複数要素の取得
var sections = document.querySelectorAll('.ly_secTtl');

// タイムラインとスクロールトリガーの設定
sections.forEach((section,index) => {
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger: section,
            start: 'top 90%',
            toggleActions: "play none restart none",
        }
    })


    // セクション内の各要素の取得
    var jpTtl = section.querySelectorAll('.el_secTtl_en');
    var enTtl = section.querySelectorAll('.el_secTtl_jp');

    tl.from(jpTtl,{
        autoAlpha: 0,
        y: 20,
        ease: 'Power2.easeOut',
    })
    .from(enTtl,{
        delay: 0,
        autoAlpha: 0,
        y: 30,
        ease: 'Power3.easeOut',
    })
});