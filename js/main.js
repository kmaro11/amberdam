tailwind.config = {
    theme: {
        fontFamily: {
            'arial': ['Arial', 'sans-serif'],
            'times': ['Times New Roman', 'sans-serif']
        },
        extend: {
            fontSize: {
                mobileSubtitle: '32px',
                subtitle: '40px'
            },
            colors: {
                red: {
                    DEFAULT: "#DC3C44",
                    light: "#DD5130",
                    lighter: "#F08B8B"
                },
                orange: {
                    DEFAULT: "#EA690B",
                    lighter: "#FBE1CE"
                },
                yellow: {
                    DEFAULT: "#E5D117",
                    light: "#E7DB75"
                },
                blue: {
                    DEFAULT: "#2B2D40",
                    light: "#CCE0FC",
                    lighter: "#EBF0FA",

                },
                black: {
                    DEFAULT: "#000000",
                },
                grey: {
                    DEFAULT: "#8F99AC",
                    light: "#EEF2F4",
                    hover: "#E1E8EB"
                },
            },
            maxWidth: {
                container: "1247px"
            }
        }
    }
}

const menuButton = document.querySelectorAll('[data-open-menu]');
const productButton = document.querySelector('[data-product-button]');
const menu = document.querySelector('[data-menu]');
const menuItems = menu.querySelectorAll('li')

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    })
})

productButton.addEventListener('click', () => {
    menu.classList.remove('active');
})
menuButton.forEach(button => {
    button.addEventListener('click', () => {
        menu.classList.toggle('active');
    })
})
