import type { Metadata } from "next"
import { CookingEducationSection } from "@/components/recipes/CookingEducationSection"
import { CookingTipsSection } from "@/components/recipes/CookingTipsSection"
import { FamilyRecipesSection } from "@/components/recipes/FamilyRecipesSection"
import { FeaturedRecipesSection } from "@/components/recipes/FeaturedRecipesSection"
import { RecipeCategoriesSection } from "@/components/recipes/RecipeCategoriesSection"
import { RecipesHeroSection } from "@/components/recipes/RecipesHeroSection"

export const metadata: Metadata = {
  title: "Wagyu Beef Recipes & Cooking Tips",
  description:
    "Master the art of cooking premium American Wagyu beef with our family recipes, cooking tips, and educational content. Learn proper techniques for the perfect steak.",
  keywords: [
    "Wagyu beef recipes",
    "how to cook Wagyu",
    "steak cooking tips",
    "premium beef recipes",
    "family recipes",
    "cooking education",
    "steak preparation",
    "beef cooking techniques",
  ],
  openGraph: {
    title: "Wagyu Beef Recipes & Cooking Tips | Ozark Natural Steak Co.",
    description:
      "Master the art of cooking premium American Wagyu beef with our family recipes and cooking tips.",
    images: [
      {
        url: "/og?title=Wagyu Beef Recipes & Cooking Tips&description=Master the art of cooking premium American Wagyu beef with our family recipes and cooking tips.&page=recipes",
        width: 1200,
        height: 630,
        alt: "Ozark Natural Steak Co. Wagyu Beef Recipes and Cooking Tips",
      },
    ],
  },
  twitter: {
    title: "Wagyu Beef Recipes & Cooking Tips | Ozark Natural Steak Co.",
    description:
      "Master the art of cooking premium American Wagyu beef with our family recipes and cooking tips.",
    images: [
      "/og?title=Wagyu Beef Recipes & Cooking Tips&description=Master the art of cooking premium American Wagyu beef with our family recipes and cooking tips.&page=recipes",
    ],
  },
  alternates: {
    canonical: "/recipes",
  },
}

export default function RecipesPage() {
  return (
    <div className="min-h-screen bg-luxury-black text-white">
      <RecipesHeroSection />

      <div className="mx-auto max-w-[1440px] px-20">
        <CookingEducationSection />
        <RecipeCategoriesSection />
        <FeaturedRecipesSection />
        <CookingTipsSection />
        <FamilyRecipesSection />
      </div>
    </div>
  )
}

