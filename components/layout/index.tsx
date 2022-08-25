import {FC} from "react";
import {Footer, Header} from "@common/organisms";

interface MainLayoutProps {

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