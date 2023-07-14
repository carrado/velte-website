export default function carousel() {
    const imgArray = [
        {
            id: 1,
            value: '/carousel-photo-01.png',
            thumbnail: '/carousel-photo-01.png',
        },
        {
            id: 2,
            value: '/carousel-photo-02.png',
            thumbnail: '/carousel-photo-02.png',
        },
        {
            id: 3,
            value: '/carousel-photo-03.png',
            thumbnail: '/carousel-photo-03.png',
        },
    ];
    // NB: You can push more objects into the (imgArray) array

    // Get total Length of image array set above.
    // This will define for us the number of image sets we are working with
    const imageLength = imgArray.length;


    function slideImage(index) {
        let currentImage = {};

        // filter through to get the required array of object based on id number passed
        const currentArrayImage = imgArray.filter((array) => array.id === index);

        // convert the array of object to a plain Javascript object
        // First, loop through the filtered array
        for (let i = 0; i < currentArrayImage.length; i++) {
            Object.assign(currentImage, currentArrayImage[i]);
        }

        return currentImage;
    }

    function slideThumbnailImage(index) {
        let currentImage = {};

        // filter through to get the required array of object based on id number passed
        const currentArrayImage = imgArray.filter((array) => array.id === index);

        // convert the array of object to a plain Javascript object
        // First, loop through the filtered array
        for (let i = 0; i < currentArrayImage.length; i++) {
            Object.assign(currentImage, currentArrayImage[i]);
        }

        return currentImage;
    }

    return {
        slideImage,
        imageLength,
        slideThumbnailImage
    }

}