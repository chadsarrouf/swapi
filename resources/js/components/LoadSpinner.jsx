import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

const LoadSpinner = (props) => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    color: blue;
  `;

  return (
    <div>
      <ClipLoader color={"#2fc3a9"} loading={props.isLoading} css={override} size={50} />
    </div>
  );
}

export default LoadSpinner;
