// 代表挨拶アニメーション
// 複数要素の取得
var sections = document.querySelectorAll('.bl_president');

// タイムラインとスクロールトリガーの設定
sections.forEach((section,index) => {
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger: section,
            start: 'top 40%',
            toggleActions: "play none restart none",
        }
    })

    var img = section.querySelector('.bl_president_img');
    var ttl = section.querySelector('.bl_president_body_ttl');
    var txt = section.querySelector('.bl_president_body_txt');

    tl.from(img,{
        scale: 1.2,
        autoAlpha: 0,
        duration: 0.4,
    })
    .from(ttl,{
        autoAlpha: 0,
        y: 20,
        ease: 'Power2.easeOut',
    })
    .from(txt,{
        autoAlpha: 0,
        y: 20,
        ease: 'Power2.easeOut',
    })
});