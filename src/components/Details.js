import React from "react";
import ListingMap from "./ListingMap";

function Details(props) {
  console.log(props.address);
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
    <div style={{ width: "100%", height: "100vh" }}>
      {props.username && (
        <div className="top-level-user">Logged in as: {props.username}</div>
      )}
      <div className="details">
        <h1>{business.name}</h1>
        <h3>{business.address}</h3>
        <h3>{business.hours}</h3>
        <p>{business.description}</p>
      </div>
      <ListingMap
        address={business.address}
        style={{ height: "50vh", width: "1000px" }}
      />
    </div>
  );
}

export default Details;
