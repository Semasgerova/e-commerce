const data = [
        {
            id: 1,
            image: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fj4sDV3Q%2Fwatch-5.png&w=1920&q=75",
            title: "Sony Smart Watch",
            category: "Smart Watch",
            price: 190.00,
            previousPrice: 200
        },
        {
            id: 2,
            image: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FyRRLCc5%2Fwatch-1.png&w=1920&q=75",
            title: "Apple Watch Sport Band",
            category: "Smart Watch",
            price: 426.55,
            previousPrice: 449
        },
        {
            id: 3,
            image: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FfvXHr2Y%2Fblutooth-1.png&w=1920&q=75",
            title: "Lenovo Sports Bluetooth",
            category: "Bluetooth",
            price: 66.50,
            previousPrice: 70
        },
        {
            id: 4,
            image: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FfMhtt2T%2Fwatch-9.png&w=1920&q=75",
            title: "Sony Lady Fitness Watch",
            category: "Smart Watch",
            price: 145.50,
            previousPrice: 150
        },
        {
            id: 5,
            image: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FRYST3Ym%2Fblutooth-4.png&w=1920&q=75",
            title: "Lenovo Wireless Bluetooth",
            category: "Bluetooth",
            price: 66.50,
            previousPrice: 70
        },
        {
            id: 6,
            image: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F5FPhGtq%2Fheadphone-8.png&w=1920&q=75",
            title: "Headphone with Mic",
            category: "Headphones",
            price: 110.00,
            previousPrice: 120
        },
        {
            id: 7,
            image: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F3WMPkkf%2Fmobile-5.png&w=1920&q=75",
            title: "iPhone 14 Pro",
            category: "Mobile Tablets",
            price: 1019.15,
            previousPrice: 1199
        },
        {
            id: 8,
            image: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fn1YRvWJ%2Fheadphone-5.png&w=1920&q=75",
            title: "Gaming Headphone",
            category: "Headphones",
            price: 123.50,
            previousPrice: 130
        },
        {
            id: 9,
            image: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F5FPhGtq%2Fheadphone-8.png&w=1920&q=75",
            title: "Headphone with Mic",
            category: "Headphones",
            price: 110.00,
            previousPrice: 120
        },
        {
            id: 10,
            image: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FfMhtt2T%2Fwatch-9.png&w=1920&q=75",
            title: "Sony Lady Fitness Watch",
            category: "Smart Watch",
            price: 145.50,
            previousPrice: 150
        },
        {
            id: 11,
            image: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F3WMPkkf%2Fmobile-5.png&w=1920&q=75",
            title: "iPhone 14 Pro",
            category: "Mobile Tablets",
            price: 1019.15,
            previousPrice: 1199
        },
        {
            id: 12,
            image: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FkxGMcrw%2Fipad-1.png&w=1920&q=75",
            title: "Apple iPad Air",
            category: "Mobile Tablets",
            price: 949.05,
            previousPrice: 999
        },
        {
            id: 13,
            image: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fn1YRvWJ%2Fheadphone-5.png&w=1920&q=75",
            title: "Gaming Headphone",
            category: "Headphones",
            price: 123.50,
            previousPrice: 130
        },
        {
            id: 14,
            image: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FWVdTgR8%2Fheadphone-1.png&w=1920&q=75",
            title: "Headphones Wireless.",
            category: "Headphones",
            price: 103.20,
            previousPrice: 120
        },
        {
            id: 15,
            image: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F3WMPkkf%2Fmobile-5.png&w=1920&q=75",
            title: "iPhone 14 Pro",
            category: "Mobile Tablets",
            price: 1019.15,
            previousPrice: 1199
        },
        {
            id: 16,
            image: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FyRRLCc5%2Fwatch-1.png&w=1920&q=75",
            title: "Apple Watch Sport Band",
            category: "Smart Watch",
            price: 426.55,
            previousPrice: 449
        },
        {
            id: 17,
            image: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F5FPhGtq%2Fheadphone-8.png&w=1920&q=75",
            title: "Headphone with Mic",
            category: "Headphones",
            price: 110.00,
            previousPrice: 120
        },
        {
            id: 18,
            image: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FfMhtt2T%2Fwatch-9.png&w=1920&q=75",
            title: "Sony Lady Fitness Watch",
            category: "Smart Watch",
            price: 145.50,
            previousPrice: 150
        },
        {
            id: 19,
            image: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FjvGv6qf%2Fmobile-1.png&w=1920&q=75",
            title: "Galaxy Android Tablet",
            category: "Mobile Tablets",
            price: 288.00,
            previousPrice: 320
        },
        {
            id: 20,
            image: "https://shofy-client.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FwYZr4k6%2Fcpu-1.png&w=1920&q=75",
            title: "DeepCool Air Cooler",
            category: "CPU Heat Pipes",
            price: 80.00,
            previousPrice: 100
        }
    ]

export { data };