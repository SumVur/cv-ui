import React, {FC} from "react";

interface AbstractIconInterface {
    height: number,
    width: number,
    more: any,
    id: string,
}

export type IconInterface = AbstractIconInterface & { fill: string }

type AbstractIconProps = AbstractIconInterface & { children: React.ReactNode }

export const AbstractIcon: FC<AbstractIconProps> = ({id, width, height, more, children}) => {
    return (
        <svg id={id} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {more || ''}
            {children}
        </svg>
    )
}