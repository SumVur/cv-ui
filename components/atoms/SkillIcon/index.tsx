import React, {FC} from "react";
import ActionIcon, {
    HoverActionIconInterface,
    HoverActionIconStyle
} from "@components/styles/HoverActionIcon";
import {ActionIconInterface, Modify} from "@data/action-icon";
import * as icons from "@media/generated/Skills";

export type SkillIconInterface = Modify<ActionIconInterface, {
    title: keyof typeof icons
}> & HoverActionIconInterface;

type SkillIconProps = SkillIconInterface & HoverActionIconStyle;

const SkillIcon: FC<SkillIconProps> = props => {
    return (<ActionIcon {...props}/>)
};

export default SkillIcon;
