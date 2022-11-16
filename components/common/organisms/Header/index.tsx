import {FC} from "react";
import {NavigationBar, ProfileMainInfo, SocialLinks} from "@common/molecules";
import {FlexDiv} from "@components/common/styles";
import style from "./styles/styles.module.scss"
import {HoverActionIconStyle} from "@common/styles/HoverActionIcon";

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