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
      readFile(new URL("../../../public/Sunrise.jpg", import.meta.url)),
    ])

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(data:image/jpeg;base64,${backgroundData.toString('base64')})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />

        {/* Company logo - top left */}
        <img
          src={`data:image/png;base64,${logoData.toString('base64')}`}
          alt="Ozark Natural Steak Co."
          style={{
            position: "absolute",
            top: "30px",
            left: "30px",
            width: "120px",
            height: "120px",
            objectFit: "contain",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "900px",
            padding: "0 40px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Title */}
          <div
            style={{
              fontSize: page === "home" ? "56px" : "44px",
              fontWeight: "bold",
              color: "#FFFFFF",
              textAlign: "center",
              lineHeight: 1.1,
              marginBottom: "24px",
              textShadow: "3px 3px 6px rgba(0, 0, 0, 0.9)",
            }}
          >
            {title}
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: "24px",
              color: "#D7C097",
              textAlign: "center",
              lineHeight: 1.3,
              maxWidth: "750px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
            }}
          >
            {description}
          </div>
        </div>

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
