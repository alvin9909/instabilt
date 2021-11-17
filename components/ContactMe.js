import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

function ContactMe() {
return(
    <div>
        <h3 className="text-sm font-bold text-gray-400 pt-5 pl-10">Följ Alvin Tall på dessa länkar...</h3>
        <div className="flex items-center justify-between mt-5">
            <div className="pl-10">
                <div className="w-50 h-50 rounded-full border p-[2px]">
                <SocialIcon url="https://discord.gg/G5WZcfKRjP" />

                </div>
            </div>

            <div className="w-50 h-50 rounded-full border p-[2px]">
                <SocialIcon url="https://www.instagram.com/tallenalvin/" />
            </div>

            <div className="w-50 h-50 rounded-full border p-[2px]">
                <SocialIcon url="https://github.com/alvin9909" />
            </div>

            <div className="w-50 h-50 rounded-full border p-[2px]">
                <SocialIcon url="https://www.reddit.com/user/alvin9909" />
            </div>
        </div>
    </div>
    
);

}
export default ContactMe