import { BlockContent, BlogPost } from "@/sanity/queries/blogs";

export type BookType = {
  title: string;
  description: string;
  img?: string;
  img_url?: string;
  url?: string;
  url_2?: string;
  price_ngn: string;
  price_usd: string;
  displayPrice?: string;
  format: {
    type: string;
    url: string;
    price: string;
  }[];
  dop: string;
  pages: string;
  language: string;
};

export const navLinks = [
  {
    title: "Home",
    url: "/",
    icon: "",
    dropdown: false,
  },
  {
    title: "About",
    url: "/about",
    icon: "",
    dropdown: false,
  },
  {
    title: "Events",
    url: "/events",
    icon: "",
    dropdown: false,
  },
  {
    title: "Shop",
    url: "/shop",
    icon: "",
    dropdown: false,
  },
  {
    title: "Bookings",
    url: "/bookings",
    icon: "",
    dropdown: false,
  },
  {
    title: "Blogs",
    url: "/blogs",
    icon: "",
    dropdown: false,
  },
  {
    title: "Ministry",
    url: "#",
    icon: "",
    dropdown: true,
    dropdownItem: [
      {
        title: "Music Ministry",
        url: "/music-ministry",
        icon: "",
      },
      {
        title: "Marriage Ministry",
        url: "/marriage-ministry",
        icon: "",
      },
    ],
  },
];
export const adminNavLinks = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: "fa fa-tachometer-alt me-2",
    dropdown: false,
  },
  {
    title: "Bookings",
    url: "/admin/bookings",
    icon: "fa fa-calendar me-2",
    dropdown: false,
  },
  {
    title: "Music",
    url: "/admin/music",
    icon: "fa fa-music me-2",
    dropdown: false,
  },
  {
    title: "Video",
    url: "/admin/video",
    icon: "fa fa-video me-2",
    dropdown: false,
  },
];

