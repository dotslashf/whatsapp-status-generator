interface IconProps {
  className?: string;
}

export const SizeIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 7v-2h13v2" />
    <path d="M10 5v14" />
    <path d="M12 19h-4" />
    <path d="M15 13v-1h6v1" />
    <path d="M18 12v7" />
    <path d="M17 19h2" />
  </svg>
);

export const FontIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 20l3 0" />
    <path d="M14 20l7 0" />
    <path d="M6.9 15l6.9 0" />
    <path d="M10.2 6.3l5.8 13.7" />
    <path d="M5 20l6 -16l2 0l7 16" />
  </svg>
);

export const CalendarIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <path d="M16 3l0 4" />
    <path d="M8 3l0 4" />
    <path d="M4 11l16 0" />
    <path d="M8 15h2v2h-2z" />
  </svg>
);

export const TextIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
    <path d="M4 16v2a2 2 0 0 0 2 2h2" />
    <path d="M16 4h2a2 2 0 0 1 2 2v2" />
    <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
    <path d="M8 12h8" />
    <path d="M8 9h6" />
    <path d="M8 15h4" />
  </svg>
);

export const PersonIcon = (props: IconProps) => (
  <svg
    className={props.className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 10a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
    <path d="M6 21v-1a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v1" />
    <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
  </svg>
);

export const ConfigIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  </svg>
);
