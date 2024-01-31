import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import userContext from "../context/userContext";
import favListContext from "../context/favListContext";

export default function Root() {
  const { setUser } = useContext(userContext);
  const { setFavList } = useContext(favListContext);

  useEffect(() => {
    // https://spyer-io-api.onrender.com/root
    // fetch("https://spyer-io-api-v1-0-1.onrender.com/root", {
    fetch("https://spyer-io-api-v1-0-1.onrender.com/root", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setUser(data.user);
        if (data.user) {
          setFavList(data.user.favList);
        }
      })
      .catch((error) => console.error(error.message));
    // .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}
