import {ProfileImage} from "@atoms";
import {FlexDiv} from "@styles"
import style from "./styles/styles.module.scss";

const ProfileMainInfo = () => {
    return (
        <FlexDiv className={style.profileInfo}>
            <ProfileImage/>
            <FlexDiv className={style.about}>
                <h1>Oleksii Mukharovskyi</h1>
                <h2>Magento 2 Full Stack Developer</h2>
            </FlexDiv>
        </FlexDiv>
    )
}
export default ProfileMainInfo