import useSWR from "swr";
import fetch from "node-fetch";
import PagePreview from "@common/molecules/PagePreview";
import {PagePreview as PagePreviewInterface} from "@data/page-preview"
import {FlexDiv} from "@common/styles";
import scss from "./styles/styles.module.scss"

const PagesPreview = ({}) => {
    const {
        data,
        error
    } = useSWR('/api/pages-preview', (apiURL: string) => fetch(apiURL, {timeout: 8000}).then(res => res.json()))

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