import React from "react"
import "./style.css"
import image from "../../../assets/images/bookmark.png"

function ProjectCard1() {
    return (
        <>
         <div className="card">
              <img src={image} className="card-img-top" alt="Bookmark Manager" />
              <div className="card-body">
                  <h5 className="card-title">Bookmark Manager</h5>
                  <p className="card-text">This program allows one to keep all their bookmarks nicely organized to their hearts content.</p>
                  <a href="https://github.com/Kray93/Bookmark-Manager" target="_blank" className="btn btn-secondary">More Info</a>
             </div>
        </div>
        <hr className="line-break"/>
        </>
    );
};
export default ProjectCard1;