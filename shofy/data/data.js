const data = [
  {
    id: 1,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fj4sDV3Q%2Fwatch-5.png&w=1920&q=75",
    title: "Sony Smart Watch",
    category: "Smart Watch",
    price: 190.0,
    previousPrice: 200,
    color: "black",
  },
  {
    id: 2,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FyRRLCc5%2Fwatch-1.png&w=1920&q=75",
    title: "Apple Watch Sport Band",
    category: "Smart Watch",
    price: 426.55,
    previousPrice: 449,
    color: "red",
  },
  {
    id: 3,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FfvXHr2Y%2Fblutooth-1.png&w=1920&q=75",
    title: "Lenovo Sports Bluetooth",
    category: "Bluetooth",
    price: 66.5,
    previousPrice: 70,
    color: "green",
  },
  {
    id: 4,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FfMhtt2T%2Fwatch-9.png&w=1920&q=75",
    title: "Sony Lady Fitness Watch",
    category: "Smart Watch",
    price: 145.5,
    previousPrice: 150,
    color: "white",
  },
  {
    id: 5,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FRYST3Ym%2Fblutooth-4.png&w=1920&q=75",
    title: "Lenovo Wireless Bluetooth",
    category: "Bluetooth",
    price: 66.5,
    previousPrice: 70,
    color: "orange",
  },
  {
    id: 6,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F5FPhGtq%2Fheadphone-8.png&w=1920&q=75",
    title: "Headphone with Mic",
    category: "Headphones",
    price: 110.0,
    previousPrice: 120,
    color: "cyan",
  },
  {
    id: 7,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F3WMPkkf%2Fmobile-5.png&w=1920&q=75",
    title: "iPhone 14 Pro",
    category: "Mobile Tablets",
    price: 1019.15,
    previousPrice: 1199,
    color: "black",
  },
  {
    id: 8,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fn1YRvWJ%2Fheadphone-5.png&w=1920&q=75",
    title: "Gaming Headphone",
    category: "Headphones",
    price: 123.5,
    previousPrice: 130,
    color: "black",
  },
  {
    id: 9,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F5FPhGtq%2Fheadphone-8.png&w=1920&q=75",
    title: "Headphone with Mic",
    category: "Headphones",
    price: 110.0,
    previousPrice: 120,
    color: "pink",
  },
  {
    id: 10,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FfMhtt2T%2Fwatch-9.png&w=1920&q=75",
    title: "Sony Lady Fitness Watch",
    category: "Smart Watch",
    price: 145.5,
    previousPrice: 150,
    color: "pink",
  },
  {
    id: 11,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F3WMPkkf%2Fmobile-5.png&w=1920&q=75",
    title: "iPhone 14 Pro",
    category: "Mobile Tablets",
    price: 1019.15,
    previousPrice: 1199,
    color: "pink",
  },
  {
    id: 12,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FkxGMcrw%2Fipad-1.png&w=1920&q=75",
    title: "Apple iPad Air",
    category: "Mobile Tablets",
    price: 949.05,
    previousPrice: 999,
    color: "gold",
  },
  {
    id: 13,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fn1YRvWJ%2Fheadphone-5.png&w=1920&q=75",
    title: "Gaming Headphone",
    category: "Headphones",
    price: 123.5,
    previousPrice: 130,
    color: "gold",
  },
  {
    id: 14,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FWVdTgR8%2Fheadphone-1.png&w=1920&q=75",
    title: "Headphones Wireless.",
    category: "Headphones",
    price: 103.2,
    previousPrice: 120,
    color: "gold",
  },
  {
    id: 15,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F3WMPkkf%2Fmobile-5.png&w=1920&q=75",
    title: "iPhone 14 Pro",
    category: "Mobile Tablets",
    price: 1019.15,
    previousPrice: 1199,
    color: "yellow",
  },
  {
    id: 16,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FyRRLCc5%2Fwatch-1.png&w=1920&q=75",
    title: "Apple Watch Sport Band",
    category: "Smart Watch",
    price: 426.55,
    previousPrice: 449,
    color: "yellow",
  },
  {
    id: 17,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F5FPhGtq%2Fheadphone-8.png&w=1920&q=75",
    title: "Headphone with Mic",
    category: "Headphones",
    price: 110.0,
    previousPrice: 120,
    color: "yellow",
  },
  {
    id: 18,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FfMhtt2T%2Fwatch-9.png&w=1920&q=75",
    title: "Sony Lady Fitness Watch",
    category: "Smart Watch",
    price: 145.5,
    previousPrice: 150,
    color: "blue",
  },
  {
    id: 19,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FjvGv6qf%2Fmobile-1.png&w=1920&q=75",
    title: "Galaxy Android Tablet",
    category: "Mobile Tablets",
    price: 288.0,
    previousPrice: 320,
    color: "blue",
  },
  {
    id: 20,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FwYZr4k6%2Fcpu-1.png&w=1920&q=75",
    title: "DeepCool Air Cooler",
    category: "CPU Heat Pipes",
    price: 80.0,
    previousPrice: 100,
    color: "purple",
  },
];

