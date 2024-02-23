import { Product } from "./types";
import p1 from "/public/assets/p1.png"
import p2 from "/public/assets/p2.png"
import p3 from "/public/assets/p3.png"
import p4 from "/public/assets/p4.png"
import p5 from "/public/assets/p5.png"
import p6 from "/public/assets/p6.png"
import p9 from "/public/assets/p9.png"
import p7 from "/public/assets/p7.png"
import p8 from "/public/assets/p8.png"

export const Products: Product[] = [
    {
        id: 1,
        title: 'Brushed Raglan Sweatshirt',
        category: "femail",
        tagline : "Dress",
        price: 150,
        image: p1,
    },
    {
        id: 2,
        title: 'Flex Sweatshirt',
        category: "femail",
        tagline : "Dress",
        price: 545,
        image: p2,
    },
    {
        id: 3,
        title: 'Cameryn Sash Tie Dress',
        category: "femail",
        tagline : "Dress",
        price: 175,
        image: p3,
    },
    {
        id: 4,
        title: 'Flex Push Button Bomber',
        category: "male",
        price: 190,
        tagline : "Jackets",
        image: p5,
    },
    {
        id: 5,
        title: 'Raglan Sweatshirt',
        category: "male",
        tagline : "Sweater",
        price: 225,
        image: p6,
    },
    {
        id: 6,
        title: 'Imperial Alpaca Hoodie',
        category: "femail",
        tagline : "Jackets",
        price: 175,
        image: p9,
    },
    {
        id: 7,
        title: 'Lite Sweatpants',
        category: "femail",
        tagline : "Pants",
        price: 165,
        image: p7,
    },
    {
        id: 8,
        title: 'Pink Fleece Sweatpants',
        category: "femail",
        tagline : "Pants",
        price: 195,
        image: p8,
    },
    {
        id: 9,
        title: 'Flex Sweatpants',
        category: "femail",
        tagline : "Pants",
        price: 175,
        image: p4,
    },
];