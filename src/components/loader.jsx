import React from "react";
import { css } from "@emotion/react";
import { PulseLoader } from "react-spinners";

const loaderStyle = css`
  display: inline-flex;
  align-items: center;
`;

export default function Loader() {
  return <PulseLoader color="#ffffff" css={loaderStyle} loading={true} size={8} />;
}