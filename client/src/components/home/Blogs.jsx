import React, { useContext } from 'react'
import { DetailsContext } from "../../context/context";

function Blogs() {
    const { homeBlogs } = useContext(DetailsContext);
    const { article } = homeBlogs;
    return (
        <React.Fragment>
          <div id="news" >
            <div className="container py-3">            
            <div className="text-dark my-5 pt-4">
                <h2 className="mutual-heading font-weight-bold">Popular Destinations</h2>
            </div>
                <div className="row">
                    {article.map(blog => {
                        return (
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="card card-news mb-4">
                                    <img src={blog.image} alt={blog.name} className="img-fluid card-img-top" />
                                    <div className="card-body bg-white">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                                            <div className="text-muted font-medium">{blog.date}</div>
                                        </div>
                                        <div className="col-lg-7 col-md-7 col-sm-7 col-7 d-flex justify-content-end">
                                        <div className="text-muted font-medium">
                                            <i className="fa fa-comment-o"></i> {blog.comments}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <i className="fa fa-heart-o"></i> {blog.likes}
                                        </div>
                                        </div>
                                    </div>
                                    <h3 className="font-weight-bold blogs-heading mt-2">{blog.name}</h3>
                                    <p className="text-brown font-16 font-regular">{blog.paragraph}</p>
                                    <hr className="py-0 my-0"/>
                                    <button className="btn call-now-button mt-2 font-weight-bold text-white px-5 text-center w-100 mb-2 font-medium">&#x20B9;{blog.price}</button>
                                    </div>
                                </div>
                            </div>  
                        )
                    })}
                </div>
            </div>
      </div>
        </React.Fragment>
    )
}

export default Blogs
