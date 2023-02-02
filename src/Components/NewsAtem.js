import React from "react";

const NewsItem = (props)=>{

    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;
    return (
      <div className="my-3">
        <div className="card">
        <div style = {{  display: "flex", justifyContent: "flex-end", position: "absolute", right: "0px"}} >
        <span className=" badge rounded-pill bg-danger ">{source}</span>
        </div>
          <img
            src={!imageUrl
                ? "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
              <span className="badge text-bg-success">New</span>

            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-active fw-bolder fs-6 lh-1">
                By {!author ? "Unknown" : author} On{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem