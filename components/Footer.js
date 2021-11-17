
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import { PlusCircleIcon } from "@heroicons/react/outline";

function Footer() {

    const [open, setOpen] = useRecoilState(modalState);

    return (
        <div className=" ml-auto mr-auto w-12 rounded-full drop-shadow-lg bg-white cursor-pointer">
            <div>
                <PlusCircleIcon 
                    onClick={() => setOpen(true)} 
                    className="navBtn flex text-black h-12" 
                />
                {/* Hej2 */}
            </div>
        </div>
    )
}

export default Footer;
