import React from "react";
import Navebar from "../Shared/Navebar";
import Banner from "./Banner";
import Post from "./Post/Post";

const Home = () => {
    return (
        <div>
            <Navebar></Navebar>
            <Banner></Banner>
            <Post></Post>
        </div>
    );
};

export default Home;
