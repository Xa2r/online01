
if (document.querySelector("#gallery-default")) {
    const gallery = new Splide("#gallery-default", {
        pagination: false,
    });
    
        const thumbnails = new Splide("#thumbnail-gallery-default", {
        pagination: false,
        arrows: false,
        focus: "center",
        gap: 2.5,
        perPage: 6,
        isNavigation: true,
        breakpoints: {
            576: {
                perPage: 4
            }
        }
    });

    gallery.sync(thumbnails)
    gallery.mount();
    thumbnails.mount()
}

/** Color Picker **/
const defaultColors = {
    main: "#fffaf3",
    primary: "#f3e5d3",
    secondary: "#7c664e",
}

const cp = colorpicker(document.querySelector('.colorpicker__wrapper'), defaultColors, '');