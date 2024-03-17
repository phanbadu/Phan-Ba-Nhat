import React from 'react';
import Header from '../components/Header';
import User from '../components/User';
import CreatePost from '../components/CreatePost';
import PopularPosts from '../components/PopularPosts';
import Posts from '../components/Posts';

export default function Users() {
    return (
        <div className="w-full h-full py-10 bg-slate-200 py-3xl">
            <div
                className="
                container 
                m-auto 
                xl:max-w-7xl 
                md:max-w-4xl 
                sm:max-w-xl
                max-w-sm
            "
            >
                <Header />
                <div className="flex gap-5 mt-10">
                    <div className="w-8/12">
                        <User />
                        <Posts />
                    </div>
                    <div className="w-4/12 flex flex-col gap-5">
                        <CreatePost />
                        <PopularPosts />
                    </div>
                </div>
            </div>
        </div>
    );
}
