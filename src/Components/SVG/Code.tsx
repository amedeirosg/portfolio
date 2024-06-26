function Code(props: any) {
  return (
    <svg
      width="50px"
      height="50px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.5 9l.172.172c1.333 1.333 2 2 2 2.828 0 .828-.667 1.495-2 2.828L15.5 15M13.294 7.17L12 12l-1.294 4.83M8.5 9l-.171.172c-1.334 1.333-2 2-2 2.828 0 .828.666 1.495 2 2.828L8.5 15"
        stroke="black"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12z"
        stroke="black"
        strokeWidth={1.5}
      />
    </svg>
  );
}

export default Code;
