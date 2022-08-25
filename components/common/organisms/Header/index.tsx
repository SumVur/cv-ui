import {FC} from "react";

export interface HeaderStyle {

}

export interface HeaderInterface {

}

type HeaderProps = HeaderInterface & HeaderStyle
const Header:FC<HeaderProps> = ({}) => {
    return(
        <div>
            Header
        </div>
    )
}

export default Header;