export const blogs = [
  {
    id: "1",
    title: "GOD AT WORK",
    author: "Ayodeji Anifowose",
    date: "2 October 2019",
    description:
      "In my 35 years of life, I have had the opportunity to travel to different places. I noticed that when there’s ongoing construction, the company blocks off the building premises (hiding the view) for various purposes, including security",
    url: "https://greatfathergreathusband.blogspot.com/2019/10/god-at-work.html",
    image_url:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3TlOMfAztiftiUaojdTTjWhfW3JpjVa_2zGmqNdxiXDBrDDtKubrAPb_lsyFU9FkpoT_XcrFHgV1-kblRZY6auD77H5yDvjrnu7xwktGviFgxHU0IDDdq92ymPmpuRzhGEQhFUmb6i_ABQ631ihUeqKE514Hhbc6HJU19J8Qxl_tvDzi3i8qCN667dMxj/s1600/God%20at%20work%201.png",
  },
  {
    id: "2",
    title: "GOD IS STILL AT WORK",
    author: "Ayodeji Anifowose",
    date: "4 October 2019",
    description:
      "After writing the previous post, I thought I was done with this topic but God still has a lot for us. One of my friends pointed out one of the many reasons God doesn’t want us to see the process of His work.",
    image_url:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCvD9qLT02Uk86zslKFqmPhCJ4u8YdD7SqjzRTS9LK-EYLA5Q59JPmWN_bZYz4eb-4a_02zhlegPG624r7EpCN6GOWXT3R8nkLQIbFKzYktvObrdYxUq6gknN6koPop4Chs1Zy01C0Jwsh6U3HsSceI0mtlRgIu_G8FVmjgoqYlDh-Pi8vBdGVvSAEMmeW/s1600/God%20is%20still%20at%20work.webp",
    url: "https://greatfathergreathusband.blogspot.com/2019/10/god-is-still-at-work.html",
  },
  {
    id: "3",
    title: "TAKE MY LIFE",
    author: "Ayodeji Anifowose",
    date: "29 November 2015",
    description:
      "After accepting the life of Christ as far back as November 1998, I started as a zealous brother in the Lord. I led Bible study for Scripture Union Nigeria in my secondary school.",
    url: "https://greatfathergreathusband.blogspot.com/2015/11/take-my-life_29.html",
    image_url:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcB9MnRMjFahhF-W2neeqnK70sdW-1apRall92P8HLxtmSgNhAdJyw-PBuOazlcj0n63kSoTxrIrmwilFLelKEwESN5hjR_Utlm6jgTjwhmBGxO5sbjVOLHa5XQB-XhfmH3_45hVw58TTKqZNBJ_LkFbpOdjfunLhAPEaZCfI5TCXGyDa1PO-MbTBIyJUZ/s1600/Take-My-Life.webp",
  },
];
export const books = [
  // Promo
  {
    id: "devotion-on-obedience-bundle",
    slug: "devotion-on-obedience-bundle",
    title: "Devotion on Obedience Bundle",
    description:
      "A curated trio for families: inspirational and child-friendly titles bundled at a special price.",
    img: "21-days-children-devotion-on-obedience-bundle.jpg",
    img_url: "21-days-children-devotion-on-obedience-bundle-landscape.jpg",
    url: "",
    url_2: "",
    price_ngn: "20000",
    price_usd: "70",
    // discounted bundle price
    sale_price_ngn: "20000",
    sale_price_usd: "60",
    onSale: true,
    stock: 25,
    dop: "September 2024",
    createdAt: "2024-09-10",
    displayPrice: "",
    format: [] as {
      type: string;
      url: string;
      price: string;
    }[],
    pages: "",
    language: "",
  },

  {
    id: "devotion-on-identity-bundle",
    slug: "devotion-on-identity-bundle",
    title: "Devotion on Identity Bundle",
    description:
      "Three selected children's devotionals bundled at a special price for families and Sunday Schools.",
    img: "21-days-children-devotion-on-identity-bundle.jpg",
    img_url: "21-days-children-devotion-on-identity-bundle-landscape.jpg",
    url: "",
    url_2: "",
    price_ngn: "24000",
    price_usd: "80",
    sale_price_ngn: "20000",
    sale_price_usd: "60",
    onSale: true,
    stock: 15,
    dop: "September 2024",
    createdAt: "2024-09-10",
    displayPrice: "",
    format: [] as {
      type: string;
      url: string;
      price: string;
    }[],
    pages: "",
    language: "",
  },

  {
    id: "devotion-on-integrity-bundle",
    slug: "devotion-on-integrity-bundle",
    title: "Devotion on Integrity Bundle",
    description:
      "Three books focused on integrity, offered together at a promotional price.",
    img: "21-days-children-devotion-on-integrity-bundle.jpg",
    img_url: "21-days-children-devotion-on-integrity-bundle-landscape.jpg",
    url: "",
    url_2: "",
    price_ngn: "26000",
    price_usd: "90",
    sale_price_ngn: "20000",
    sale_price_usd: "60",
    onSale: true,
    stock: 10,
    dop: "September 2024",
    createdAt: "2024-09-10",
    displayPrice: "",
    format: [] as {
      type: string;
      url: string;
      price: string;
    }[],
    pages: "",
    language: "",
  },
  // new
  {
    title: "Tommy too can win",
    description: `21 Days of Integrity is a beautifully illustrated devotional designed specifically for children, helping them understand the power and importance of integrity in everyday life. Each day of the 21-day journey invites young readers to discover what it means to live with honesty, honor, and truthfulness in all situations—whether at school, with friends, or at home. Through fun, engaging stories, Bible verses, and illustrations/ activities that bring each lesson to life, this book teaches children the foundational value of integrity and how to apply it to their daily choices. Why 21 Days? Research shows that it takes 21 days to form a habit. This devotional is crafted to help children build the habit of living with integrity by guiding them through three weeks of intentional learning, reflection, and application. By focusing on one virtue every day, children will grow in their understanding of integrity and develop a character that reflects truth and righteousness.`,
    img: "tommy-too-can-win.jpg",
    img_url: "",
    url: "",
    url_2: "",
    price_ngn: "7000",
    price_usd: "25",
    displayPrice: "",
    format: [
      {
        type: "Paperback",
        url: "https://www.amazon.com/21-Days-Devotion-Integrity-Children/dp/B0DHY47PGY/ref=monarch_sidesheet_title",
        price: "$25.00",
      },
    ],
    dop: "September 24, 2024",
    pages: "91 pages",
    language: "English",
  },
  {
    title: "Bible jobs for little gems",
    description: `21 Days of Integrity is a beautifully illustrated devotional designed specifically for children, helping them understand the power and importance of integrity in everyday life. Each day of the 21-day journey invites young readers to discover what it means to live with honesty, honor, and truthfulness in all situations—whether at school, with friends, or at home. Through fun, engaging stories, Bible verses, and illustrations/ activities that bring each lesson to life, this book teaches children the foundational value of integrity and how to apply it to their daily choices. Why 21 Days? Research shows that it takes 21 days to form a habit. This devotional is crafted to help children build the habit of living with integrity by guiding them through three weeks of intentional learning, reflection, and application. By focusing on one virtue every day, children will grow in their understanding of integrity and develop a character that reflects truth and righteousness.`,
    img: "bible-jobs-for-little-gems.jpg",
    price_ngn: "6000",
    price_usd: "25",
    format: [
      {
        type: "Paperback",
        url: "https://www.amazon.com/21-Days-Devotion-Integrity-Children/dp/B0DHY47PGY/ref=monarch_sidesheet_title",
        price: "$25.00",
      },
    ],
    dop: "September 24, 2024",
    pages: "91 pages",
    language: "English",
  },
  {
    title: "Bible Heroes",
    description: `21 Days of Integrity is a beautifully illustrated devotional designed specifically for children, helping them understand the power and importance of integrity in everyday life. Each day of the 21-day journey invites young readers to discover what it means to live with honesty, honor, and truthfulness in all situations—whether at school, with friends, or at home. Through fun, engaging stories, Bible verses, and illustrations/ activities that bring each lesson to life, this book teaches children the foundational value of integrity and how to apply it to their daily choices. Why 21 Days? Research shows that it takes 21 days to form a habit. This devotional is crafted to help children build the habit of living with integrity by guiding them through three weeks of intentional learning, reflection, and application. By focusing on one virtue every day, children will grow in their understanding of integrity and develop a character that reflects truth and righteousness.`,
    img: "bible-heroes.jpg",
    price_ngn: "7000",
    price_usd: "25",
    format: [
      {
        type: "Paperback",
        url: "https://www.amazon.com/21-Days-Devotion-Integrity-Children/dp/B0DHY47PGY/ref=monarch_sidesheet_title",
        price: "$25.00",
      },
    ],
    dop: "September 24, 2024",
    pages: "91 pages",
    language: "English",
  },
  {
    title: "Little Alfie, How are you?",
    description: `21 Days of Integrity is a beautifully illustrated devotional designed specifically for children, helping them understand the power and importance of integrity in everyday life. Each day of the 21-day journey invites young readers to discover what it means to live with honesty, honor, and truthfulness in all situations—whether at school, with friends, or at home. Through fun, engaging stories, Bible verses, and illustrations/ activities that bring each lesson to life, this book teaches children the foundational value of integrity and how to apply it to their daily choices. Why 21 Days? Research shows that it takes 21 days to form a habit. This devotional is crafted to help children build the habit of living with integrity by guiding them through three weeks of intentional learning, reflection, and application. By focusing on one virtue every day, children will grow in their understanding of integrity and develop a character that reflects truth and righteousness.`,
    img: "little-alfie.jpg",
    price_ngn: "8000",
    price_usd: "25",
    format: [
      {
        type: "Paperback",
        url: "https://www.amazon.com/21-Days-Devotion-Integrity-Children/dp/B0DHY47PGY/ref=monarch_sidesheet_title",
        price: "$25.00",
      },
    ],
    dop: "September 24, 2024",
    pages: "91 pages",
    language: "English",
  },
  {
    title: "14 days of Affirmation and Declaration",
    description: `14 Days of Affirmation and Declaration is a beautifully illustrated devotional designed specifically for children, helping them understand the power and importance of affirming and declaring their faith in God. Each day of the 14-day journey invites young readers to discover what it means to live with faith, hope, and love in all situations—whether at school, with friends, or at home. Through fun, engaging stories, Bible verses, and illustrations/ activities that bring each lesson to life, this book teaches children the foundational value of affirming and declaring their faith and how to apply it to their daily choices. Why 14 Days? Research shows that it takes 14 days to form a habit. This devotional is crafted to help children build the habit of living with faith by guiding them through two weeks of intentional learning, reflection, and application. By focusing on one virtue every day, children will grow in their understanding of faith and develop a character that reflects truth and righteousness.`,
    img: "14-days-of-affirmation-and-declaration.png",
    price_ngn: "6000",
    price_usd: "25",
    format: [
      {
        type: "Paperback",
        url: "https://www.amazon.com/21-Days-Devotion-Integrity-Children/dp/B0DHY47PGY/ref=monarch_sidesheet_title",
        price: "$25.00",
      },
    ],
    dop: "September 24, 2024",
    pages: "91 pages",
    language: "English",
  },

  {
    title: "The reality of a Christian Marriage",
    description: `21 Days of Integrity is a beautifully illustrated devotional designed specifically for children, helping them understand the power and importance of integrity in everyday life. Each day of the 21-day journey invites young readers to discover what it means to live with honesty, honor, and truthfulness in all situations—whether at school, with friends, or at home. Through fun, engaging stories, Bible verses, and illustrations/ activities that bring each lesson to life, this book teaches children the foundational value of integrity and how to apply it to their daily choices. Why 21 Days? Research shows that it takes 21 days to form a habit. This devotional is crafted to help children build the habit of living with integrity by guiding them through three weeks of intentional learning, reflection, and application. By focusing on one virtue every day, children will grow in their understanding of integrity and develop a character that reflects truth and righteousness.`,
    img: "the-reality-of-christian-marriage.jpg",
    price_ngn: "10000",
    price_usd: "25",
    format: [
      {
        type: "Paperback",
        url: "https://www.amazon.com/21-Days-Devotion-Integrity-Children/dp/B0DHY47PGY/ref=monarch_sidesheet_title",
        price: "$25.00",
      },
    ],
    dop: "September 24, 2024",
    pages: "91 pages",
    language: "English",
  },
  {
    title: "Just Before you get Married",
    description: `21 Days of Integrity is a beautifully illustrated devotional designed specifically for children, helping them understand the power and importance of integrity in everyday life. Each day of the 21-day journey invites young readers to discover what it means to live with honesty, honor, and truthfulness in all situations—whether at school, with friends, or at home. Through fun, engaging stories, Bible verses, and illustrations/ activities that bring each lesson to life, this book teaches children the foundational value of integrity and how to apply it to their daily choices. Why 21 Days? Research shows that it takes 21 days to form a habit. This devotional is crafted to help children build the habit of living with integrity by guiding them through three weeks of intentional learning, reflection, and application. By focusing on one virtue every day, children will grow in their understanding of integrity and develop a character that reflects truth and righteousness.`,
    img: "just-before-you-get-married.jpg",
    price_ngn: "10000",
    price_usd: "25",
    format: [
      {
        type: "Paperback",
        url: "https://www.amazon.com/21-Days-Devotion-Integrity-Children/dp/B0DHY47PGY/ref=monarch_sidesheet_title",
        price: "$25.00",
      },
    ],
    dop: "September 24, 2024",
    pages: "91 pages",
    language: "English",
  },
  //old
  {
    title:
      "21 Days Devotion on Integrity: Children Edition Paperback – September 24",
    description: `21 Days of Integrity is a beautifully illustrated devotional designed specifically for children, helping them understand the power and importance of integrity in everyday life. Each day of the 21-day journey invites young readers to discover what it means to live with honesty, honor, and truthfulness in all situations—whether at school, with friends, or at home. Through fun, engaging stories, Bible verses, and illustrations/ activities that bring each lesson to life, this book teaches children the foundational value of integrity and how to apply it to their daily choices. Why 21 Days? Research shows that it takes 21 days to form a habit. This devotional is crafted to help children build the habit of living with integrity by guiding them through three weeks of intentional learning, reflection, and application. By focusing on one virtue every day, children will grow in their understanding of integrity and develop a character that reflects truth and righteousness.`,
    img_url: "https://m.media-amazon.com/images/I/61EMsAWYt1L._SY466_.jpg",
    url: "https://www.amazon.com/21-Days-Devotion-Integrity-Children/dp/B0DHY47PGY/ref=monarch_sidesheet_title",
    url_2: "",
    price_ngn: "9000",
    price_usd: "25",
    displayPrice: "",
    format: [
      {
        type: "Paperback",
        url: "https://www.amazon.com/21-Days-Devotion-Integrity-Children/dp/B0DHY47PGY/ref=monarch_sidesheet_title",
        price: "$25.00",
      },
    ],
    dop: "September 24, 2024",
    pages: "91 pages",
    language: "English",
  },
  {
    title: "Opolo Eja (Fish Brain)",
    description: `This story is not a work of fiction; it is a true account of my own journey in discovering and developing my identity in Christ. Through this book, you will learn who you are in Christ and understand that no matter the challenges you face, they do not change the fact that you are gifted by God. The words you speak have the power to change lives for good or bad. I encourage you not to read this book just once, but to revisit it over and over again until your heart is transformed into the person God has called you to be, according to His Word.`,
    img_url: "https://m.media-amazon.com/images/I/61k-TdeDyVL._SY466_.jpg",
    url: "https://www.amazon.com/Opolo-Fish-Brain-Ayodeji-Anifowose/dp/B0DFVGG9DH/ref=monarch_sidesheet_title",
    url_2: "",
    price_ngn: "6000",
    price_usd: "15",
    displayPrice: "",
    format: [
      {
        type: "Paperback",
        url: "https://www.amazon.com/Opolo-Fish-Brain-Ayodeji-Anifowose/dp/B0DFVGG9DH/ref=monarch_sidesheet_title",
        price: "$16.00",
      },
    ],
    dop: "August 31, 2024",
    pages: "24 pages",
    language: "English",
  },
  {
    title: "21 Days Devotional on Identity: Children Edition",
    description: `The 21-day Devotional on Identity according to 1 Peter 2:9 is a spiritually enriching devotional designed to guide children on a transformative journey toward self-discovery in Christ. Each day features a theme rooted in Biblical principles, aiming to unveil the layers of our identity as defined by God's word, not by the world. The book's purpose is to provide readers with a structured path to understanding their unique identity through scripture, prayer, and reflection. It's for children who seek to deepen their relationship with God, and gain clarity on their purpose and calling as seen through the lens of their faith even at their tender age.`,
    img_url: "https://m.media-amazon.com/images/I/61xpKuNqlbL._SY342_.jpg",
    url: "https://www.amazon.com/21-Days-Devotional-Identity-Children/dp/B0D5LP7BHG/ref=monarch_sidesheet",
    url_2:
      "https://rhbooks.com.ng/product/21-days-children-devotional-on-identity/",
    price_ngn: "9000",
    price_usd: "25",
    displayPrice: "",
    format: [
      {
        type: "Paperback",
        url: "https://www.amazon.com/21-Days-Devotional-Identity-Children/dp/B0D5LP7BHG/ref=monarch_sidesheet",
        price: "$20.00",
      },
    ],
    dop: "June 9, 2024",
    pages: "87 pages",
    language: "English",
  },
  {
    url_2: "",
    price_ngn: "6000",
    price_usd: "18.99",
    displayPrice: "",
    title: "A TRANSFORMED LIFE: The story of my Transformation",
    description: `God transformed my life from a life of pains, ridicule, and mockery to a life of beauty and glory. Life is full of ups and downs. It is indeed 'not a bed of roses' as the saying goes. Every individual has one thing or the other to combat, regardless of age, sex, religion, education, etc. These challenges range from stammering, dumbness, deafness, blindness, etc.
    However, every individual must have a positive attitude and be hopeful towards these challenges to live above them and thrive. This is the essence of this book, "The Transformed Life" - providing hope, succor, comfort, and solutions to victims of life's challenges.
    Whatever your ugly condition might be, God can speak to you through the revelation contained in this book. Get your copy, read, apply the concepts, and be transformed!`,
    img_url: "https://m.media-amazon.com/images/I/61eQutLu5jL._SY466_.jpg",
    url: "https://www.amazon.com/dp/B0D3MDLQ25/ref=monarch_sidesheet",
    format: [
      {
        type: "Kindle Edition",
        url: "https://www.amazon.com/TRANSFORMED-LIFE-story-Transformation-ebook/dp/B0D3KLGLBP/ref=monarch_sidesheet",
        price: "$0.00",
      },
      {
        type: "Paperback",
        url: "https://www.amazon.com/dp/B0D3MDLQ25/ref=monarch_sidesheet",
        price: "$18.99",
      },
    ],
    dop: "May 8, 2024",
    pages: "107 pages",
    language: "English",
  },
  {
    url_2: "",
    price_ngn: "6000",
    price_usd: "16.99",
    displayPrice: "",
    title: "HEAVEN ON EARTH: Experiencing God in Your Marriage",
    description: `Marriage is a sacred institution designed by God that brings a man and a woman together as one.
    The marital union between a man and woman is a reflection of the unity between the Godhead – Father, Son and Holy Spirit; and the love shared between husband and wife mirrors God’s love for humanity.
    "Heaven on Earth: Experiencing God in Your Marriage” explores the divine blueprint for marriage as revealed in God’s Word, drawing upon principles rooted in faith, love and unity that can transform a marital bond into an expression of heaven on earth.
    As you read this book, may your marriage truly reflect God’s love for humanity, may your marital bond become stronger, and may you experience God in your marriage. Amen.`,
    img_url: "https://m.media-amazon.com/images/I/717n4OySFWL._SY385_.jpg",
    url: "https://www.amazon.com/HEAVEN-EARTH-Experiencing-Your-Marriage/dp/B0CVWXQ1B9/ref=monarch_sidesheet",
    format: [
      {
        type: "Kindle Edition",
        url: "https://www.amazon.com/HEAVEN-EARTH-Experiencing-Your-Marriage-ebook/dp/B0CVV3B1YV/ref=monarch_sidesheet",
        price: "$0.00",
      },
      {
        type: "Paperback",
        url: "https://www.amazon.com/HEAVEN-EARTH-Experiencing-Your-Marriage/dp/B0CVWXQ1B9/ref=monarch_sidesheet",
        price: "$16.99",
      },
    ],
    dop: "February 25, 2024",
    pages: "121 pages",
    language: "English",
  },
  {
    url_2: "",
    price_ngn: "6000",
    price_usd: "12.99",
    displayPrice: "",
    title: "PARENTING PRINCIPLES",
    description: `Parenting is the most important job in the world. Unfortunately, there is no formal training for it. Parents play a critical role in shaping the lives of their children, and by extension, future generations.
    More than a role and responsibility, parenting is a divine calling and assignment, as children are a gift from God. There are various principles passed down to us by God, the Master Parent, in the Bible to guide us in parenting.
    In this book, “Parenting Principles”, you will learn important principles of parenting, according to God’s word, to guide you in raising children in line with godly standards. This book is a divine framework filled with biblical wisdom and practical advice to help you in your parenting journey, a journey I am also on.
    As you read “Parenting Principles”, apply the principles written in it and become a star parent, raising, guiding and shaping future generations, one child at a time.`,
    img_url: "https://m.media-amazon.com/images/I/61IVqUt4sOL._SY385_.jpg",
    url: "https://www.amazon.com/LOVE-Essence-Christianity-AYODEJI-ANIFOWOSE/dp/B0CX1M237S/ref=monarch_sidesheet",
    format: [
      {
        type: "Kindle Edition",
        url: "https://www.amazon.com/PARENTING-PRINCIPLES-AYODEJI-ANIFOWOSE-ebook/dp/B0CW1DWTLX/ref=monarch_sidesheet",
        price: "$0.00",
      },
      {
        type: "Paperback",
        url: "https://www.amazon.com/PARENTING-PRINCIPLES-AYODEJI-ANIFOWOSE/dp/B0CXXLL1XX/ref=monarch_sidesheet",
        price: "$12.99",
      },
    ],
    dop: "March 12, 2024",
    pages: "85 pages",
    language: "English",
  },
  {
    url_2: "",
    price_ngn: "6000",
    price_usd: "13.99",
    displayPrice: "",
    title: "LOVE: The Essence of Christianity",
    description: `Love’ is a popular concept with various wrong definitions. However, the Bible, which is the ever true and reliable word of God defines and explains what love is. “LOVE, The Essence of Christianity” sheds light on the unconditional love of God. It explains love as a sacrificial act by delving into the sacrificial love of Christ; it explores selflessness, true love and practical examples of sacrificial love. In this book, we will examine LOVE as explained in the bible as the core of Jesus’ message and the foundation of Christianity. As you read this book, may you understand God’s love for you, and become a channel of that love to everyone around you.`,
    img_url: "https://m.media-amazon.com/images/I/610FUsQB92L._SY385_.jpg",
    url: "https://www.amazon.com/LOVE-Essence-Christianity-AYODEJI-ANIFOWOSE/dp/B0CX1M237S/ref=monarch_sidesheet",
    format: [
      {
        type: "Kindle Edition",
        url: "https://www.amazon.com/LOVE-Essence-Christianity-AYODEJI-ANIFOWOSE-ebook/dp/B0CWS57Q38/ref=monarch_sidesheet",
        price: "$0.00",
      },
      {
        type: "Paperback",
        url: "https://www.amazon.com/LOVE-Essence-Christianity-AYODEJI-ANIFOWOSE/dp/B0CX1M237S/ref=monarch_sidesheet",
        price: "$13.99",
      },
    ],
    dop: "March 10, 2024",
    pages: "80 pages",
    language: "English",
  },
  {
    url_2: "",
    price_ngn: "6000",
    price_usd: "15.99",
    displayPrice: "",
    title: "THE 7 ULTIMATE LANGUAGES OF GOD",
    description: `THE 7 ULTIMATE LANGUAGES OF GOD' is a book written to express the languages that can easily get God's attention. Each language, in addition to being a means of communication, reveals a unique aspect of God's character. The 7 Ultimate Languages of God will help you communicate better and more clearly with God. The book will serve a guide for every believer who desires growth in his or her individual walk with God`,
    img_url: "https://m.media-amazon.com/images/I/61yL7-ovRRL._SY385_.jpg",
    url: "https://www.amazon.com/7-ULTIMATE-LANGUAGES-GOD/dp/B0CX1813YK/ref=monarch_sidesheet",
    format: [
      {
        type: "Kindle Edition",
        url: "https://www.amazon.com/7-ULTIMATE-LANGUAGES-GOD-ebook/dp/B0CW1HTN5H/ref=monarch_sidesheet",
        price: "$4.99",
      },
      {
        type: "Paperback",
        url: "https://www.amazon.com/7-ULTIMATE-LANGUAGES-GOD/dp/B0CX1813YK/ref=monarch_sidesheet",
        price: "$15.99",
      },
    ],
    dop: "March 2, 2024",
    pages: "83 pages",
    language: "English",
  },
  {
    url_2: "",
    price_ngn: "6000",
    price_usd: "20",
    displayPrice: "",
    title: "THE POWER OF THE SECOND LOOK",
    description: `The Power of The Second Look" is more than just a book; it is your guide for life. Have you ever wondered what it would take to live a glorious life? Have you ever asked yourself what it would take to avoid unnecessary mistakes and judgment? Of course, we have all pondered these questions, often only after making a significant mistake that we may end up regretting for life. This book, "The Power of the Second Look," serves as a shepherd whose goal is to guide you safely into God's best for you. It aims to ensure that in life, business, relationships, academics, and all your dealings, your mistakes are minimized because you've learned to go beyond the surface. You've learned to see with clarity, to gather facts, and to perceive as God does, enabling you to judge as God judges`,
    img_url: "https://m.media-amazon.com/images/I/61ityGXrvVL._SY385_.jpg",
    url: "https://www.amazon.com/POWER-SECOND-LOOK-AYODEJI-ANIFOWOSE/dp/B0CX8HYYJ1/ref=monarch_sidesheet",
    format: [
      {
        type: "Kindle Edition",
        url: "https://www.amazon.com/POWER-SECOND-LOOK-AYODEJI-ANIFOWOSE-ebook/dp/B0CWZZ3C64/ref=monarch_sidesheet",
        price: "$4.99",
      },
      {
        type: "Paperback",
        url: "https://www.amazon.com/POWER-SECOND-LOOK-AYODEJI-ANIFOWOSE/dp/B0CX8HYYJ1/ref=monarch_sidesheet",
        price: "$20.00",
      },
    ],
    dop: "March 5, 2024",
    pages: "163 pages",
    language: "English",
  },
  {
    url_2: "",
    price_ngn: "6000",
    price_usd: "14.99",
    displayPrice: "",
    title:
      "THE ANOINTING AND THE ANOINTED: Sustaining the Power of God in the Life of a Man using the lives of Samuel, Elijah, and Elisha as case studies",
    description: `It is important to remember that God's divine plan for all humankind at the very beginning was great. It serves as a reminder that we were created with purpose and intentionality by a loving Creator who desires that we live fulfilling lives in harmony, peace, health, and joy. The devil came and scattered the plan of God in the Garden of Eden; however, our loving God wouldn't give up on restoring man to his unique position and design. That's why He has been sending His anointed right from time to deliver His people from all works of the devil. This book, "The Anointing and the Anointed," therefore explores the life of some selected Anointed men of God, projecting their lives and drawing vital lessons that would go a long way in receiving and sustaining God's anointing upon the present day’s believers and servants of God. Are you a child of God, a believer, or a servant of God? This book is just for you! You can't afford to miss reading it. Get your own copy, read, apply, and share your testimonies.`,
    img_url: "https://m.media-amazon.com/images/I/71WX8tSUy7L._SY385_.jpg",
    url: "https://www.amazon.com/ANOINTING-ANOINTED-Sustaining-Samuel-studies/dp/B0CX1BX5ZT/ref=monarch_sidesheet",
    format: [
      {
        type: "Kindle Edition",
        url: "https://www.amazon.com/ANOINTING-ANOINTED-Sustaining-Samuel-studies-ebook/dp/B0CW1HF4GH/ref=monarch_sidesheet",
        price: "$0.00",
      },
      {
        type: "Paperback",
        url: "https://www.amazon.com/ANOINTING-ANOINTED-Sustaining-Samuel-studies/dp/B0CX1BX5ZT/ref=monarch_sidesheet",
        price: "$14.99",
      },
    ],
    dop: "March 9, 2024",
    pages: "85 pages",
    language: "English",
  },
  {
    url_2: "",
    price_ngn: "6000",
    price_usd: "15.99",
    displayPrice: "",
    title: "FATHERHOOD UNVEILED: (God's Blueprint Through Abraham)",
    description: `Fatherhood is a profound and transformative experience that goes beyond biological ties. Dads play a pivotal role in the family, shaping the lives of their children and leaving a lasting impact on their development.
      A father’s guidance and presence are irreplaceable; creating a strong foundation for his children to thrive. There are seven key dimensions that fathers represent. Do you care to know? That's why this book is just for you!
      Get your own copy of this book "Fatherhood Unveiled", read, apply, and become the right father God designed for you, your family and posterity. I await your testimonies!`,
    img_url: "https://m.media-amazon.com/images/I/61h8jUOx23L._SY385_.jpg",
    url: "https://www.amazon.com/FATHERHOOD-UNVEILED-Blueprint-Through-Abraham/dp/B0CW9T5PF7/ref=monarch_sidesheet",
    format: [
      {
        type: "Kindle Edition",
        url: "https://www.amazon.com/FATHERHOOD-UNVEILED-Blueprint-Through-Abraham-ebook/dp/B0CVXVRC8Q/ref=monarch_sidesheet",
        price: "$0.00",
      },
      {
        type: "Paperback",
        url: "https://www.amazon.com/FATHERHOOD-UNVEILED-Blueprint-Through-Abraham/dp/B0CW9T5PF7/ref=monarch_sidesheet",
        price: "$15.00",
      },
    ],
    dop: "March 9, 2024",
    pages: "115 pages",
    language: "English",
  },
  {
    url_2: "",
    price_ngn: "6000",
    price_usd: "20",
    displayPrice: "",
    title:
      "FIRE ON MY ALTAR: (A Guide To Maintaining A Prayerful Life For Men, Husbands, And Fathers)",
    description: `As men, it’s very easy to get caught up in the busyness of life, and the responsibilities that come with masculinity, which could lead to a disconnect from God.
      In this book, men, husbands and fathers will learn the significance of prayer in helping to shoulder the burden of these responsibilities, cultivating a deeper relationship with God, and providing nourishment for the soul.
      “Fire on My Altar” is a practical guide for men, husbands, and fathers who desire to maintain a fervent prayerful life, draw closer to God, pass on the legacy of faith through prayer to their families, and fan the flames on their altar. May this book inspire you, and cause the fire on your altar to burn brightly in Jesus’ name. Amen!`,
    img_url: "https://m.media-amazon.com/images/I/61z3uv3Uo4L._SY385_.jpg",
    url: "https://www.amazon.com/FIRE-MY-ALTAR-Maintaining-Prayerful/dp/B0CVV1ZL3W/ref=monarch_sidesheet",
    format: [
      {
        type: "Kindle Edition",
        url: "https://www.amazon.com/FIRE-MY-ALTAR-Maintaining-Prayerful-ebook/dp/B0CVSFF57G/ref=monarch_sidesheet",
        price: "$6.99",
      },
      {
        type: "Paperback",
        url: "https://www.amazon.com/FIRE-MY-ALTAR-Maintaining-Prayerful/dp/B0CVV1ZL3W/ref=monarch_sidesheet",
        price: "$20.00",
      },
    ],
    dop: "February 25, 2024",
    pages: "115 pages",
    language: "English",
  },
  {
    title: "BIBLICAL WAYS TO SUSTAIN LOVE AND ROMANCE IN YOUR MARRIAGE",
    description:
      "Love and Romance are core ingredients for a long and sustaining marriage. However, as time goes on, many couples lose touch with the initial belly fluttering love and romance their relationship began with, causing the marriage to become monotonous. In this book, “Biblical Ways to Sustain Love and Romance in Your Marriage”, we will explore biblical truths, and draw out practical wisdom from exemplary marriages in the bible to guide us in maintaining love and romance in our marriages. We will find principles on communication, love languages, forgiveness, and various elements and virtues that deepen the love and romance within a marriage. As you read this book, may your marital relationship receive new life. Amen.",
    img_url: "https://m.media-amazon.com/images/I/61gLsnoaSJL._SY466_.jpg",
    url: "https://www.amazon.com/dp/B0CVMQDYQJ/ref=monarch_sidesheet",
    url_2: "",
    price_ngn: "6000",
    price_usd: "20",
    displayPrice: "",
    format: [
      {
        type: "Kindle Edition",
        url: "https://www.amazon.com/dp/B0CVMQDYQJ/ref=monarch_sidesheet",
        price: "$6.99",
      },
    ],
    dop: "February 25, 2024",
    pages: "105 pages",
    language: "English",
  },
  {
    title: "THE EAGLE - THE WINNING STRATEGY",
    url_2: "",
    price_ngn: "6000",
    price_usd: "23.99",
    displayPrice: "",

    description:
      "Embracing the Skies: Soaring with the Eagle's Spirit is a transformative journey through the teachings of nature's majestic sentinel, the eagle. In this inspiring book, we delve into the symbolic wisdom of the eagle's flight and explore how its attributes can guide us toward personal growth, resilience, and success in our own lives. Through vivid narratives, relatable anecdotes, and thoughtful reflections, readers are invited to soar alongside the eagle, embracing its spirit as a source of inspiration and guidance. Whether you seek to overcome challenges, cultivate a stronger faith, or leave a lasting legacy, this book explores how the eagle's lessons can elevate your journey and empower you to reach new heights. Join us on this captivating expedition into the skies and discover the transformative power of Embracing the Skies: Soaring with the Eagle's Spirit.",
    img_url: "https://m.media-amazon.com/images/I/61BFnWTR1bL._SY466_.jpg",
    url: "https://www.amazon.com/EAGLE-WINNING-STRATEGY-Ayodeji-Anifowose/dp/B0CMJCP2NW/ref=monarch_sidesheet",
    format: [
      {
        type: "Hardcover",
        url: "https://www.amazon.com/EAGLE-WINNING-STRATEGY-Ayodeji-Anifowose/dp/B0CMJCP2NW/ref=monarch_sidesheet",
        price: "$26.99",
      },
      {
        type: "Paperback",
        url: "https://www.amazon.com/EAGLE-WINNING-STRATEGY-Ayodeji-Anifowose/dp/B0CMK21LZK/ref=monarch_sidesheet",
        price: "$18.99",
      },
      {
        type: "Kindle Edition",
        url: "https://a.co/d/7rNNp0K",
        price: "$9.99",
      },
    ],
    dop: "November 2, 2023",
    pages: "141 pages",
    language: "English",
  },
  {
    title: "GOD'S AGENDA FOR MAN: EMBRACING TRUE MANHOOD",
    url_2: "",
    price_ngn: "10000",
    price_usd: "27",
    displayPrice: "",
    description:
      "God's Agenda for Man: Embracing True Manhood invites readers on a transformative journey of understanding and embracing their unique calling as men. Throughout this book, we will explore the Biblical principles and timeless truths that define true manhood according to God's design. We will discover the meaning and essence of true manhood as the book treats essential concerns such as identity, purpose, relationships, and responsibility, while embodying the character of Christ. The book also challenges cultural norms that often distort and devalue true manhood, offering instead a vision of masculinity grounded in God's Word. I’m assured this book will not only be part of your library collection but will truly change your life",
    img_url: "https://m.media-amazon.com/images/I/61MZgQP+AuL._SY466_.jpg",
    url: "https://www.amazon.com/GODS-AGENDA-MAN-EMBRACING-MANHOOD/dp/B0CLVGJYKL/ref=monarch_sidesheet",
    format: [
      {
        type: "Hardcover",
        url: "https://www.amazon.com/GODS-AGENDA-MAN-EMBRACING-MANHOOD/dp/B0CLVGJYKL/ref=monarch_sidesheet",
        price: "$30.00",
      },
      {
        type: "Paperback",
        url: "https://www.amazon.com/GODS-AGENDA-MAN-EMBRACING-MANHOOD/dp/B0CLVQK5Z7/ref=monarch_sidesheet",
        price: "$20.00",
      },
      {
        type: "Kindle Edition",
        url: "https://a.co/d/9pzoXOq",
        price: "$9.99",
      },
    ],
    dop: "November 4, 2023",
    pages: "223 pages",
    language: "English",
  },
];

