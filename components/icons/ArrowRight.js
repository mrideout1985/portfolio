import * as React from "react";

function SvgArrowRight(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill={props.color} width={props.size} height={props.size} {...props}>
      <path
        fillRule="evenodd"
        d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z"
      />
    </svg>
  );
}

export default SvgArrowRight;
