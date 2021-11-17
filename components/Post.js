import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from "@firebase/firestore";
import { async } from "@firebase/util";
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { 
    HeartIcon as HeartIconFilled,
    MinusSmIcon,
} from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Moment from "react-moment";

function Post({ id, username, userImg, img, caption}) {
    const { data: session } = useSession();
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);
    const [hasLiked, setHasLiked] = useState(false);
    var timer;

    function onClick(event) {
    clearTimeout(timer);
    
   if (event.detail === 2) {
        likePosts()
    }
    }

    useEffect(
        () => 
        onSnapshot(
            query(
                collection(db, "posts", id, "comments"), 
                orderBy("timestamp", "desc")
                ), 
                (snapshot) => setComments(snapshot.docs)
        ), 
    [db, id]
    )

    useEffect(
        () => 
        onSnapshot(
            collection(db, "posts", id, "likes"),
            (snapshot) => 
            setLikes(snapshot.docs)
        ),
    [db, id]
    );

    useEffect(
        () => 
            setHasLiked(
                likes.findIndex((like) => like.id === session?.user?.uid) !== -1
            ),
        [likes]
    );

    const likePosts = async () => {
        if (hasLiked) {
          await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
        } else {
            await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
                username: session.user.username,
            });
        }
    };

    const sendComment = async (e) => {
        e.preventDefault();

        const commentToSend = comment;
        setComment("");

        await addDoc(collection(db, "posts", id, "comments"), {
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp(),
        });
    };


    return (
        <div className="bg-white my-7 border rounded-sm">
            {/* Header */}
            <div className="flex items-center p-5">
                <img 
                    src={userImg} 
                    className="rounded-full h-12 w-12 object-contain border p-1 mr-3" alt="" 
                />
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className="h-5" />
            </div>

            {/* img */}
                <img onClick={onClick}
                    src={img} 
                    className="object-contain w-full" 
                    alt="" 
                />

            {/* Buttons */}
            {session && (
                <div className="flex justify-between px-4 pt-4">
                    <div className="flex space-x-4">
                        {
                            hasLiked ? (
                                <HeartIconFilled 
                                    className="btn text-red-400"
                                    onClick={likePosts} 
                                />
                            ) : (
                                <HeartIcon 
                                    onClick={likePosts} className="btn"
                                />
                            )
                        }
                        <ChatIcon className="btn" />
                        <PaperAirplaneIcon className="btn rotate-45" />
                    </div>

                    <BookmarkIcon className="btn" />
                </div>
            )}
            

            {/* caption */}
            <p className="p-5 pb-1 truncate">
                {likes.length > 0 && (
                    <p className="font-bold mb-1">{likes.length} likes</p>
                )}

                <span className='font-bold mb-1'>{username} </span>
                {caption}
            </p>

            {/* comments */}
            {comments.length > 0 && (
                <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-gray-200 scrollbar-thin">   
                    {comments.map((comment) => (
                        <div key={comment.id} className="flex items-center space-x-2 mb-1">
                            <MinusSmIcon className="flex w-10 rotate-90 mr-[-20px] text-gray-200" />
                            <img 
                                className="h-7 rounded-full"
                                src={comment.data().userImage}
                                alt=""
                            />
                            <p className="text-sm flex-1">
                                <span className="font-bold">
                                    {comment.data().username}
                                </span>{" "}
                                {comment.data().comment}
                            </p>

                            <Moment fromNow className="pr-5 text-xs">
                               {comment.data().timestamp?.toDate()} 
                            </Moment>
                        </div>
                    ))}
                </div>
            )}

            {/* input box */}
            {session && (
                <form className="flex items-center pl-4 pr-4 pt-2 pb-2 border-t">
                <EmojiHappyIcon className="h-7" />
                <input 
                    type="text" 
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    placeholder="Lägg till kommentar..."
                    className="border-none flex-1 focus:ring-0 outline-none" 
                />
                <button 
                    type="submit" 
                    disabled={!comment.trim()} 
                    onClick={sendComment}
                    className="font-semibold text-blue-400">Publicera</button>
            </form>
            )}
            
        </div>
    );
}

export default Post;