export const hours = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_BASE_URL_DEV
    : process.env.NEXT_PUBLIC_BASE_URL_LIVE;

export const counseling = (str: string) => {
  return str === "premarital_counseling"
    ? "Premarital Counseling"
    : str === "marital_counseling"
      ? "Marital Counseling"
      : str === "marriage_coaching"
        ? "Marriage Coaching"
        : str === "life_coaching"
          ? "Life Coaching"
          : null;
};

export const mockBlogPosts: BlogPost[] = [
  {
    _id: "mock-1",
    _createdAt: "2024-01-15T10:00:00Z",
    title: "Getting Started with Modern Web Development",
    slug: {
      current: "getting-started-modern-web-dev",
    },
    excerpt:
      "Explore the latest trends and best practices in modern web development. Learn about frameworks, tools, and techniques that will help you build better websites.",
    author: {
      name: "Sarah Johnson",
      image: undefined,
    },
    categories: [
      {
        _id: "cat-1",
        title: "Development",
      },
      {
        _id: "cat-2",
        title: "Tutorial",
      },
    ],
    publishedAt: "2024-01-15T10:00:00Z",
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "This is a sample blog post to preview the design. Connect your Sanity project to see real content with images and rich text.",
          },
        ],
      },
    ] as BlockContent[],
  },
  {
    _id: "mock-2",
    _createdAt: "2024-01-10T14:30:00Z",
    title: "The Future of Artificial Intelligence",
    slug: {
      current: "future-of-ai",
    },
    excerpt:
      "Discover how AI is transforming industries and shaping the future. From machine learning to neural networks, explore the possibilities.",
    author: {
      name: "Michael Chen",
      image: undefined,
    },
    categories: [
      {
        _id: "cat-3",
        title: "Technology",
      },
      {
        _id: "cat-4",
        title: "AI",
      },
    ],
    publishedAt: "2024-01-10T14:30:00Z",
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "This is a sample blog post to preview the design. Connect your Sanity project to see real content with images and rich text.",
          },
        ],
      },
    ] as BlockContent[],
  },
  {
    _id: "mock-3",
    _createdAt: "2024-01-05T09:15:00Z",
    title: "Design Principles for Better User Experience",
    slug: {
      current: "design-principles-ux",
    },
    excerpt:
      "Learn the fundamental principles of good design and how to create intuitive, user-friendly interfaces that delight your users.",
    author: {
      name: "Emma Rodriguez",
      image: undefined,
    },
    categories: [
      {
        _id: "cat-5",
        title: "Design",
      },
      {
        _id: "cat-6",
        title: "UX",
      },
    ],
    publishedAt: "2024-01-05T09:15:00Z",
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "This is a sample blog post to preview the design. Connect your Sanity project to see real content with images and rich text.",
          },
        ],
      },
    ] as BlockContent[],
  },
];
