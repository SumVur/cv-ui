import React, {FC} from "react";

export interface AbstractIconStyleInterface {
    height: number,
    width: number,
}

export interface AbstractIconInterface {
    id: string,
    more?: any
}

export interface IconStyleInterface extends AbstractIconStyleInterface {
    fill: string[]
}

export type IconInterface = IconStyleInterface & AbstractIconInterface;

type AbstractIconProps = AbstractIconInterface & AbstractIconStyleInterface & { children: React.ReactNode }

export const AbstractIcon: FC<AbstractIconProps> = ({id, width, height, more, children}) => {
    return (
        <svg id={id} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {more || ''}
            {children}
        </svg>
    )
}