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
    <div className="flex items-center justify-center p-3 border-3 bg-gray-600 border-dashed border-gray-900 rounded-full m-1 w-full h-full loader">
      <PulseLoader color="#ffffff" css={loaderStyle} loading={true} size={6} />
    </div>
  );
}
