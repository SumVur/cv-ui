import {calculateTeamQuantity, Team} from "@data/project"
import {FC, useState} from "react";
import scss from "./styles/styles.module.scss";
import {FlexDiv} from "@styles";

interface TeamTableProps {
    team: Team[]
}

const TeamTable: FC<TeamTableProps> = ({team}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <FlexDiv className={scss.table}>
            <h3 style={{margin: 0}} onClick={() => {
                setIsOpen(!isOpen)
            }}>Team</h3>
            <table style={{display: isOpen ? "block" : "none"}}>
                <thead>
                <tr>
                    <th>Position</th>
                    <th>Quantity</th>
                </tr>
                </thead>
                <tbody>
                {team.map((item, index) => (
                    <tr key={index}>
                        <td>{item.position}</td>
                        <td>{item.quantity}</td>
                    </tr>
                ))}
                <tr>
                    <td>Total</td>
                    <td>{calculateTeamQuantity(team)}</td>
                </tr>
                </tbody>
            </table>
        </FlexDiv>
    )
}
export default TeamTable