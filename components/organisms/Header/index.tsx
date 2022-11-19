import {FC} from "react";
import {FlexDiv, HoverActionIconStyle} from "@styles";
import style from "./styles/styles.module.scss"
import {NavigationBar, ProfileMainInfo, SocialLinks} from "@molecules";

export interface HeaderStyle {
    socialIconStyle: HoverActionIconStyle
}

export interface HeaderInterface {

}

type HeaderProps = HeaderInterface & HeaderStyle
const Header: FC<HeaderProps> = ({socialIconStyle}) => {
    return (
        <FlexDiv className={style.wrapper}>
            <SocialLinks
                paraphrase={"Footer"}
                socialIconStyle={socialIconStyle}
            />
            <ProfileMainInfo/>
            <NavigationBar/>
        </FlexDiv>
    )
}

export default Header;