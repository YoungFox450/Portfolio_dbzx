import {
    BiLogoFacebook,
    BiLogoWhatsapp,
    BiLogoDribbble,
    BiLogoLinkedin,
} from "react-icons/bi";

const socials = [
    {
        icon: <BiLogoFacebook />,
        path: "",
    },
    {
        icon: <BiLogoWhatsapp />,
        path: "",
    },
    {
        icon: <BiLogoDribbble />,
        path: "",
    },
    {
        icon: <BiLogoLinkedin />,
        path: "",
    },
];

const Socials = ({ containerStyles, incoStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <div key={index} className={incoStyles}>
                        {item.icon}
                    </div>
                );
            })}
        </div>
    );
};

export default Socials;