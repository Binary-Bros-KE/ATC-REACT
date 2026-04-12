export const blogs = [
  {
    slug: "the-art-of-espresso",
    title: "The Art of Espresso: Mastering the Perfect Shot",
    excerpt:
      "In the world of coffee, there's a small but mighty beverage that holds a special place in the hearts of connoisseurs—the espresso.",
    author: "Admin",
    date: "25 Dec 2023",
    category: "Education",
    coverImage: "/blog/espresso-machine-brewing-shot.jpg",
    bannerImage: "/blog/espresso-machine-brewing-shot.jpg",
    content: {
      intro:
        "In the world of coffee, there's a small but mighty beverage that holds a special place in the hearts of connoisseurs—the espresso. Often regarded as the purest form of coffee, mastering the art of crafting the perfect espresso shot is a journey that transcends the simple act of brewing. Let's delve into the intricacies of this revered beverage and uncover the secrets behind pulling an espresso shot that captivates the senses.",
      body: [
        {
          text: "At its core, espresso is a concentrated coffee brewed by forcing hot water through finely-ground coffee under high pressure. This unique brewing method extracts flavors, aromas, and a rich, velvety crema that sets it apart from other coffee varieties. The journey to mastering the perfect espresso shot begins with understanding the key elements that contribute to its exceptional taste.",
        },
        {
          text: "The espresso machine is the artisan's tool, transforming coffee and water into a harmonious elixir. Modern machines offer precise temperature control and pressure regulation, empowering baristas to fine-tune each shot. From semi-automatic to fully automatic, the choice of machine reflects the level of control a barista desires in their pursuit of the perfect shot.",
        },
      ],
    },
    sidebarImages: [
      "/blog/latte-art-heart-pattern.jpg",
      "/blog/espresso-grinder-fresh-grounds.jpg",
      "/blog/espresso-cup-dark-background.jpg",
    ],
  },
  {
    slug: "coffee-factory-tour",
    title: "The Coffee Factory Tour & The Brookside Event",
    excerpt:
      "At Arobisca, our commitment to providing a comprehensive learning experience goes beyond the classroom. One unique aspect of our program is the mandatory coffee factory tour.",
    author: "Admin",
    date: "2 December 2022",
    category: "Events",
    coverImage: "/blog/coffee-tour.jpg",
    bannerImage: "/blog/coffee-tour.jpg",
    content: {
      intro:
        "At Arobisca, our commitment to providing a comprehensive learning experience goes beyond the classroom. One unique aspect of our program is the mandatory coffee factory tour, an integral part of every student's educational journey.",
      body: [],
    },
    sidebarImages: [],
  },
  {
    slug: "latte-art",
    title: "Latte Art: Turning Coffee into a Canvas",
    excerpt:
      "Dive into the world of latte art and discover how to create beautiful and intricate designs atop your favorite coffee.",
    author: "Admin",
    date: "2 December 2023",
    category: "Techniques",
    coverImage: "/blog/latte-art-heart-pattern.jpg",
    bannerImage: "/blog/latte-art-heart-pattern.jpg",
    content: {
      intro: "",
      body: [],
    },
    sidebarImages: [],
  },
  {
    slug: "coffee-science",
    title: "The Science of Coffee: Understanding Flavor Profiles",
    excerpt:
      "Take a deep dive into the science behind coffee flavor profiles. Learn how factors like bean origin influence taste.",
    author: "Admin",
    date: "2 December 2023",
    category: "Education",
    coverImage: "/blog/coffee-beans-flavor-wheel.jpg",
    bannerImage: "/blog/coffee-beans-flavor-wheel.jpg",
    content: {
      intro: "",
      body: [],
    },
    sidebarImages: [],
  },
]

export function getBlogBySlug(slug) {
  return blogs.find((blog) => blog.slug === slug)
}
