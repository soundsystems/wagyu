import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"
import { readFile } from "fs/promises"

export const runtime = "nodejs"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get("title") || "Ozark Natural Steak Co."
    const description =
      searchParams.get("description") ||
      "Raised with care and tradition by the Smith family in the Ozarks."
    const page = searchParams.get("page") || "home"

    // Load images
    const [logoData, backgroundData] = await Promise.all([
      readFile(new URL("../../../public/Ozark_Natural_Steak_Co_Logo_no_Background.png", import.meta.url)),
      readFile(new URL("../../../public/Hay_Sunrise_Cattle (1).jpg", import.meta.url)),
    ])

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(data:image/jpeg;base64,${backgroundData.toString('base64')})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        />

        {/* Centered Company Logo - Much Bigger */}
        <img
          src={`data:image/png;base64,${logoData.toString('base64')}`}
          alt="Ozark Natural Steak Co."
          style={{
            width: "600px",
            height: "600px",
            objectFit: "contain",
            position: "relative",
            zIndex: 1,
          }}
        />

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "8px",
            background:
              "linear-gradient(90deg, #C3AA81 0%, #D7C097 50%, #C3AA81 100%)",
          }}
        />
      </div>,
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error"
    console.log(`OG Image generation error: ${errorMessage}`)
    return new Response("Failed to generate the image", {
      status: 500,
    })
  }
}
