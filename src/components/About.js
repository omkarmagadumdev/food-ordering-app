import Users from "./Users";
import { useEffect, useState } from "react";

const About = () => {
  const [userdata, setuserdata] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      let data = await fetch("https://api.github.com/users/omkarmagadumdev");
      let json = await data.json();
      console.log(json);
      setuserdata(json);
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <div className="about">
      <h1>ABOUT</h1>
      <Users data = {userdata} />
    </div>
  );
};

export default About;
