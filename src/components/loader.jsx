import React from "react";
import { css } from "@emotion/react";
import { PulseLoader } from "react-spinners";

const loaderStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
`;

export default function Loader() {
  return (
      <PulseLoader color="#ffffff" css={loaderStyle} loading={true} size={6} />
  );
}
