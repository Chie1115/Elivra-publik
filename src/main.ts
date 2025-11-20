// src/main.ts

// Intersection Observerを使用して、要素がビューポートに入ったときにクラスを追加する関数
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // 一度表示されたら監視を停止
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 // 要素の10%が見えたら発火
    });

    elements.forEach(element => {
        observer.observe(element);
    });
};

// DOMContentLoaded後にアニメーションを開始
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});
