import React from "react"
const pageStyles = {
  color: "#fff",
  background: "#030B16",
  padding: "0 96 96",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

export default function Layout({ children }) {
  return (
    <main style={pageStyles}>
      {children}
    </main>
  )
}