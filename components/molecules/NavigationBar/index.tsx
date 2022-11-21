import useSWR from "swr";
import {FlexDiv, NavigationItem} from "@styles";
import {NavigationLink} from "@data/navigation-link";
import scss from "./styles/styles.module.scss"


const NavigationBar = () => {

    const {data} = useSWR('/api/navigations-link')

    return (
        <FlexDiv className={scss.navigationWrapper}>
            {data ? data?.map((item: NavigationLink, index: string) => (
                <NavigationItem key={index} href={item.url} title={item.title} className={scss.navigationItem}/>
            )) : (
                <div>
                    loading...
                </div>
            )}
        </FlexDiv>
    )
}
export default NavigationBar