// this component is a failed attempt at maps functionality
// refer to ListingMap.js for the actual functionality

import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
// import image from "../images/mapPin.png";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {text}
  </div>
);

// pass address as props down to Map component

const greatPlaceStyle = {
  position: "absolute",
};

const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};

const Map = (props) => {
  //   console.log(props.address);
  // replace " " with "+"
  const addressStr = props.address.replaceAll(/ /gi, "+");
  //   console.log(addressStr);
  const fetchURL = `https://maps.google.com/maps/api/geocode/json?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&address=${addressStr}`;

  const zoom = 11;

  const [data, setData] = useState(null);

  //   const defaultProps = {
  //     center: {
  //       lat: 10.99835602,
  //       lng: 77.01502627,
  //     },
  //   };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fetchURL).then();
        const newData = await response.json();
        setData(newData.results[0].geometry.location);
        // console.log(newData.results[0].geometry.location);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  } else {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "50vh", width: "100%" }}>
        {/* <img src={image}></img> */}
        <br />
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={data}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <AnyReactComponent
            lat={data.lat}
            lng={data.lng}
            text="My Marker"
            style={greatPlaceStyle}
          />
        </GoogleMapReact>
      </div>
    );
  }
};

export default Map;

// ATTEMPT 2

// import React from "react";
// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => (
//   <div
//     style={{
//       color: "white",
//       background: "grey",
//       padding: "15px 10px",
//       display: "inline-flex",
//       textAlign: "center",
//       alignItems: "center",
//       justifyContent: "center",
//       borderRadius: "100%",
//       transform: "translate(-50%, -50%)",
//     }}
//   >
//     {text}
//   </div>
// );

// export default function SimpleMap() {
//   const defaultProps = {
//     center: {
//       lat: 59.955413,
//       lng: 30.337844,
//     },
//     zoom: 11,
//   };

//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: "100vh", width: "100%" }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
//       </GoogleMapReact>
//     </div>
//   );
// }

// ATTEMPT 3

// import React from "react";
// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => (
//   <div
//     style={{
//       color: "white",
//       background: "grey",
//       padding: "15px 10px",
//       display: "inline-flex",
//       textAlign: "center",
//       alignItems: "center",
//       justifyContent: "center",
//       borderRadius: "100%",
//       transform: "translate(-50%, -50%)",
//     }}
//   >
//     {text}
//   </div>
// );

// class SimpleMap extends React.Component {
//   static defaultProps = {
//     center: { lat: 59.95, lng: 30.33 },
//     zoom: 11,
//   };

//   render() {
//     return (
//       <div style={{ width: "100%", height: "400px" }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text={"Kreyser Avrora"}
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <div style={{ width: "100%", height: "400px" }}>
//     <SimpleMap />
//   </div>,
//   document.getElementById("main")
// );

// export default SimpleMap;

// ATTEMPT 4

// import React from "react";
// import ReactDOM from "react-dom/client";
// // import "./index.css";
// // import App from "./App";
// // import reportWebVitals from "./reportWebVitals";
// // import React from "react";
// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => (
//   <div
//     style={{
//       color: "white",
//       background: "grey",
//       padding: "15px 10px",
//       display: "inline-flex",
//       textAlign: "center",
//       alignItems: "center",
//       justifyContent: "center",
//       borderRadius: "100%",
//       transform: "translate(-50%, -50%)",
//     }}
//   >
//     {text}
//   </div>
// );

// export default class Map extends React.Component {
//   static defaultProps = {
//     center: { lat: 59.95, lng: 30.33 },
//     zoom: 11,
//   };

//   render() {
//     return (
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
//         defaultCenter={this.props.center}
//         defaultZoom={this.props.zoom}
//       >
//         <AnyReactComponent
//           lat={59.955413}
//           lng={30.337844}
//           text={"Kreyser Avrora"}
//         />
//       </GoogleMapReact>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById("newroot"));
// root.render(
//   <div style={{ width: "100%", height: "400px" }}>
//     <SimpleMap />
//   </div>
// );
