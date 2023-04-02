import React from "react"
import logo from "../../public/local/thelogo2.png"

export default function LogoComponent(props) {
  return <img style={{ height: props.height }} src={logo} alt="master dump logo" />
}
