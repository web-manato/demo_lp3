//タイムラインを使用してアニメーションを適用
var tl = gsap.timeline();

gsap.set('.el_btn__kv',{
    scale: 0.8,
    autoAlpha: 0,
})

tl.from('.bl_kv_mainCopy_group',{
    autoAlpha: 0,
    y: 20,
    duration: 0.5,
})
.from('.bl_kv_pointGroup',{
    delay: 0.5,
    autoAlpha: 0,
    duration: 0.3,
    stagger: 0.1,
})
.to('.el_btn__kv',{
    transformOrigin: "center center",
    scale: 1.2,
    delay: 0.3,
    autoAlpha: 1,
    duration: 0.2,
})
.to('.el_btn__kv', {
    scale: 1.0,
})
.from('.bl_kv_img',{
    delay: 0.3,
    autoAlpha: 0,
    y: 10,
})