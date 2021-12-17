import { useSession } from "next-auth/react";
import { PencilAltIcon, DotsVerticalIcon } from "@heroicons/react/outline";

function ChatContent() {
  const { data: session } = useSession();
  return (
    <div>
      {session && (
        <main className="mt-3 h-[695px] max-w-min m-auto flex bg-white">
          {/*Left*/}
          <div className="w-[349px] border-[1px]">
            <header className="z-50 top-0 h-[60px] flex justify-center border-b-[1px]">
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
            </header>
          </div>
          <div className="w-[583px] border-[1px] border-l-0">
            <header className="z-50 top-0 h-[60px] border-b-[1px] flex justify-between">
              <div className="space-x-3 flex items-center">
                <img
                  src={session.user.image}
                  alt="profile pic"
                  className="w-7 h-7 ml-10 rounded-full cursor-pointer p-[1.0px] border-[1px]"
                />
                <p className="text-md">
                  <span className="font-bold">{session.user.name}</span>{" "}
                </p>
              </div>

              <div className="flex items-center">
                <DotsVerticalIcon className="w-6 mr-5"></DotsVerticalIcon>
              </div>
            </header>
          </div>
        </main>
      )}
    </div>
  );
}

export default ChatContent;
