import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get("title") || "Ozark Natural Steak Co."
    const description =
      searchParams.get("description") ||
      "Premium American Wagyu beef raised with care and tradition by the Smith family in the Ozarks."
    const page = searchParams.get("page") || "home"

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url('https://ozarknaturalsteak.com/Sunrise.jpg')",
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
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        />

        {/* Logo overlay */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "40px",
            width: "120px",
            height: "120px",
            backgroundImage: "url('https://ozarknaturalsteak.com/Ozark_Natural_Steak_Co_Logo_no_Background.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />

        {/* Logo area - text version as fallback */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#C3AA81",
              textAlign: "center",
              letterSpacing: "2px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            }}
          >
            OZARK NATURAL STEAK CO.
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: page === "home" ? "64px" : "48px",
            fontWeight: "bold",
            color: "#FFFFFF",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.2,
            marginBottom: "20px",
            padding: "0 40px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            position: "relative",
            zIndex: 1,
          }}
        >
          {title}
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "28px",
            color: "#D7C097",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
            padding: "0 40px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            position: "relative",
            zIndex: 1,
          }}
        >
          {description}
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
