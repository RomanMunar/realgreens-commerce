import { IProduct } from "../../../interfaces/Product"

const products: IProduct[] = [
  {
    name: "Avocado",
    price: 375,
    stock: 45,
    sold: 45,
    category: "fruits",
    dimension: [100, 200],
    description:
      "Avocados are a favorite of the produce section. Common usage suggest you to add slices to hamburgers, tortas, hot dogs, and carne asada. Avocado can be combined with eggs (in scrambled eggs, tortillas, or omelettes)",
    _id: 1,
    image: "avocado",
    images: ["avocado", "avocado_1", "avocado_2", "avocado_3"],
    like_count: 45,
    weight: 315,
    discount: 8,
    variations: [
      { variant: "Container", values: ["With Container", "No Container"] },
    ],
  },
  {
    name: "Lemon",
    price: 300,
    stock: 24,
    sold: 46,
    category: "fruits",
    dimension: [200, 600],
    description:
      "Lemons are high in vitamin C, fiber, and various beneficial plant compounds. These nutrients are responsible for several health benefits. In fact, lemons may support heart health, weight control, and digestive health.",
    _id: 2,
    image: "lemon",
    images: ["lemon", "lemon_1", "lemon_2", "lemon_3"],
    like_count: 25,
    weight: 515,
    discount: 24,
    variations: [
      {
        variant: "Variant",
        values: ["Dark Choco", "Creamy Choco", "Brown Choco"],
      },
    ],
    rating: [
      {
        author: { name: "R.A Monty", portrait: "avatar", user_id: 3123 },
        description: "Really loving the same day deliveries",
        rating_star: 4,
      },
      {
        author: { name: "E.Y Collins", portrait: "avatar", user_id: 3123 },
        description: "Really loving the same day deliveries",
        rating_star: 4,
      },
    ],
  },
  {
    name: "Brocolli",
    price: 250,
    stock: 31,
    sold: 16,
    category: "vegetables",
    dimension: [80, 250],
    description:
      "Packed With Vitamins, Minerals and Bioactive Compounds. Broccoli has high levels of glucoraphanin, a compound that is converted into a potent antioxidant shown to reduce blood sugar, cholesterol levels, oxidative stress and chronic disease development.",
    _id: 3,
    image: "brocolli",
    images: [
      "brocolli",
      "broccoli_1",
      "broccoli_2",
      "broccoli_3",
      "broccoli_4",
    ],
    like_count: 89,
    weight: 200,
    discount: 33,
    variations: [{ variant: "Weight", values: ["250g", "500g", "1kg"] }],
    rating: [
      {
        author: { name: "B.T Lui", portrait: "avatar", user_id: 3123 },
        description: "Tastes Really great, will definitely buy again",
        rating_star: 5,
      },
      {
        author: { name: "O.M Yang", portrait: "avatar", user_id: 3123 },
        description:
          "Wow, this tastes 10x better than what I've before on other brands",
        rating_star: 4,
      },
    ],
  },
  {
    name: "Mushrooms",
    price: 270,
    stock: 31,
    sold: 16,
    category: "vegetables",
    dimension: [80, 250],
    description:
      "From puffballs to truffles, mushrooms can range from everyday fare to a costly delicacy. People can buy them fresh, canned, or dried. The choline in mushrooms can help with muscle movement, learning, and memory. Choline assists in maintaining the structure of cellular membranes and plays a role in the transmission of nerve impulses.",
    _id: 4,
    image: "mushrooms",
    images: [
      "mushrooms",
      "mushrooms_1",
      "mushrooms_2",
      "mushrooms_3",
      "mushrooms_4",
    ],
    like_count: 89,
    weight: 200,
    discount: 33,
    variations: [{ variant: "Weight", values: ["250g", "500g", "1kg"] }],
    rating: [
      {
        author: { name: "B.T Lui", portrait: "avatar", user_id: 3123 },
        description: "Tastes Really great, will definitely buy again",
        rating_star: 5,
      },
      {
        author: { name: "O.M Yang", portrait: "avatar", user_id: 3123 },
        description:
          "Wow, this tastes 10x better than what I've before on other brands",
        rating_star: 4,
      },
    ],
  },
  {
    name: "Orange",
    price: 205,
    stock: 31,
    sold: 16,
    category: "vegetables",
    dimension: [80, 250],
    description:
      "When you think of the health benefits of oranges, the first thing that springs to mind is probably vitamin C. Citrus fruits are a terrific source, but oranges (with a medium-size orange coming in at about 62 calories) also provide a number of other protective nutrients. Here are seven reasons to eat more oranges, the health benefits of orange juice and orange peels—as well as simple ways to enjoy this delicious fruit.",
    _id: 5,
    image: "orange",
    images: ["orange_1", "orange_2"],
    like_count: 89,
    weight: 200,
    discount: 33,
    variations: [{ variant: "Weight", values: ["250g", "500g", "1kg"] }],
    rating: [
      {
        author: { name: "B.T Lui", portrait: "avatar", user_id: 3123 },
        description: "Tastes Really great, will definitely buy again",
        rating_star: 5,
      },
      {
        author: { name: "O.M Yang", portrait: "avatar", user_id: 3123 },
        description:
          "Wow, this tastes 10x better than what I've before on other brands",
        rating_star: 4,
      },
    ],
  },
  {
    name: "Lime",
    price: 320,
    stock: 31,
    sold: 16,
    category: "vegetables",
    dimension: [80, 250],
    description:
      "limes are loaded with nutrients, they may help boost your immunity, reduce heart disease risk factors, prevent kidney stones, aid iron absorption, and promote healthy skin.Limes are high in active compounds that function as antioxidants in your body, including flavonoids, limonoids, kaempferol, quercetin, and ascorbic acid, removes stress induced damage to skin",
    _id: 3123,
    image: "lime",
    images: ["lime_1", "lime_2", "lime_3"],
    like_count: 89,
    weight: 200,
    discount: 33,
    variations: [{ variant: "Weight", values: ["250g", "500g", "1kg"] }],
    rating: [
      {
        author: { name: "B.T Lui", portrait: "avatar", user_id: 3123 },
        description: "Tastes Really great, will definitely buy again",
        rating_star: 5,
      },
      {
        author: { name: "O.M Yang", portrait: "avatar", user_id: 3123 },
        description:
          "Wow, this tastes 10x better than what I've before on other brands",
        rating_star: 4,
      },
    ],
  },
]

export default products
