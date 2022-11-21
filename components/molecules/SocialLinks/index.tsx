import {FC} from "react";
import useSWR from "swr";
import {SocialIcon} from "@atoms";
import {FlexDiv, HoverActionIconStyle} from "@styles"
import {SocialIconInterface} from "@data/social-links";
import style from "./styles/styles.module.scss"

interface SocialLinksProps {
    paraphrase: string;
    socialIconStyle: HoverActionIconStyle;
}

const SocialLinks: FC<SocialLinksProps> = ({paraphrase, socialIconStyle}) => {
    const {data} = useSWR('/api/social-links')

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
