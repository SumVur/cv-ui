import Image from "next/image";

const ProfileImage = () => {
    return (
        <Image
            priority
            src="/profile-image.png"
            alt={"profile-image"}
            style={{borderRadius: "50%"}}
            width={152}
            height={152}
        />
    )
}

export default ProfileImage;