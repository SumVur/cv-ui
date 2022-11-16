import * as icons from "@media/generated/Skills";
import {ActionIconInterface, Modify} from "@data/action-icon";

export type SkillInterface = Modify<ActionIconInterface, {
    title: keyof typeof icons
}>