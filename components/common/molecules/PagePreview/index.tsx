import {FC, useState} from "react";
import {PagePreview as PagePreviewInterface} from "@data/page-preview"
import scss from "./styles/styles.module.scss"
import {Blur} from "./styles"
import {FlexDiv} from "@components/common/styles";
import Image from "next/image";
import {useRouter} from "next/router";

export interface PagePreviewStyles {
}

type PagePreviewProps = PagePreviewInterface & PagePreviewStyles;

const PagePreview: FC<PagePreviewProps> = ({title, url, backgroundImage}) => {
    const [isHover, setIsHover] = useState(false);

    const router = useRouter();

    return (
        <FlexDiv
            className={scss.wrapper}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={() => router.push(url)}
        >
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