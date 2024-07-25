"use client";

const Imagegetter = () => {
    const images = [];
    for (let i = 1; i <= 10; i++) { // Assume there are 10 images
      images.push({ src: `/images/image${i}.jpg`, isSelected: false });
    }
    return images;
  };

export default Imagegetter
