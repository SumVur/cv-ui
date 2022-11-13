import React, {FC} from "react";
import {SocialLink} from "@data/social-links";
import * as icons from "@media/generated/SocialIcons";
import style from "./styles/styles.module.scss";

export interface SocialIconStyle {
    color: string[];
    hoverColor: string;
    size: number;
    id?: string;
    socialIconClassName?: string;
}

type SocialIconProps = SocialLink & SocialIconStyle;

const SocialIcon: FC<SocialIconProps> = ({
     name,
     link,
     size,
     color,
     hoverColor,
     id,
     socialIconClassName,
 }) => {
    const Icon = icons[name];

    if (!Icon) {
        return null;
    }

    return size ? (
        <div
            className={`${style.icon} ${socialIconClassName}`}
            style={{width: "fit-content"}}
            onClick={
                () => {
                    window.open(link)?.focus();
                }
            }
        >
            <Icon
                id={id}
                fill={color}
                height={size}
                width={size}
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
        </div>
    ) : null;
};

export default SocialIcon;
