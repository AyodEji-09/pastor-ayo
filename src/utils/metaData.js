import iconOne from "@/assets/images/favicon/android-chrome-192x192.png";
import iconTwo from "@/assets/images/favicon/android-chrome-512x512.png";
import iconThree from "@/assets/images/favicon/apple-touch-icon.png";
import iconFour from "@/assets/images/favicon/favicon-16x16.png";
import iconFive from "@/assets/images/favicon/favicon-32x32.png";
import iconSix from "@/assets/images/favicon/favicon.ico";

export const icons = [
  {
    rel: "icon",
    type: "image/png",
    sizes: "192x192",
    url: iconOne.src,
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "512x512",
    url: iconTwo.src,
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    url: iconThree.src,
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    url: iconFour.src,
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    url: iconFive.src,
  },
  {
    rel: "icon",
    type: "image/ico",
    sizes: "32x32",
    url: iconSix.src,
  },
];

export const title = (string) => {
  if (string.includes("Ayodeji Anifowose")) {
    return `${string} | Lead Pastor, RCCG, Arise Church.`;
  } else {
    return `${string} | Ayodeji Anifowose`;
  }
};

export const description =
  "Ayodeji Anifowose is an author, content creator, training facilitator, certified Life/ Marriage coach and Pastor. He holds a bachelor's degree in Economics and is also a young minister of God, determined to continually groom world changers and teach people the undiluted word of God. As a content creator and marriage counselor, he runs a YouTube channel called Great Father, Great Husband.Though he has been in ministry for many years, he accepted God’s call as the Lead Pastor at RCCG, Arise Church, Riverside, California in 2022. As part of his calling, gifting and experience, he's using every opportunity given to open the eyes of the body of Christ. In this current digital age, one of his goals is to maximize social media to propagate the gospel of Jesus Christ. He has a special calling to groom boys into becoming the men God has called them to be. He loves people and is enthusiastic about making an impact in the lives of everyone he meets. Ayodeji Anifowose is also a songwriter and has released three songs as a blessing to the world. The songs are available on all digital platforms. He's blessed with a wonderful wife, Opeyemi and three lovely daughters Esther, Ayomide and Imole.";
