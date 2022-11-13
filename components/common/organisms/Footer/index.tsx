import {FC} from "react";
import {SocialIconStyle} from "@common/atoms";
import {SocialLinks} from "@common/molecules";
import useSWR from "swr";
import fetch from "node-fetch";

export interface FooterStyle {
    socialIconStyle: SocialIconStyle
}

export interface FooterInterface {
}

type FooterProps = FooterInterface & FooterStyle
const Footer: FC<FooterProps> = ({socialIconStyle,}) => {
    const {data, error} = useSWR('/api/social-links', (apiURL: string) =>fetch(apiURL,{timeout:8000}).then(res => res.json()))

    return (
        <div>
            <SocialLinks
                paraphrase={"Footer"}
                socialLinksItems={data}
                socialIconStyle={socialIconStyle}
            />
        </div>
    )
}

export default Footer;