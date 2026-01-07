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
    <div className="mt-6 p-6 bg-white border border-neutral-200 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-neutral-900 mb-2">ABOUT</h1>
      <Users data = {userdata} />
    </div>
  );
};

export default About;
