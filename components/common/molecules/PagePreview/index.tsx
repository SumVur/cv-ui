import {FC, useState} from "react";
import {PagePreview as PagePreviewInterface} from "@data/page-preview"
import scss from "./styles/styles.module.scss"
import {Blur} from "./styles"
import {FlexDiv} from "@components/common/styles";
import Image from "next/image";

export interface PagePreviewStyles {
}

type PagePreviewProps = PagePreviewInterface & PagePreviewStyles;

const PagePreview: FC<PagePreviewProps> = ({title, backgroundImage}) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <FlexDiv className={scss.wrapper} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <h2>{title}</h2>
            <Image src={backgroundImage}
                   alt={"tmp"}
                   style={{objectFit: "cover",}}
                   layout={"fill"}
            />
            <Blur isHover={isHover}/>
        </FlexDiv>
    )
}

export default PagePreview;