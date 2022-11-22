import * as icons from "@media/generated/Skills";
import {ActionIconInterface, Modify} from "@data/action-icon";

export const skillTable = "skills"
export const divisionsOfSkills = "divisionsOfSkills"
export const skillsInDivisions = "skillsInDivisions"

export type SkillInterface = Modify<ActionIconInterface, {
    title: keyof typeof icons
}>