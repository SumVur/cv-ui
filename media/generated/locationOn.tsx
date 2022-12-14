import {FC} from "react";
import {AbstractIcon, IconInterface} from "@media/generated/abstractIcon";

export const LocationOn: FC<IconInterface> = props => {
    const {fill, ...other} = props
    return (
        <AbstractIcon {...other}>
            <path
                d="M8.00016 1.33333C5.42016 1.33333 3.3335 3.42 3.3335 6C3.3335 9.5 8.00016 14.6667 8.00016 14.6667C8.00016 14.6667 12.6668 9.5 12.6668 6C12.6668 3.42 10.5802 1.33333 8.00016 1.33333ZM8.00016 7.66666C7.08016 7.66666 6.3335 6.92 6.3335 6C6.3335 5.07999 7.08016 4.33333 8.00016 4.33333C8.92016 4.33333 9.66683 5.07999 9.66683 6C9.66683 6.92 8.92016 7.66666 8.00016 7.66666Z"
                fill={fill[0]}/>
        </AbstractIcon>
    )
}
