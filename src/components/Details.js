import React from "react";

function Details(props) {
  const urlStuff = window.location.href.split("/");
  const targetBusiness = urlStuff[urlStuff.length - 1];
  // this seems insanely hacky, but it works
  // if there are more path parameters on the end, this would break
  // maybe I can find a better solution later.
  const business = props.businesses.find(
    (biz) => biz.id === Number(targetBusiness)
  );
  console.log(business);
  if (!business) {
    return <div>Business not found</div>;
  }

  return (
    <>
      {props.username && (
        <div className="top-level-user">Logged in as: {props.username}</div>
      )}
      <div className="details">
        <h1>{business.name}</h1>
        <h3>{business.address}</h3>
        <h3>{business.hours}</h3>
        <p>{business.description}</p>
        <h2>(Maps will go here eventually)</h2>
      </div>
    </>
  );
}

export default Details;
