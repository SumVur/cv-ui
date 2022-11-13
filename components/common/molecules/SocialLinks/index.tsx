import {FC} from "react";
import {SocialLink} from "@data/social-links";
import {SocialIcon, SocialIconStyle} from "@common/atoms";
import {FlexDiv} from "@common/styles"

interface SocialLinksProps {
    socialLinksItems: SocialLink[];
    paraphrase: string;
    socialIconStyle: SocialIconStyle;
}

const SocialLinks: FC<SocialLinksProps> = (
    {
        socialLinksItems,
        paraphrase,
        socialIconStyle,
    }
) => {
    return (
        <FlexDiv>
            {socialLinksItems ? socialLinksItems?.map((item, index) => (
                <SocialIcon
                    id={`${item.name}_${paraphrase}`}
                    key={index}
                    name={item.name}
                    link={item.link}
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
