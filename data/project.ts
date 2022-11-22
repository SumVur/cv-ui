import {SkillInterface} from "@data/skill";

type positions =
    "Project manager"
    | "Project owner"
    | "Full-stack developer"
    | "FrontEnd developer"
    | "Back-End developer"
    | "QA"

export type Team = {
    position: positions
    quantity: number
}

export function calculateTeamQuantity(team: Team[]) {
    let quantity = 0;
    team.forEach((item) => {
        quantity += item.quantity
    })
    return quantity
}

export interface ProjectInterface {
    title: string
    position: positions
    technologists: SkillInterface[]
    additionalInfo?: string
    team: Team[]
}