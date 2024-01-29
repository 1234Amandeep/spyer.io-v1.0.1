import React, { useContext, useState } from "react";
import PlayerProfileContext from "../context/PlayerProfileContext";
import PlayerProfilePreview from "./PlayerProfilePreview";
import Searchbar from "./Searchbar";
import fetchErrorContext from "../context/fetchErrorContext";

export default function Search() {
  const { playerProfile } = useContext(PlayerProfileContext);
  const { isError, setIsError } = useContext(fetchErrorContext);

  if (!playerProfile && !isError) {
    return <Searchbar />;
  }

  return (
    <>
      <Searchbar />
      <PlayerProfilePreview />
    </>
  );
}
