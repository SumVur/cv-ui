import {ProfileImage} from "@atoms";
import {FlexDiv} from "@styles"
import style from "./styles/styles.module.scss";
import {useRouter} from "next/router";

const ProfileMainInfo = () => {
    const router = useRouter();

    return (
        <FlexDiv
            className={style.profileInfo}
            onClick={() => {
                router.push("/")
            }}
        >
            <ProfileImage/>
            <FlexDiv className={style.about}>
                <h1>Oleksii Mukharovskyi</h1>
                <h2>Magento 2 Full Stack Developer</h2>
            </FlexDiv>
        </FlexDiv>
    )
}
export default ProfileMainInfo