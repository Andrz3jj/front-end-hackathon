import React from 'react';
import { useParams, Link } from 'react-router-dom';
import questionsData from './../questions.json';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface Post {
    id: number;
    title: string;
    content: string;
    upVotes: number;
    downVotes: number;
    user: string;
}

const PostDetails: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();
    const post: Post | undefined = questionsData.find((q: { id: number; }) => q.id === parseInt(postId || '', 10));

    return (
        <div className="container mx-auto p-6 text-white bg-slate-700 h-screen">
            {post ? (
                <>
                    <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-slate-400">By: {post.user}</span>
                        <div className="flex space-x-4">
                            <span className="text-sm text-green-400">Upvotes: {post.upVotes}</span>
                            <span className="text-sm text-red-400">Downvotes: {post.downVotes}</span>
                        </div>
                    </div>
                    <p className="text-sm text-slate-300">{post.content}</p>
                </>
            ) : (
                <div className="flex flex-col items-center">
                    <p className="text-lg font-bold text-slate-400 mb-4">Post not found.</p>
                    <Link
                        to="/"
                        className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-opacity duration-500 opacity-100 hover:opacity-80"
                    >
                        Create New Post
                    </Link>
                </div>
            )}
        </div>
    );
};

export default PostDetails;