const shopData = [
  {
    id: 1,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FWVdTgR8%2Fheadphone-1.png&w=1920&q=75",
    title: "Headphones Wireless.",
    category: "Headphones",
    price: 103.2,
    previousPrice: 120,
    color: "pink",
  },
  {
    id: 2,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fn1YRvWJ%2Fheadphone-5.png&w=1920&q=75",
    title: "Gaming Headphone",
    category: "Headphones",
    price: 123.5,
    previousPrice: 130,
    color: "blue",
  },
  {
    id: 3,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F5FPhGtq%2Fheadphone-8.png&w=1920&q=75",
    title: "Headphone with Mic",
    category: "Headphones",
    price: 110.0,
    previousPrice: 120,
    color: "blue",
  },
  {
    id: 4,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FjvGv6qf%2Fmobile-1.png&w=1920&q=75",
    title: "Galaxy Android Tablet",
    category: "Mobile Tablets",
    price: 288.0,
    previousPrice: 320,
    color: "black",
  },
  {
    id: 5,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F3WMPkkf%2Fmobile-5.png&w=1920&q=75",
    title: "iPhone 14 Pro",
    category: "Mobile Tablets",
    price: 1019.15,
    previousPrice: 1199,
    color: "black",
  },
  {
    id: 6,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FkxGMcrw%2Fipad-1.png&w=1920&q=75",
    title: "Apple iPad Air",
    category: "Mobile Tablets",
    price: 949.05,
    previousPrice: 999,
    color: "grey",
  },
  {
    id: 7,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fj4sDV3Q%2Fwatch-5.png&w=1920&q=75",
    title: "Sony Smart Watch",
    category: "Smart Watch",
    price: 190.0,
    previousPrice: 200,
    color: "white",
  },
  {
    id: 8,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FyRRLCc5%2Fwatch-1.png&w=1920&q=75",
    title: "Apple Watch Sport Band",
    category: "Smart Watch",
    price: 426.55,
    previousPrice: 449,
    color: "grey",
  },
  {
    id: 9,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FfvXHr2Y%2Fblutooth-1.png&w=1920&q=75",
    title: "Lenovo Sports Bluetooth",
    category: "Bluetooth",
    price: 66.5,
    previousPrice: 70,
    color: "black",
  },
  {
    id: 10,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FfMhtt2T%2Fwatch-9.png&w=1920&q=75",
    title: "Sony Lady Fitness Watch",
    category: "Smart Watch",
    price: 145.5,
    previousPrice: 150,
    color: "black",
  },
  {
    id: 11,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FRYST3Ym%2Fblutooth-4.png&w=1920&q=75",
    title: "Lenovo Wireless Bluetooth",
    category: "Bluetooth",
    price: 66.5,
    previousPrice: 70,
    color: "black",
  },
  {
    id: 12,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FwYZr4k6%2Fcpu-1.png&w=1920&q=75",
    title: "DeepCool Air Cooler",
    category: "CPU Heat Pipes",
    price: 80.0,
    previousPrice: 100,
    color: "black",
  },
  {
    id: 13,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fgg9yCwX%2Fclothing-1.png&w=384&q=75",
    title: "Whitetails Women's Dress",
    category: "Clothing",
    price: 80.0,
    previousPrice: 76,
    color: "red",
  },
  {
    id: 14,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FGvXjssF%2Fbag-1.png&w=384&q=75",
    title: "Tall Easy Tote-2",
    category: "Bags",
    price: 110.0,
    previousPrice: 100,
    color: "yellow",
  },
  {
    id: 15,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FxgPThxC%2Fshoes-1.png&w=384&q=75",
    title: "Nike Retro GTS-2",
    category: "Shoes",
    price: 250.0,
    previousPrice: 237,
    color: "red",
  },
  {
    id: 16,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FvmJzZk4%2Fcosmetics-1.png&w=384&q=75",
    title: "Brand Cosmetic Product",
    category: "Beauty of Skin",
    price: 70.0,
    previousPrice: 67.9,
    color: "purple",
  },
  {
    id: 17,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FT04BRtd%2Fcream-1.png&w=384&q=75",
    title: "Innisfree Face Wash",
    category: "Awesome Lip Care",
    price: 68.0,
    previousPrice: 65.9,
    color: "cyan",
  },
  {
    id: 18,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FXsZ9vLT%2Fbeauty-1.png&w=384&q=75",
    title: "Blue Rescue Face Mask",
    category: "Facial Care",
    price: 72.0,
    previousPrice: 68.0,
    color: "orange",
  },
  {
    id: 19,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FmvRsPK5%2Fcosmetics-4.png&w=384&q=75",
    title: "Tea Tree Lemon For Fine Hair",
    category: "Discover Skincare",
    price: 45.0,
    previousPrice: 65.9,
    color: "green",
  },
  {
    id: 20,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fs2gB5tt%2Fearring-1.png&w=384&q=75",
    title: "Fortuna Creole Earring",
    category: "Earrings",
    price: 180.0,
    previousPrice: 200.0,
    color: "gold",
  },
  {
    id: 21,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FKsZ69S3%2Fnecklaces-1.png&w=384&q=75",
    title: "asiyah necklace",
    category: "Necklaces",
    price: 200.0,
    previousPrice: 190.0,
    color: "gold",
  },
  {
    id: 22,
    image:
      "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FnnxXBTh%2Fbracelet-4.png&w=384&q=75",
    title: "Fortuna Bangle Three-row",
    category: "Bracelets",
    price: 110.0,
    previousPrice: 100.0,
    color: "gold",
  },
];

export { data, shopData };
