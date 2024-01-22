// import React from "react";
// import Login from "../components/Login";
// import "./LoginPage.scss";
// export default function LoginPage() {
//   return (
//     <div className={"main"}>
//       <div className="box">
//         <Login />
//       </div>
//       <div className="box1"></div>
//     </div>
//   );
// }
import Anime from '../assets/anime.mp4';
import React from "react";
import Login from "../components/Login";
import "./LoginPage.scss";

export default function LoginPage() {
  return (
    <div className={"main"}>
      <div className="box">
        <Login />
      </div>
      <div className="box1">
        <video autoPlay loop muted playsInline >
          <source src={Anime} type="video/mp4"/>
        </video>
      </div>
    </div>
  );
}
