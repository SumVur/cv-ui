import {FC} from "react";
import {SocialIconInterface} from "@data/social-links";
import {SocialIcon} from "@common/atoms";
import {FlexDiv} from "@common/styles"
import useSWR from "swr";
import fetch from "node-fetch";
import style from "./styles/styles.module.scss"
import {HoverActionIconStyle} from "@common/styles/HoverActionIcon";

interface SocialLinksProps {
    paraphrase: string;
    socialIconStyle: HoverActionIconStyle;
}

const SocialLinks: FC<SocialLinksProps> = ({paraphrase, socialIconStyle}) => {
    const {data} = useSWR('/api/social-links', (apiURL: string) => fetch(apiURL, {timeout: 8000}).then(res => res.json()))

    return (
        <FlexDiv width={`${socialIconStyle.width * 2 + (16 * 2)}px`} className={style.socialLinks}>
            {data ? data?.map((item: SocialIconInterface, index: string) => (
                <SocialIcon
                    id={`${item.title}_${paraphrase}`}
                    key={index}
                    {...item}
                    {...socialIconStyle}/>
            )) : (
                <div>
                    loading...
                </div>
            )}
        </FlexDiv>
    );
};

export default SocialLinks;
