import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NumberTicker from "@/components/ui/number-ticker.tsx";
import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button.tsx";

interface Post {
    id: number;
    title: string;
    content: string;
    upVotes: number;
    downVotes: number;
    user: string;
}

interface PostItemProps {
    post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
    const [upVotes, setUpVotes] = useState(post.upVotes);
    const [downVotes, setDownVotes] = useState(post.downVotes);
    const [isUpVoted, setIsUpVoted] = useState(false);
    const [isDownVoted, setIsDownVoted] = useState(false);

    const handleUpVote = () => {
        if (isUpVoted) {
            // Jeśli użytkownik już upvotował, odwołaj upvote
            setUpVotes(upVotes - 1);
            setIsUpVoted(false);
        } else {
            // Dodaj upvote
            setUpVotes(upVotes + 1);
            setIsUpVoted(true);
            // Jeśli wcześniej downvotował, odwołaj downvote
            if (isDownVoted) {
                setDownVotes(downVotes - 1);
                setIsDownVoted(false);
            }
        }
    };

    const handleDownVote = () => {
        if (isDownVoted) {
            // Jeśli użytkownik już downvotował, odwołaj downvote
            setDownVotes(downVotes - 1);
            setIsDownVoted(false);
        } else {
            // Dodaj downvote
            setDownVotes(downVotes + 1);
            setIsDownVoted(true);
            // Jeśli wcześniej upvotował, odwołaj upvote
            if (isUpVoted) {
                setUpVotes(upVotes - 1);
                setIsUpVoted(false);
            }
        }
    };

    return (
        <div className="rounded-2xl bg-slate-900 p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-2">
                <Link to={`/Forum/Posts/${post.id}`}>{post.title}</Link>
            </h2>
            <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-slate-400">By: {post.user}</span>
                <div className="flex items-center space-x-4">
                    {/* Upvote Button */}
                    <div className="text-sm">
                        <AnimatedSubscribeButton
                            buttonColor="#22c55e"
                            buttonTextColor="white"
                            subscribeStatus={isUpVoted}
                            initialText={<i className="bi bi-caret-up"></i>}
                            changeText={<i className="bi bi-caret-up-fill"></i>}
                            onClick={handleUpVote}
                        />
                    </div>

                    {/* Wyświetlanie Głosek */}
                    <NumberTicker
                        value={upVotes - downVotes}
                        className="text-white font-bold text-2xl"
                    />

                    {/* Downvote Button */}
                    <div className="text-sm">
                        <AnimatedSubscribeButton
                            buttonColor="#ef4444"
                            buttonTextColor="white"
                            subscribeStatus={isDownVoted}
                            initialText={<i className="bi bi-caret-down"></i>}
                            changeText={<i className="bi bi-caret-down-fill"></i>}
                            onClick={handleDownVote}
                        />
                    </div>
                </div>
            </div>
            <p className="text-sm text-slate-300">{post.content}</p>
        </div>
    );
};

export default PostItem;