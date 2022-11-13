import {ProfileImage} from "@common/atoms";
import {FlexDiv} from "@common/styles"
import style from "./styles/styles.module.scss";

const ProfileMainInfo = ({}) => {
    return (
        <FlexDiv className={style.profileInfo}>
            <ProfileImage/>
            <div className={style.about}>
                <h1>Oleksii Mukharoskyi</h1>
                <h2>Magento 2 Full Stack Developer</h2>
            </div>
        </FlexDiv>
    )
}
export default ProfileMainInfo