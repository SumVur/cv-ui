import {FC, useState} from "react";
import Image from "next/image";
import {useRouter} from "next/router";
import {PagePreview as PagePreviewInterface} from "@data/page-preview"
import {FlexDiv} from "@styles";
import scss from "./styles/styles.module.scss"
import {Blur} from "./styles"


type PagePreviewProps = PagePreviewInterface;

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const PagePreview: FC<PagePreviewProps> = ({title, url, backgroundImage}) => {
    const [isHover, setIsHover] = useState(false);

    const router = useRouter();

    const [isLoading, setLoading] = useState(true);

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
                   className={cn(
                       'duration-700 ease-in-out',
                       isLoading
                           ? 'grayscale blur-2xl scale-110'
                           : 'grayscale-0 blur-0 scale-100'
                   )}
                   onLoadingComplete={() => setLoading(false)}
            />
            <Blur isHover={isHover}/>
        </FlexDiv>
    )
}

export default PagePreview;