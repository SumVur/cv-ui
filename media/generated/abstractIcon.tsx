import React, {FC} from "react";

export interface AbstractIconStyleInterface {
    height: number,
    width: number,
    useDefaultColors?:boolean
}

export interface AbstractIconInterface {
    id: string,
    more?: any
}

export interface IconStyleInterface extends AbstractIconStyleInterface {
    fill: string[]
}

export type IconInterface = IconStyleInterface & AbstractIconInterface;

type AbstractIconProps =
    AbstractIconInterface
    & AbstractIconStyleInterface
    & { children: React.ReactNode, viewBox?: string } & React.SVGProps<SVGSVGElement>

export const AbstractIcon: FC<AbstractIconProps> = ({id, width, height, viewBox, more, children, ...rest}) => {
    viewBox = viewBox ?? '0 0 24 24'

    return (
        <svg id={id} width={width} height={height} viewBox={viewBox} fill="none"
             xmlns="http://www.w3.org/2000/svg" {...rest}>
            {more || ''}
            {children}
        </svg>
    )
}