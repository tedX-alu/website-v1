import React from "react"
import { ConfigProvider } from "antd"

interface ThemeProps {
  children: React.ReactNode
}

const Theme: React.FC<ThemeProps> = ({ children }) => (

  <ConfigProvider
    theme={{
      token: {
        fontFamily: " Inter ",
      },
      components: {
        Button: {
          colorPrimaryHover: "#FFFFFF",
          colorPrimary: "#FF2929",
          colorPrimaryBorder: "#FF2929",
          colorPrimaryActive: "#FF2929",
          defaultHoverBg: "#FF2929",
          fontFamily: " Inter ",
        },
      },
    }}
  >{children}</ConfigProvider>

)

export default Theme
