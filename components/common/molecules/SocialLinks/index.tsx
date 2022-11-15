import {FC} from "react";
import {SocialLink} from "@data/social-links";
import {SocialIcon, SocialIconStyle} from "@common/atoms";
import {FlexDiv} from "@common/styles"
import useSWR from "swr";
import fetch from "node-fetch";
import style from "./styles/styles.module.scss"

interface SocialLinksProps {
    paraphrase: string;
    socialIconStyle: SocialIconStyle;
}

const SocialLinks: FC<SocialLinksProps> = ({
                                               paraphrase,
                                               socialIconStyle,
                                           }) => {
    const {
        data,
        error
    } = useSWR('/api/social-links', (apiURL: string) => fetch(apiURL, {timeout: 8000}).then(res => res.json()))

    return (
        <FlexDiv width={`${socialIconStyle.width * 2 + (16 * 2)}px`} className={style.socialLinks}>
            {data ? data?.map((item: SocialLink, index: string) => (
                <SocialIcon
                    id={`${item.name}_${paraphrase}`}
                    key={index}
                    {...item}
                    {...socialIconStyle}
                />
            )) : (
                <div>
                    loading...
                </div>
            )}
        </FlexDiv>
    );
};

export default SocialLinks;
