// CTAアニメーション
// 複数要素の取得
var sections = document.querySelectorAll('.bl_cta');

// タイムラインとスクロールトリガーの設定
sections.forEach((section, index) => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            toggleActions: "play none restart none",
        }
    })

    var ctaTtl = section.querySelector('.bl_cta_ttl');
    var ctaTxt = section.querySelector('.bl_cta_txt');
    var ctaTelGroup = section.querySelector('.bl_cta_telGroup');
    var ctaBtn = section.querySelector('.el_btn_cta');

    // 各要素必要設定
    gsap.set(ctaBtn, {
        y: 100,
        ease: 'Power2.easeOut',
    })
    gsap.set(ctaTtl, {
        scale: 1.2,
        transformOrigin: "center center",
    })
    // 直接DOMを操作して強制設定
    ctaTtl.style.transformOrigin = '50% 50%';

    tl.to(ctaTtl, {
            scale: 1.0,
            duration: 0.4,
        }, 0)
        .from(ctaTxt, {
            autoAlpha: 0,
            y: 20,
            ease: 'Power2.easeOut',
        })
        .from(ctaTelGroup, {
            autoAlpha: 0,
            y: 20,
            ease: 'Power2.easeOut',
        })
        .to(ctaBtn, {
            y: 0,
            ease: 'Power2.easeOut',
        })
});