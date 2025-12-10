import {
    HiOutlineMail,
    HiOutlinePhone,
    HiOutlineUser,
    HiOutlineLocationMarker
} from "react-icons/hi";

const Info = () => {
    return (
        <div className="flex flex-col gap-6 md:gap-10">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-[280px] flex items-start gap-4">
                    <HiOutlineUser className="text-2xl mt-1 text-accent" />
                    <div>
                        <p className="text-lg">Date d'annive</p>
                        <p>25 Mai</p>
                    </div>
                </div>
                <div className="w-[280px] flex items-start gap-4">
                    <HiOutlineMail className="text-2xl mt-1 text-accent" />
                    <div>
                        <p className="text-lg">Adress mail</p>
                        <p>Odreymvula05@mail.com</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-[280px] flex items-start gap-4">
                    <HiOutlinePhone className="text-2xl mt-1 text-accent" />
                    <div>
                        <p className="text-lg">Téléphone</p>
                        <p>+243 971 749 853</p>
                    </div>
                </div>
                <div className="w-[280px] flex items-start gap-4">
                    <HiOutlineLocationMarker className="text-2xl mt-1 text-accent" />
                    <div>
                        <p className="text-lg">Localisation</p>
                        <p>Kinshasa, RD.Congo</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;