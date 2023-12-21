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




productSlider && new Splide('#products-slider', {
    perPage: 1,
    focus: 0,
    type: "loop",
    pagination: true,
    gap: '87px',
    breakpoints: {
        1024: {
            perPage: 0,
        }
    },
    classes: {
        page: 'splide__pagination__page custom-pagination-item'
    }
}).mount();

productSliderMobile && new Splide('#products-slider-mobile', {
    perPage: 0,
    focus: 0,
    type: "loop",
    pagination: true,
    gap: '87px',
    breakpoints: {
        1024: {
            perPage: 3,
        },
        768: {
            perPage: 2,
        },
        500: {
            perPage: 1,
        }
    },
    classes: {
        page: 'splide__pagination__page custom-pagination-item'
    }
}).mount();

productsMaterial && new Splide('#products-material', {
    perPage: 3,
    focus: 0,
    type: "loop",
    pagination: true,
    gap: '87px',
    drag: false,
    dragAngleThreshold: 0,
    breakpoints: {
        768: {
            perPage: 2,
            drag: true,
        },
        500: {
            perPage: 1,
        }
    },
    classes: {
        page: 'splide__pagination__page custom-pagination-item'
    }
}).mount();

productsManufactures && new Splide('#products-manufactures', {
    perPage: 3,
    focus: 0,
    type: "loop",
    pagination: true,
    gap: '87px',
    drag: false,
    dragAngleThreshold: 0,
    breakpoints: {
        768: {
            perPage: 2,
            drag: true,
        },
        500: {
            perPage: 1,
        }
    },
    classes: {
        page: 'splide__pagination__page custom-pagination-item'
    }
}).mount();