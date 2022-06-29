import React from "react";
import post1 from "../../../assets/post-1.png";
import post1_man from "../../../assets/post-1-man.png";
import see_icon from "../../../assets/see-icon.png";
import share_icon from "../../../assets/share-icon.png";
import "./Post.css";

const Post = () => {
    return (
        <section className="all-post">
            {/* FIRST POST  */}
            <div className="border post-div">
                <img className="img-fluid" src={post1} alt="" />
                <div className="content-div">
                    <h6 className="sub-title">✍️ Article</h6>
                    <h5>
                        What if famous brands had regular fonts? Meet
                        RegulaBrands!
                    </h5>
                    <p className="content-paragraph">
                        I’ve worked in UX for the better part of a decade. From
                        now on, I plan to rei…
                    </p>
                    <div className="admin-div d-flex align-items-center">
                        <img src={post1_man} alt="" />
                        <p className="admin-name">
                            <strong>Sarthak Kamra</strong>
                        </p>
                        <div className="d-flex align-items-center text-end">
                            <img
                                className="img-fluid h-75"
                                src={see_icon}
                                alt=""
                            />
                            <p>
                                <small>1.4k views</small>
                            </p>
                            <img
                                className="img-fluid h-75"
                                src={share_icon}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Post;
