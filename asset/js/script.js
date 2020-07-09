/*window.alert("Disclaimer!!! Seluruh konten yang ada di dalam web ini adalah fiksi belaka. Asset gambar yang tersedia diambil dari Google Image untuk kebutuhan Submission :)");*/

window.addEventListener('scroll', function (e) {
    //Scrolling fx nav bar
    var nav = document.getElementById('nav');

    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
        nav.classList.add('scroll-header');
        nav.classList.remove('main-header');
    } else {
        nav.classList.add('main-header');
        nav.classList.remove('scroll-header');
    }
    
    //Scrolling fx logo & hover
    var logo = document.getElementById('logo-id');

    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
        logo.classList.add('logo-sroll');
        logo.classList.remove('logo');
    } else {
        logo.classList.add('logo');
        logo.classList.remove('logo-sroll');
    }
    
    var header = document.getElementById('leftHeader');

    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
        header.classList.add('left-header-scroll');
        header.classList.remove('left-header');
    } else {
        header.classList.add('left-header');
        header.classList.remove('left-header-scroll');
    }

});

window.addEventListener('scroll', function (e) {
    //Scrolling fx nav bar list
    var list = document.getElementsByClassName('list');

    for (var i = 0; i < list.length; i++) {
        if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
            list[i].classList.add('nav-list-scroll');
            list[i].classList.remove('nav-list');
        } else {
            list[i].classList.add('nav-list');
            list[i].classList.remove('nav-list-scroll');
        }
    }    
});

window.addEventListener('scroll', function (e) {
    //Scrolling fx nav bar list
    var border = document.getElementsByClassName('bd');

    for (var i = 0; i < border.length; i++) {
        if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
            border[i].classList.add('border-scroll');
            border[i].classList.remove('border');
        } else {
            border[i].classList.add('border');
            border[i].classList.remove('border-scroll');
        }
    }    
});



