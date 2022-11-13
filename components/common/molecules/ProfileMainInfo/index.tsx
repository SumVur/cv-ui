import {ProfileImage} from "@common/atoms";
import {FlexDiv} from "@common/styles"

const ProfileMainInfo = ({}) => {
    return (
        <FlexDiv>
            <ProfileImage/>
            <div>
                <h1>Oleksii Mukharoskyi</h1>
            </div>
        </FlexDiv>
    )
}
export default ProfileMainInfo