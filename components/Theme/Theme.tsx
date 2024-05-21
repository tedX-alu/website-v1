import React from "react"
import { ConfigProvider } from "antd"

interface ThemeProps {
  children: React.ReactNode
}

const DetailButton: React.FC<ThemeProps> = ({ children }) => (
  <ConfigProvider
    theme={{
      components: {
        // Seed Token
        Button: {
          colorPrimaryHover: "#FF2929",
          colorPrimary: "#FF2929",
          colorPrimaryBorder: "#FF2929",
          colorPrimaryActive: "#FFFFFF",
          defaultHoverBg: "#FFFFFF",
          defaultBorderColor:"#FF2929",
        },

        // Alias Token
      },
    }}
  >
    {children}
  </ConfigProvider>
)

export default DetailButton
