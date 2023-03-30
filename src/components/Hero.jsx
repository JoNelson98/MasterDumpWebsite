import React from "react"
import { imgUrl } from "../assets/heroImage"
// import { Parallax, ParallaxLayer } from "@react-spring/parallax"

export default function Hero() {
  return (
    <div
      style={{
        width: "100vw",
        height: "600px",
        backgroundImage: `url(${imgUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        textAlign: "center",
      }}
    ></div>
  )
}
