import {FC} from "react";

export interface FooterStyle {

}

export interface FooterInterface {

}

type FooterProps = FooterInterface & FooterStyle
const Footer:FC<FooterProps> = ({}) => {
    return(
        <div>
            Footer
        </div>
    )
}

export default Footer;