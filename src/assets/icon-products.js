import React from 'react';

export default (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#95a5a6"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-package"
  >
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
    <path
      opacity={props.opacity || ""}
      fill={props.fill || "#9FA2B4"}
      d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
    ></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line
      opacity={props.opacity || ""}
      fill={props.fill || "#9FA2B4"}
      x1="12"
      y1="22.08"
      x2="12"
      y2="12"
    ></line>
  </svg>
);
