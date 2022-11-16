import React, {FC} from "react";
import {SocialIconInterface} from "@data/social-links";
import ActionIcon, {HoverActionIconInterface, HoverActionIconStyle} from "@common/styles/HoverActionIcon";

type SocialIconProps = SocialIconInterface & HoverActionIconStyle & HoverActionIconInterface

const SocialIcon: FC<SocialIconProps> = props => {
    return (<ActionIcon {...props}/>)
};

export default SocialIcon;
