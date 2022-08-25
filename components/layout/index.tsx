import React, {FC} from "react";
import {Footer, Header} from "@common/organisms";

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({children}) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}

export default MainLayout;