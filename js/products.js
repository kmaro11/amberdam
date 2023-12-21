document.addEventListener("DOMContentLoaded", function () {
    const productBlock = document.getElementById('products');
    const productMobileButtons = document.querySelectorAll('[data-products-mobile-target]');
    const paginationWrapper = document.querySelector('.splide__pagination-custom');
    const productButtons = document.querySelectorAll('[data-products-target]');
    let activeSliderIndex = 0;
    let isMobile = window.matchMedia('(max-width: 1024px)').matches;

    // desktop slider
    if (!isMobile) {
        let slider = new window.Splide('#products-slider', {
            arrows: true,
            pagination: true,
            type: "loop",
            gap: '87px',
            classes: {
                page: 'splide__pagination__page custom-pagination-item'
            }
        });
        let heightMap = {};
        document.querySelectorAll(".splide__slide").forEach(function (e) {
            e.style.maxHeight = 0;
        });
        slider.on("mounted", function () {
            let i = 0;
            document.querySelectorAll(".splide__slide").forEach(function (e) {
                if (!e.classList.contains('splide__slide--clone')) {
                    heightMap[i] = e.scrollHeight;
                    i++
                }
            });
        });
        slider.on("active", function (e) {
            let maxHeight = heightMap[e.slideIndex] + "px";
            e.slide.style.maxHeight = maxHeight;
            e.slide.parentElement.style.maxHeight = maxHeight;
        });

        slider.on("move", function (e) {
            activeSliderIndex = e
            changeActiveButton(productButtons)
            productBlock.scrollIntoView()
        })

        productButtons.forEach(button => {
            button.addEventListener('click', () => {
                removeActiveButtons(productButtons)
                const selectedProduct = button.dataset.productsTarget
                button.classList.add('active-product')
                slider.go(parseInt(selectedProduct))
            })
        })

        slider.mount();

    } else {
        // mobile slider
        let sliderMobile = new Splide('#products-slider-mobile', {
            perPage: 0,
            focus: 0,
            type: "loop",
            pagination: true,
            gap: '87px',
            breakpoints: {
                1024: {
                    perPage: 2,
                },
                500: {
                    perPage: 1,
                }
            },
            classes: {
                page: 'splide__pagination__page custom-pagination-item'
            }
        })

        sliderMobile.on("move", function (e) {
            activeSliderIndex = e
            paginationWrapper.style.transform = `translateX(-${e * 21}px)`
            productMobileButtons.forEach(button => {
                const selectedProduct = button.dataset.productsMobileTarget.split(',')
                if (selectedProduct.includes(activeSliderIndex.toString())) {
                    button.classList.add('active-product')
                } else {
                    button.classList.remove('active-product')
                }
            })
        })

        productMobileButtons.forEach(button => {
            button.addEventListener('click', () => {
                removeActiveButtons(productMobileButtons)
                const selectedProduct = button.dataset.productsMobileTarget.split(',')
                button.classList.add('active-product')
                sliderMobile.go(parseInt(selectedProduct[0]))
            })
        })

        sliderMobile.mount();
    }

    function changeActiveButton(list) {
        list.forEach(button => {
            if (parseInt(button.dataset.productsTarget) === activeSliderIndex) {
                button.classList.add('active-product')
            } else {
                button.classList.remove('active-product')
            }
        })
    }

    function removeActiveButtons(list) {
        list.forEach(button => {
            button.classList.remove('active-product')
        })
    }
})

