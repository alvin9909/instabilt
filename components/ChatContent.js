import { useSession } from "next-auth/react";
import { PencilAltIcon } from "@heroicons/react/outline";

function ChatContent() {
  const { data: session } = useSession();
  return (
    <main className="mt-3">
      {/* Container*/}
      <header className="flex justify-center ">
        {/* Left */}
        <div className="bg-white border w-[349px] h-[60px] flex justify-center">
          <div className="flex items-center justify-end space-x-20">
            <img
              src={session.user.image}
              alt="profile pic"
              className="w-10 h-10 rounded-full cursor-pointer p-[1.0px] border-green-400 border-2"
            />
            <p className="text-md">
              <span className="font-bold">{session.user.name}</span>{" "}
            </p>

            <PencilAltIcon className="w-7"></PencilAltIcon>
          </div>
        </div>

        {/* Right */}
        <div className="bg-white border-l-0 border inline-flex w-[583px]">
          Right
        </div>
      </header>
    </main>
  );
}

export default ChatContent;
