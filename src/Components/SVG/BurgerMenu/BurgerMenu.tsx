import "./BurgerMenu.css";

function BurgerMenu(props: any) {
  return (
    <svg
      width="50px"
      height="50px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className="menu-burger-path"
    >
      <g clipPath="url(#clip0_429_11066)">
        <path
          d="M3 6h18M3 12h18M3 18h18"
          stroke="black"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_429_11066">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default BurgerMenu;
