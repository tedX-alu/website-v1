import React from "react"
import { ConfigProvider } from "antd"

interface ThemeProps {
  children: React.ReactNode
}

const DetailButton: React.FC<ThemeProps> = ({ children }) => (
  <ConfigProvider
    theme={{
      token: {
        fontFamily: " Inter ",
      },
      components: {
        // Seed Token
        Button: {
          colorPrimaryHover: "#FF2929",
          colorPrimary: "#FF2929",
          colorPrimaryBorder: "#FF2929",
          colorPrimaryActive: "#FFFFFF",
          defaultHoverBg: "#FFFFFF",
          defaultBorderColor:"#FF2929",
          fontFamily: " Inter ",
        },

        // Alias Token
      },
    }}
  >
    {children}
  </ConfigProvider>
)

export default DetailButton
