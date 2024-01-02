import React, { useContext } from "react";
import { UserDetailsContext } from "../App";

export default function Home() {
  const userDetails = useContext(UserDetailsContext);
  console.log(userDetails);
  return <div>HOME = {userDetails}</div>;
}
