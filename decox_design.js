

const renderSlides = () => {
    let render = slides.map(function (item) {
        return `
                <div class="swiper-slide">
                    <a href="./biet_thu.html">
                        <img src="${item.img}" alt="s1" width="100%" height="100%">
                    </a>
                </div>
                `
    })
    document.getElementById('slide').innerHTML = render.join("")
}

const renderCollections = () => {
    let render = all.map(function (item) {
        return `
                <div class=" swiper-slide ">
                    <a href="./biet_thu.html" class="collection__item relative flex-middle hover z-1">
                        <img class="br-16" src="${item.img}" alt="s1" width="100%" height="100%">
                        <span class="collection__item__tittle absolute upcase text-white px-100 py-120 text-center fw-700 d-none z-2">${item.tittle}</span>
                    </a>
                </div>
                `
    })
    document.getElementById('collection').innerHTML = render.join("")
}

const renderVideos = () => {
    let render = videos.map(function (item) {
        return `
                <div class="swiper-slide channel__play__item br-8 overflow-hidden hover flex-middle" onclick="playVideo('${item.src}')" >
                    <img src="${item.img}" width="100%" height="100%">
                    <div class="channel__play__btn absolute z-1 d-none" style="width: 70px; height: 70px;" >
                        <img src="./img/play-button-28241.png" width="100%" height="100%">
                    </div>
                </div>
                `
    })
    document.getElementById('video').innerHTML = render.join("")
}

const playVideo = (src) => {
    document.getElementById('video__play').src = src;
}

const renderNtm = () => {
    let render = all.map(function (item) {
        return `
                <div class="swiper-slide">
                    <a href="./biet_thu.html">
                        <div class="mb-16 br-8 overflow-hidden hover relative"><img src="${item.img}" width="100%" height="100%"></div>
                        <div class="fs-20 fw-900 mb-16 text-primary text-wrap capital text-ov-2">${item.tittle}</div>
                        <div class="text-gray capital text-ov-1">${item.des}</div>
                    </a>
                </div>
                `
    })
    document.querySelector('.ntm1').innerHTML = render.join("");
    document.querySelector('.ntm2').innerHTML = render.join("");
    document.querySelector('.ntm3').innerHTML = render.join("");
}

const renderChtks = () => {
    let render = chtks.map(function (item) {
        return `
  
                <div class="flex flex-col">
                    <a href="./biet_thu.html">
                        <div class="br-8 overflow-hidden mb-12 relative hover">
                            <img src="${item.img}" width="100%">
                        </div>
                        <div class="text-ov-2 text-primary overflow-hidden text-justify mb-12">${item.tittle}  </div>
                        <div class="text-ov-3 text-gray text-justify overflow-hidden">${item.des}</div>
                    </a>
                </div>
                `
    })
    document.getElementById('chtk').innerHTML = render.join("")
}

function ready() {
    renderSlides();
    renderCollections();
    renderVideos();
    renderNtm();
    renderChtks();
}

ready()




const swiper1 = new Swiper('.my__swiper1', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiper2 = new Swiper('.my__swiper2', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 20,
    grid: {
        fill: 'row',
        rows: 2,
    },
    pagination: {
        clickable: true,
        el: '.colection__pagination',
        clickable: true,
        renderBullet: (index, className) => {
            return '<span class="' + className + ' ' + 'bg-primary colection__bullet' + '">' + "</span>";
        },
    },
});


const swiper3 = new Swiper('.my__swiper3', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiper4 = new Swiper('.my__swiper4', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiper_header = new Swiper('.my__swiper__header', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    loop: true,
    slidesPerView: 9,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


