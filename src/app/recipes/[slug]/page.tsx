import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { RecipeDetail } from "@/components/recipes/RecipeDetail"
import {
  getAllRecipeSlugs,
  getRecipeBySlug,
} from "@/lib/family-recipes"

type RecipePageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  const slugs = getAllRecipeSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: RecipePageProps): Promise<Metadata> {
  const { slug } = await params
  const recipe = getRecipeBySlug(slug)

  if (!recipe) {
    return {
      title: "Recipe Not Found",
    }
  }

  return {
    title: `${recipe.title} | Ozark Natural Steak Co`,
    description: recipe.description,
    openGraph: {
      title: `${recipe.title} | Ozark Natural Steak Co`,
      description: recipe.description,
      images: [
        {
          url: recipe.heroImage,
          width: 1200,
          height: 630,
          alt: recipe.title,
        },
      ],
    },
  }
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = await params
  const recipe = getRecipeBySlug(slug)

  if (!recipe) {
    notFound()
  }

  return <RecipeDetail recipe={recipe} />
}

