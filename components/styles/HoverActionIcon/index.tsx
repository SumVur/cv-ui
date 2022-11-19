import React, {FC, useState} from "react";
import style from "./styles/styles.module.scss";
import * as icons from "@media/generated";
import {AbstractIconInterface, IconStyleInterface} from "@media/generated/abstractIcon";
import {ActionIconInterface, actionOnIcon} from "@data/action-icon";
import {useRouter} from "next/router";

export interface HoverActionIconStyle extends IconStyleInterface {
    hoverColor: string;
    actionIconClassName?: string;
}

export type HoverActionIconInterface = AbstractIconInterface & ActionIconInterface;

type HoverActionIconProps = HoverActionIconInterface & HoverActionIconStyle;

const HoverActionIcon: FC<HoverActionIconProps> = props => {
    const {actionIconClassName, hoverColor, id, action, link, useDefaultColors, fill, ...iconProps} = props

    const [IsDefaultColors, setIsDefaultColors] = useState(false);

    const Icon = icons[props.title];

    const router = useRouter();

    return (!Icon) ? null : (
        <div
            className={`${style.icon} ${actionIconClassName}`}
            style={{width: "fit-content"}}
            onClick={() => {
                actionOnIcon(action ?? router, link)();
            }}
            onMouseEnter={() => {
                useDefaultColors && setIsDefaultColors(true)
            }}
            onMouseLeave={() => {
                setIsDefaultColors(false)
            }}
        >
            <Icon
                id={id}
                useDefaultColors={IsDefaultColors}
                {...iconProps}
                fill={fill}
                more={
                    <style>
                        {`
                        #${id} path {
                          transition: fill  0.2s ease-in;
                        }
                        #${id}:hover{
                        transform: scale(1.2);
                        }
                        ${
                            !IsDefaultColors ? `
                            #${id}:hover path {
                              fill: ${hoverColor};
                            }
                            #${id}:hover circle {
                              fill: ${hoverColor};
                            }
                            ` : ""
                        }
                        `}
                    </style>
                }
            />
        </div>)
};

export default HoverActionIcon;
