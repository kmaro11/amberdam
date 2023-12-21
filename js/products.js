const productSlider = document.getElementById('products-slider');
const productSliderMobile = document.getElementById('products-slider-mobile');
const productsMaterial = document.getElementById('products-material');
const productsManufactures = document.getElementById('products-manufactures');

const productButtons = document.querySelectorAll('[data-products-target]');
const products = document.querySelectorAll('[data-products]');

productButtons.forEach( button => {
    button.addEventListener('click', () => {
        removeActiveButtons()
        const selectedProduct = button.dataset.productsTarget
        button.classList.add('active-product')
        products.forEach( product => {
            const productType = product.dataset.products
            if(productType === selectedProduct) {
                product.classList.remove('hidden')
            } else {
                product.classList.add('hidden')
            }
        })
    })
})


function removeActiveButtons() {
    productButtons.forEach( button => {
        button.classList.remove('active-product')
    })
}

document.addEventListener("DOMContentLoaded", function () {
    let slider = new window.Splide('#products-slider', { arrows: false, pagination: false, type: "loop", gap: '87px'});
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
        // Or index if not loop
        // let maxHeight = heightMap[e.index] + "px";
        let maxHeight = heightMap[e.slideIndex] + "px";
        e.slide.style.maxHeight = maxHeight;
        e.slide.parentElement.style.maxHeight = maxHeight;
    });
    slider.mount();
});




// productSlider && new Splide('#products-slider', {
//     perPage: 1,
//     focus: 0,
//     type: "loop",
//     pagination: true,
//     gap: '87px',
//     autoHeight: true,
//     breakpoints: {
//         1024: {
//             perPage: 0,
//         }
//     },
//     classes: {
//         page: 'splide__pagination__page custom-pagination-item'
//     }
// }).mount();

// productSliderMobile && new Splide('#products-slider-mobile', {
//     perPage: 0,
//     focus: 0,
//     type: "loop",
//     pagination: true,
//     gap: '87px',
//     breakpoints: {
//         1024: {
//             perPage: 3,
//         },
//         768: {
//             perPage: 2,
//         },
//         500: {
//             perPage: 1,
//         }
//     },
//     classes: {
//         page: 'splide__pagination__page custom-pagination-item'
//     }
// }).mount();
//
// productsMaterial && new Splide('#products-material', {
//     perPage: 3,
//     focus: 0,
//     type: "loop",
//     pagination: true,
//     gap: '87px',
//     drag: false,
//     dragAngleThreshold: 0,
//     breakpoints: {
//         768: {
//             perPage: 2,
//             drag: true,
//         },
//         500: {
//             perPage: 1,
//         }
//     },
//     classes: {
//         page: 'splide__pagination__page custom-pagination-item'
//     }
// }).mount();
//
// productsManufactures && new Splide('#products-manufactures', {
//     perPage: 3,
//     focus: 0,
//     type: "loop",
//     pagination: true,
//     gap: '87px',
//     drag: false,
//     dragAngleThreshold: 0,
//     breakpoints: {
//         768: {
//             perPage: 2,
//             drag: true,
//         },
//         500: {
//             perPage: 1,
//         }
//     },
//     classes: {
//         page: 'splide__pagination__page custom-pagination-item'
//     }
// }).mount();
