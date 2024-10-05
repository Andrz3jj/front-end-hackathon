import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import questionsData from './../questions.json';

interface Post {
    id: number;
    title: string;
    content: string;
    upVotes: number;
    downVotes: number;
    user: string;
}

const PostComponent: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
    const postsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [showGreeting, setShowGreeting] = useState(false);

    const filteredPosts: Post[] = questionsData.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const startIdx = (currentPage - 1) * postsPerPage;
    const currentPosts = filteredPosts.slice(startIdx, startIdx + postsPerPage);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        if (currentPage === totalPages) {
            setShowGreeting(true);
        } else {
            setShowGreeting(false);
        }
    }, [currentPage, totalPages]);

    return (
        <div className="space-y-8">
            {currentPosts.map((item: Post) => (
                <div key={item.id} className="rounded-2xl bg-slate-900 p-6 shadow-lg">
                    <h2 className="text-2xl font-bold mb-2">
                        <Link to={`/Forum/Posts/${item.id}`}>{item.title}</Link>
                    </h2>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-slate-400">By: {item.user}</span>
                        <div className="flex space-x-4">
                            <span className="text-sm text-green-400">Upvotes: {item.upVotes}</span>
                            <span className="text-sm text-red-400">Downvotes: {item.downVotes}</span>
                        </div>
                    </div>
                    <p className="text-sm text-slate-300">{item.content}</p>
                </div>
            ))}

            {totalPages > 1 && (
                <div className="flex justify-center space-x-2 mt-8">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-3 py-1 rounded-full border border-slate-700 ${currentPage === 1 ? 'text-slate-500 cursor-not-allowed' : 'text-white hover:bg-slate-700'}`}
                    >
                        <i className="bi bi-chevron-left"></i>
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-4 py-1 rounded-full border border-slate-700 ${currentPage === index + 1 ? 'bg-purple-600 text-white' : 'text-white hover:bg-slate-700'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-1 rounded-full border border-slate-700 ${currentPage === totalPages ? 'text-slate-500 cursor-not-allowed' : 'text-white hover:bg-slate-700'}`}
                    >
                        <i className="bi bi-chevron-right"></i>
                    </button>
                </div>
            )}

            <div
                className={`text-center mt-8 text-lg font-bold transition-opacity duration-1000 ${showGreeting ? 'opacity-100' : 'opacity-0'}`}
            >
                This is the end.
            </div>
        </div>
    );
};

export default PostComponent;
