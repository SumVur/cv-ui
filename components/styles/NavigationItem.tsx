import Link from 'next/link'
import {LinkProps} from "next/dist/client/link";
import {FC} from "react";

type NavigationItemProps = LinkProps & { className?: string, title: string }

const NavigationItem: FC<NavigationItemProps> = ({href, className, title}) => {
    return (
        <Link href={href} className={className} style={{textDecoration: "none"}}>
            {title}
        </Link>
    )
}

export default NavigationItem;