import * as icons from "@media/generated/SocialIcons";
import {ActionIconInterface, Modify} from "@data/action-icon";

export type SocialIconInterface = Modify<ActionIconInterface, {
    title: keyof typeof icons
}>