tailwind.config = {
    theme: {
        fontFamily: {
            sans: ["Space Grotesk", "sans-serif"],
            mono: ["Space Mono", "monospace"]
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
                    DEFAULT: "#222222"
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