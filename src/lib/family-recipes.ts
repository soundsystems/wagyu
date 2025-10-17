export type RecipeIngredient = {
  name: string
  amount: string
}

export type RecipeStep = {
  step: number
  title: string
  description: string
  image: string
}

export type TemperatureGuideItem = {
  doneness?: string
  stage?: string
  temp: string
  time?: string
  color?: string
  description: string
}

export type ProTip = {
  icon: "Lightbulb" | "Thermometer" | "ChefHat" | "Heart" | "Flame"
  title: string
  tip: string
}

export type Recipe = {
  slug: string
  title: string
  description: string
  heroImage: string
  cookTime: string
  serves: string
  difficulty: string
  ingredients: RecipeIngredient[]
  ingredientSections?: {
    title: string
    ingredients: RecipeIngredient[]
  }[]
  steps: RecipeStep[]
  temperatureGuide: TemperatureGuideItem[]
  proTips: ProTip[]
  temperatureChartType: "doneness" | "stages" // different display types
}

export const familyRecipes: Recipe[] = [
  {
    slug: "cast-iron-seared-steak",
    title: "Cast Iron Seared Steak",
    description:
      "Master the art of cooking the perfect steak with our family's tried-and-true cast iron method.",
    heroImage: "/cast-iron-steak-hero.jpg",
    cookTime: "15-20 mins",
    serves: "2-4 people",
    difficulty: "Easy",
    ingredients: [
      {
        name: "Ozark Natural Steak Co American Wagyu Steaks",
        amount: "2-4 steaks",
      },
      { name: "Salt", amount: "To taste" },
      { name: "Coarse ground pepper", amount: "To taste" },
      { name: "Avocado oil (or high smoke point oil)", amount: "2 Tbsp" },
    ],
    steps: [
      {
        step: 1,
        title: "Preheat Oven",
        description:
          "Preheat oven to 350°F (177°C). This ensures even cooking when finishing the steak in the oven.",
        image: "/oven-preheat.jpg",
      },
      {
        step: 2,
        title: "Heat Cast Iron Skillet",
        description:
          "Heat a cast iron skillet over medium-high heat and coat with oil of choice. We recommend avocado oil for its high smoke point.",
        image: "/cast-iron-heating.jpg",
      },
      {
        step: 3,
        title: "Season Steaks",
        description:
          "Season steaks to your liking. We recommend salt and coarse ground pepper. Let steaks come to room temperature for 30 minutes before cooking.",
        image: "/seasoning-steak.jpg",
      },
      {
        step: 4,
        title: "Sear Steaks",
        description:
          "Sear steaks in skillet for about 2 minutes per side or until the steak does not stick to the skillet when flipping. This creates the perfect crust.",
        image: "/searing-steak.jpg",
      },
      {
        step: 5,
        title: "Finish in Oven",
        description:
          "Place skillet in preheated oven for about 8-10 minutes or until steak reaches desired doneness, flipping once while in oven.",
        image: "/oven-finish.jpg",
      },
      {
        step: 6,
        title: "Rest and Serve",
        description:
          "Remove steaks from skillet and let rest for about 5 minutes. This allows juices to redistribute for maximum tenderness.",
        image: "/resting-steak.jpg",
      },
    ],
    temperatureGuide: [
      {
        doneness: "Rare",
        temp: "120-125°F",
        color: "bg-red-500",
        description: "Cool red center, very soft",
      },
      {
        doneness: "Medium Rare",
        temp: "130-135°F",
        color: "bg-pink-500",
        description: "Warm red center, soft",
      },
      {
        doneness: "Medium",
        temp: "140-145°F",
        color: "bg-pink-300",
        description: "Warm pink center, firm",
      },
      {
        doneness: "Medium Well",
        temp: "150-155°F",
        color: "bg-gray-400",
        description: "Slightly pink center, firm",
      },
      {
        doneness: "Well Done",
        temp: "160°F+",
        color: "bg-gray-600",
        description: "No pink, very firm",
      },
    ],
    proTips: [
      {
        icon: "Lightbulb",
        title: "Double-Pat for Ultimate Crust",
        tip: "For an exceptional sear, pat your steak dry when you first take it out, then season with salt and wait 15-30 minutes. The salt will draw moisture to the surface—pat it dry again before cooking. This adds 30 minutes to your prep time, but the enhanced crust is absolutely worth it.",
      },
      {
        icon: "Thermometer",
        title: "Temperature Control",
        tip: "Use a meat thermometer for perfect doneness. Insert into the thickest part of the steak, avoiding bone.",
      },
      {
        icon: "ChefHat",
        title: "Cast Iron Benefits",
        tip: "Cast iron retains heat better than other pans, ensuring even cooking and a superior sear on your Wagyu.",
      },
      {
        icon: "Lightbulb",
        title: "Resting is Key",
        tip: "Never skip the resting period. This allows the muscle fibers to relax and juices to redistribute throughout the meat.",
      },
    ],
    temperatureChartType: "doneness",
  },
  {
    slug: "moms-meatloaf",
    title: "Mom's Meatloaf",
    description:
      "A family favorite passed down through generations, made with love and premium Wagyu ground beef.",
    heroImage: "/moms-meatloaf-hero.jpg",
    cookTime: "45 mins",
    serves: "4-6 people",
    difficulty: "Easy",
    ingredients: [],
    ingredientSections: [
      {
        title: "Meatloaf",
        ingredients: [
          { name: "Ozark Natural Steak Co ground beef", amount: "2 lbs" },
          { name: "Eggs", amount: "2 large" },
          { name: "Bread crumbs", amount: "1 cup" },
          {
            name: "Onion (chopped) or onion powder",
            amount: "1 onion or 1 Tbsp powder",
          },
          { name: "Milk", amount: "1/2 cup" },
          { name: "Salt", amount: "1 tsp" },
          { name: "Pepper", amount: "1 tsp" },
          { name: "Garlic powder", amount: "1 tsp" },
          { name: "Worcestershire sauce", amount: "1 Tbsp" },
          { name: "Mustard", amount: "1 Tbsp" },
          { name: "Tomato paste (or ketchup)", amount: "1 Tbsp" },
          { name: "Minced garlic", amount: "2 tsps" },
        ],
      },
      {
        title: "Sauce",
        ingredients: [
          { name: "Ketchup", amount: "1/2 cup" },
          { name: "Brown sugar", amount: "2 Tbsp" },
          { name: "Worcestershire sauce", amount: "1 Tbsp" },
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: "Preheat Oven",
        description:
          "Preheat oven to 400°F (204°C). This high temperature helps create a nice crust on the meatloaf.",
        image: "/oven-preheat.jpg",
      },
      {
        step: 2,
        title: "Mix Ingredients",
        description:
          "Mix all meatloaf ingredients by hand or using the paddle attachment on your stand mixer. Be careful not to overmix to avoid a tough texture.",
        image: "/mixing-meatloaf.jpg",
      },
      {
        step: 3,
        title: "Shape and Place",
        description:
          "Place in 9x9 or 7x11 casserole dish. You can shape in a loaf but cooking time will increase. The dish method ensures even cooking.",
        image: "/shaping-meatloaf.jpg",
      },
      {
        step: 4,
        title: "Add Sauce",
        description:
          "Top with sauce if desired. Use the homemade sauce recipe above, or BBQ sauce or ketchup works too.",
        image: "/adding-sauce.jpg",
      },
      {
        step: 5,
        title: "Bake to Perfection",
        description:
          "Bake for about 45 minutes or until internal temp reaches 160°F. Use a meat thermometer for perfect doneness.",
        image: "/baking-meatloaf.jpg",
      },
    ],
    temperatureGuide: [
      {
        stage: "Oven Temp",
        temp: "400°F",
        time: "Preheat",
        description: "High heat for crust formation",
      },
      {
        stage: "Cook Time",
        temp: "400°F",
        time: "45 minutes",
        description: "Until internal temp reaches 160°F",
      },
      {
        stage: "Final Temp",
        temp: "160°F",
        time: "Check internal",
        description: "Safe internal temperature",
      },
    ],
    proTips: [
      {
        icon: "Heart",
        title: "Family Secret",
        tip: "Don't overmix the ingredients. Mix just until combined to keep the meatloaf tender and moist.",
      },
      {
        icon: "Thermometer",
        title: "Temperature Check",
        tip: "Always use a meat thermometer. 160°F is the safe internal temperature for ground beef.",
      },
      {
        icon: "ChefHat",
        title: "Smoking Option",
        tip: "This meatloaf is also great smoked! Form in a loaf and place directly on smoker grates. Smoke for about 1.5 hours at 325°F.",
      },
    ],
    temperatureChartType: "stages",
  },
  {
    slug: "smith-family-chili",
    title: "Smith Family's Favorite Chili",
    description:
      "A hearty, comforting chili that brings the family together with rich flavors and premium Wagyu ground beef.",
    heroImage: "/smith-family-chili-hero.jpg",
    cookTime: "1.5-2 hours",
    serves: "6-8 people",
    difficulty: "Easy",
    ingredients: [
      { name: "Olive oil", amount: "1 tablespoon" },
      { name: "Medium yellow onion, chopped", amount: "1 onion" },
      { name: "Lean ground beef", amount: "1 pound" },
      { name: "Garlic, minced", amount: "4 cloves" },
      { name: "Chili powder", amount: "2 tablespoons" },
      { name: "Ground cumin", amount: "1 tablespoon" },
      { name: "Brown sugar", amount: "1 tablespoon" },
      { name: "Dried oregano", amount: "1 teaspoon" },
      { name: "Salt", amount: "1/2 teaspoon" },
      { name: "Black pepper", amount: "1/4 teaspoon" },
      { name: "Tomato paste", amount: "3 tablespoons" },
      { name: "Low sodium beef broth", amount: "1 3/4 cups" },
      { name: "Fire roasted crushed tomatoes", amount: "28 ounce can" },
      {
        name: "Red kidney beans, rinsed and drained",
        amount: "15 ounce can",
      },
      { name: "Pinto beans in chili sauce", amount: "15 ounce can" },
      { name: "Toppings of choice", amount: "As desired" },
    ],
    steps: [
      {
        step: 1,
        title: "Heat Oil and Cook Onion",
        description:
          "Heat the olive oil in a large pot over medium-high heat. Add the onion and cook 2 minutes, until onion starts to soften.",
        image: "/chili-onion-cooking.jpg",
      },
      {
        step: 2,
        title: "Brown the Ground Beef",
        description:
          "Add the ground beef and cook, crumbling, until browned, about 5 minutes. Drain off excess grease for a cleaner flavor.",
        image: "/chili-browning-beef.jpg",
      },
      {
        step: 3,
        title: "Add Garlic and Spices",
        description:
          "Add the garlic and cook, stirring, for 30 seconds. If using a crock pot, transfer now. Add the chili powder, cumin, brown sugar, oregano, salt, pepper and tomato paste. Stir to combine.",
        image: "/chili-adding-spices.jpg",
      },
      {
        step: 4,
        title: "Add Liquids and Beans",
        description:
          "Add the broth and stir, scraping up any bits from the bottom of the pot. Stir in the crushed or diced tomatoes and beans.",
        image: "/chili-adding-liquids.jpg",
      },
      {
        step: 5,
        title: "Simmer to Perfection",
        description:
          "Bring to a boil, then reduce heat to low and cook at a low simmer for 1-2 hours, stirring occasionally. Cover during the first part and uncover during the last 30 minutes to thicken.",
        image: "/chili-simmering.jpg",
      },
      {
        step: 6,
        title: "Serve with Toppings",
        description:
          "Serve chili with toppings as desired. Great with shredded cheese, sour cream, green onions, or jalapeños.",
        image: "/chili-serving.jpg",
      },
    ],
    temperatureGuide: [
      {
        stage: "Initial Heat",
        temp: "Medium-High",
        time: "2 minutes",
        description: "For browning onions and beef",
      },
      {
        stage: "Simmer",
        temp: "Low",
        time: "1-2 hours",
        description: "Low and slow for flavor development",
      },
      {
        stage: "Final Thickening",
        temp: "Low (uncovered)",
        time: "30 minutes",
        description: "Reduce liquid for perfect consistency",
      },
    ],
    proTips: [
      {
        icon: "Flame",
        title: "Low and Slow",
        tip: "The longer you simmer, the better the flavors develop. Don't rush the process - patience makes perfect chili.",
      },
      {
        icon: "ChefHat",
        title: "Scrape the Bottom",
        tip: "When adding broth, scrape up any browned bits from the bottom of the pot. This adds incredible depth of flavor.",
      },
      {
        icon: "Lightbulb",
        title: "Crock Pot Option",
        tip: "This chili is perfect for the crock pot! Cook all day on low for maximum flavor development and convenience.",
      },
    ],
    temperatureChartType: "stages",
  },
  {
    slug: "smoked-chuck-roast",
    title: "Smoked Chuck Roast",
    description:
      "Transform a tough cut into tender, smoky perfection with our family's BBQ secrets and temperature guides.",
    heroImage: "/smoked-chuck-roast-hero.jpg",
    cookTime: "3-4 hours",
    serves: "4-6 people",
    difficulty: "Medium",
    ingredients: [
      {
        name: "Ozark Natural Steak Co American Wagyu Chuck Roast",
        amount: "3-4 lb",
      },
      { name: "Beef base or mustard", amount: "1 Tbsp" },
      { name: "Your favorite BBQ rub", amount: "To taste" },
      { name: "BBQ sauce", amount: "1 cup" },
    ],
    steps: [
      {
        step: 1,
        title: "Prepare the Roast",
        description:
          "Rub chuck roast with beef base or mustard. Season generously with your favorite BBQ seasoning. Let rest in the refrigerator overnight for maximum flavor penetration.",
        image: "/seasoning-chuck-roast.jpg",
      },
      {
        step: 2,
        title: "Preheat Smoker",
        description:
          "Preheat your smoker to 225°F (107°C). Use wood chips like hickory, oak, or mesquite for authentic smoke flavor.",
        image: "/smoker-preheat.jpg",
      },
      {
        step: 3,
        title: "Smoke the Roast",
        description:
          "Smoke the chuck roast at 225°F for 1.5-2 hours or until it reaches about 170°F internal temperature. This low and slow method ensures tender, flavorful meat.",
        image: "/smoking-chuck-roast.jpg",
      },
      {
        step: 4,
        title: "Transfer to Crock Pot",
        description:
          "Transfer the roast to your crock pot with about a cup of BBQ sauce. Continue cooking until the chuck roast reaches 195°F internal temperature.",
        image: "/crock-pot-finish.jpg",
      },
      {
        step: 5,
        title: "Rest and Shred",
        description:
          "Remove from heat and let rest for 15-20 minutes. The meat should be fork-tender and ready to shred or slice as desired.",
        image: "/resting-chuck-roast.jpg",
      },
    ],
    temperatureGuide: [
      {
        stage: "Initial Smoke",
        temp: "225°F",
        time: "1.5-2 hours",
        description: "Low and slow smoking for flavor development",
      },
      {
        stage: "Transfer Temp",
        temp: "170°F",
        time: "Check internal",
        description: "Ready to transfer to crock pot",
      },
      {
        stage: "Final Temp",
        temp: "195°F",
        time: "Until tender",
        description: "Perfect for shredding",
      },
    ],
    proTips: [
      {
        icon: "Flame",
        title: "Wood Selection",
        tip: "Use hickory or oak for a strong smoke flavor, or fruit woods like apple or cherry for a milder, sweeter taste.",
      },
      {
        icon: "Thermometer",
        title: "Temperature Control",
        tip: "Maintain consistent 225°F throughout the smoking process. Fluctuations can affect cooking time and texture.",
      },
      {
        icon: "ChefHat",
        title: "The Stall",
        tip: "Don't worry if the temperature plateaus around 160-170°F. This is normal and called 'the stall' - just be patient.",
      },
    ],
    temperatureChartType: "stages",
  },
]

// Helper function to get a recipe by slug
export function getRecipeBySlug(slug: string): Recipe | undefined {
  return familyRecipes.find((recipe) => recipe.slug === slug)
}

// Get all recipe slugs for static generation
export function getAllRecipeSlugs(): string[] {
  return familyRecipes.map((recipe) => recipe.slug)
}

