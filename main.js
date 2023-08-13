$(document).ready(function () {
    let isClicked = false;
    //IMG LOAD 
    const imgContainers = $('.img-container');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target.querySelector('img');
                entry.target.classList.add('loading'); // Add .loading class here
                img.setAttribute('src', img.dataset.src);
                img.onload = function () {
                    entry.target.classList.remove('loading'); // Remove .loading class after image is loaded
                };
                observer.unobserve(entry.target);
            }
        });
    });

    imgContainers.each(function () {
        observer.observe(this);
    });


    // if(isClicked === true) {
    //     $('.gallery').on('click', function (e) {
    //         console.log('e: ', e);
    //         e.preventDefault()
    //         $('.img-container').removeClass('clicked')
    //     })
    // }
    $(".proj span").on("click", function (e) {
        e.preventDefault()
        // $("span").addClass('closed')
        // $(".closed").parent().children(':last').slideUp()
        $(this).parent().children(':last').slideToggle()
        $(".slider").toggleClass("flex")
        // $('.gallery').on('click', function (e) {
        //     $('.img-container').removeClass('clicked')
        //     console.log('children: ', children);
        // })
    },)
    $("img").on("click", function (e) {
        e.preventDefault()
        $(this).parent().toggleClass("clicked")

        $("img").toggleClass("blured")

        $(this).toggleClass("blured")
    })
})


