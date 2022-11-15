import React, {FC} from "react";
import {actionOnSocialLink, SocialLink} from "@data/social-links";
import * as icons from "@media/generated/SocialIcons";
import style from "./styles/styles.module.scss";
import {IconInterface, IconStyleInterface} from "@media/generated/abstractIcon";

export interface SocialIconStyle extends IconStyleInterface {
    hoverColor: string;
    socialIconClassName?: string;
}

type SocialIconProps = SocialLink & SocialIconStyle & IconInterface;

const SocialIcon: FC<SocialIconProps> = props => {

    const Icon = icons[props.name];

    if (!Icon) {
        return null;
    }

    const {socialIconClassName, hoverColor, id, action, link, ...iconProps} = props

    return (
        <div
            className={`${style.icon} ${socialIconClassName}`}
            style={{width: "fit-content"}}
            onClick={() => {
                actionOnSocialLink(action, link)
            }}
        >
            <Icon
                id={id}
                {...iconProps}
                more={
                    <style>
                        {`
                        #${id} path {
                          transition: fill  0.2s ease-in;
                        }
                        #${id}:hover{
                        transform: scale(1.2);
                        }
                        #${id}:hover path {
                          fill: ${hoverColor};
                        }`}
                    </style>
                }
            />
        </div>)
};

export default SocialIcon;
