import useSWR from "swr";
import {FlexDiv} from "@styles";
import {PagePreview} from "@molecules";
import {PagePreview as PagePreviewInterface} from "@data/page-preview"
import scss from "./styles/styles.module.scss"

const PagesPreview = () => {
    const {data} = useSWR('/api/pages-preview')

    return (
        <FlexDiv className={scss.PagesPreview}>
            {
                data && data.map((item: PagePreviewInterface, index: string) => (
                    <PagePreview key={index} {...item}/>
                ))
            }
        </FlexDiv>
    )
}

export default PagesPreview;