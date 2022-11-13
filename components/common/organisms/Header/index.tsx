import {FC} from "react";
import {HeaderWrapper} from "@common/organisms/Header/styles";
import {ProfileMainInfo} from "@common/molecules";

export interface HeaderStyle {

}

export interface HeaderInterface {

}

type HeaderProps = HeaderInterface & HeaderStyle
const Header: FC<HeaderProps> = ({}) => {
    return (
        <HeaderWrapper>
            <ProfileMainInfo/>
        </HeaderWrapper>
    )
}

export default Header;