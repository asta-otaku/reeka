import { SVGAttributes } from "react";

export function AccountSettingIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.8721 2.92279C10.4781 2.92279 10.2811 2.92279 10.1016 2.8562C10.0767 2.84694 10.0521 2.83677 10.0279 2.82568C9.85392 2.74586 9.71465 2.60656 9.43599 2.32794C8.79472 1.68668 8.47412 1.36604 8.07958 1.33648C8.02658 1.3325 7.97325 1.3325 7.92025 1.33648C7.52572 1.36604 7.20505 1.68668 6.56382 2.32794C6.2852 2.60656 6.1459 2.74586 5.9719 2.82568C5.94773 2.83677 5.92316 2.84694 5.89823 2.8562C5.71875 2.92279 5.52174 2.92279 5.12773 2.92279H5.05504C4.04977 2.92279 3.54714 2.92279 3.23485 3.23509C2.92255 3.54738 2.92255 4.05002 2.92255 5.05529V5.12797C2.92255 5.52198 2.92255 5.719 2.85595 5.89848C2.8467 5.9234 2.83653 5.94798 2.82544 5.97214C2.74562 6.14614 2.60631 6.28545 2.32769 6.56406C1.68643 7.2053 1.3658 7.52596 1.33623 7.9205C1.33226 7.9735 1.33226 8.02683 1.33623 8.07983C1.3658 8.47436 1.68643 8.79496 2.32769 9.43623C2.60631 9.7149 2.74562 9.85416 2.82544 10.0282C2.83653 10.0524 2.8467 10.0769 2.85595 10.1018C2.92255 10.2813 2.92255 10.4784 2.92255 10.8724V10.945C2.92255 11.9503 2.92255 12.453 3.23485 12.7652C3.54714 13.0776 4.04977 13.0776 5.05504 13.0776H5.12773C5.52174 13.0776 5.71875 13.0776 5.89823 13.1441C5.92316 13.1534 5.94773 13.1636 5.9719 13.1746C6.1459 13.2545 6.2852 13.3938 6.56382 13.6724C7.20505 14.3136 7.52572 14.6343 7.92025 14.6638C7.97325 14.6678 8.02658 14.6678 8.07958 14.6638C8.47412 14.6343 8.79472 14.3136 9.43599 13.6724C9.71465 13.3938 9.85392 13.2545 10.0279 13.1746C10.0521 13.1636 10.0767 13.1534 10.1016 13.1441C10.2811 13.0776 10.4781 13.0776 10.8721 13.0776H10.9448C11.9501 13.0776 12.4527 13.0776 12.765 12.7652C13.0773 12.453 13.0773 11.9503 13.0773 10.945V10.8724C13.0773 10.4784 13.0773 10.2813 13.1439 10.1018C13.1531 10.0769 13.1633 10.0524 13.1744 10.0282C13.2543 9.85416 13.3935 9.7149 13.6721 9.43623C14.3134 8.79496 14.6341 8.47436 14.6636 8.07983C14.6676 8.02683 14.6676 7.9735 14.6636 7.9205C14.6341 7.52596 14.3134 7.2053 13.6721 6.56406C13.3935 6.28545 13.2543 6.14614 13.1744 5.97214C13.1633 5.94798 13.1531 5.9234 13.1439 5.89848C13.0773 5.719 13.0773 5.52198 13.0773 5.12797V5.05529C13.0773 4.05002 13.0773 3.54738 12.765 3.23509C12.4527 2.92279 11.9501 2.92279 10.9448 2.92279H10.8721Z"
        stroke={props.color}
      />
      <path
        d="M5.66675 11.0002C6.1325 10.195 7.00301 9.65329 8.00008 9.65329C8.99715 9.65329 9.86768 10.195 10.3334 11.0002M9.33341 6.66682C9.33341 7.40322 8.73648 8.00016 8.00008 8.00016C7.26375 8.00016 6.66675 7.40322 6.66675 6.66682C6.66675 5.93045 7.26375 5.3335 8.00008 5.3335C8.73648 5.3335 9.33341 5.93045 9.33341 6.66682Z"
        stroke={props.color}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowLongLeftIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
      />
    </svg>
  );
}

export function ArrowLongRightIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
      />
    </svg>
  );
}

export function Calendar(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.06177 6.26953H12.9444"
        stroke="#6D6D6D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.96143 8.87305H9.9676"
        stroke="#6D6D6D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.00317 8.87305H7.00935"
        stroke="#6D6D6D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.03857 8.87305H4.04475"
        stroke="#6D6D6D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.96143 11.4644H9.9676"
        stroke="#6D6D6D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.00317 11.4644H7.00935"
        stroke="#6D6D6D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.03857 11.4644H4.04475"
        stroke="#6D6D6D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.6958 1.3335V3.52735"
        stroke="#6D6D6D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.3103 1.3335V3.52735"
        stroke="#6D6D6D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.82551 2.38623H4.18064C2.22285 2.38623 1 3.47685 1 5.48158V11.5147C1 13.5509 2.22285 14.6668 4.18064 14.6668H9.81933C11.7833 14.6668 13 13.5698 13 11.5651V5.48158C13.0062 3.47685 11.7895 2.38623 9.82551 2.38623Z"
        stroke="#6D6D6D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CalendarIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 1.3335V2.66683M4 1.3335V2.66683"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66667 11.3332L6.66666 8.89797C6.66666 8.77017 6.5755 8.6665 6.46305 8.6665H6M9.08647 11.3332L9.98947 8.8993C10.0317 8.7855 9.94187 8.6665 9.8138 8.6665H8.66667"
        stroke={props.color}
        strokeLinecap="round"
      />
      <path
        d="M1.66675 8.16213C1.66675 5.25729 1.66675 3.80485 2.50149 2.90243C3.33624 2 4.67974 2 7.36675 2H8.63341C11.3204 2 12.6639 2 13.4987 2.90243C14.3334 3.80485 14.3334 5.25729 14.3334 8.16213V8.50453C14.3334 11.4094 14.3334 12.8618 13.4987 13.7643C12.6639 14.6667 11.3204 14.6667 8.63341 14.6667H7.36675C4.67974 14.6667 3.33624 14.6667 2.50149 13.7643C1.66675 12.8618 1.66675 11.4094 1.66675 8.50453V8.16213Z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 5.3335H12"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronDownIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function CloseIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="16" cy="16" r="16" fill="#E9EDF1" />
      <path
        d="M22 10L10 22M22 22L10 10"
        stroke="#E36B37"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CodeSandBoxIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.2302 1.65204C7.60587 1.43968 7.79373 1.3335 8 1.3335C8.20627 1.3335 8.39413 1.43968 8.7698 1.65204L13.2302 4.17338C13.6059 4.38575 13.7937 4.49194 13.8969 4.66683C14 4.84172 14 5.05409 14 5.47882V10.5215C14 10.9462 14 11.1586 13.8969 11.3335C13.7937 11.5084 13.6059 11.6146 13.2302 11.827L8.7698 14.3483C8.39413 14.5606 8.20627 14.6668 8 14.6668C7.79373 14.6668 7.60587 14.5606 7.2302 14.3483L2.7698 11.827C2.39411 11.6146 2.20627 11.5084 2.10313 11.3335C2 11.1586 2 10.9462 2 10.5215V5.47882C2 5.05409 2 4.84172 2.10313 4.66683C2.20627 4.49194 2.39411 4.38575 2.7698 4.17338L7.2302 1.65204Z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3334 2.84717L8.75608 3.70057C8.38695 3.90029 8.20241 4.00015 8.00008 4.00015C7.79775 4.00015 7.61321 3.90029 7.24408 3.70057L5.66675 2.84717"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99992 7.74344V14.6665M7.99992 7.74344L13.6666 4.6665M7.99992 7.74344L2.33325 4.6665"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 8L3.92962 9.039C4.28823 9.23213 4.46753 9.32867 4.5671 9.50213C4.66667 9.67567 4.66667 9.89153 4.66667 10.3233V12.6667"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9999 8L12.0703 9.039C11.7117 9.23213 11.5324 9.32867 11.4328 9.50213C11.3333 9.67567 11.3333 9.89153 11.3333 10.3233V12.6667"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DashboardIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M1.33325 4.00016C1.33325 2.74308 1.33325 2.11454 1.72378 1.72402C2.1143 1.3335 2.74284 1.3335 3.99992 1.3335C5.257 1.3335 5.88554 1.3335 6.27606 1.72402C6.66659 2.11454 6.66659 2.74308 6.66659 4.00016V5.3335C6.66659 6.59058 6.66659 7.2191 6.27606 7.60963C5.88554 8.00016 5.257 8.00016 3.99992 8.00016C2.74284 8.00016 2.1143 8.00016 1.72378 7.60963C1.33325 7.2191 1.33325 6.59058 1.33325 5.3335V4.00016Z"
        stroke={props.color}
      />
      <path
        d="M1.33325 12.6665C1.33325 12.0452 1.33325 11.7346 1.43475 11.4896C1.57007 11.1629 1.82964 10.9033 2.15634 10.768C2.40137 10.6665 2.712 10.6665 3.33325 10.6665H4.66659C5.28784 10.6665 5.59847 10.6665 5.8435 10.768C6.1702 10.9033 6.42977 11.1629 6.56509 11.4896C6.66659 11.7346 6.66659 12.0452 6.66659 12.6665C6.66659 13.2878 6.66659 13.5984 6.56509 13.8434C6.42977 14.1701 6.1702 14.4297 5.8435 14.565C5.59847 14.6665 5.28784 14.6665 4.66659 14.6665H3.33325C2.712 14.6665 2.40137 14.6665 2.15634 14.565C1.82964 14.4297 1.57007 14.1701 1.43475 13.8434C1.33325 13.5984 1.33325 13.2878 1.33325 12.6665Z"
        stroke={props.color}
      />
      <path
        d="M9.33325 10.6667C9.33325 9.4096 9.33325 8.78107 9.72379 8.39053C10.1143 8 10.7429 8 11.9999 8C13.257 8 13.8855 8 14.2761 8.39053C14.6666 8.78107 14.6666 9.4096 14.6666 10.6667V12C14.6666 13.2571 14.6666 13.8856 14.2761 14.2761C13.8855 14.6667 13.257 14.6667 11.9999 14.6667C10.7429 14.6667 10.1143 14.6667 9.72379 14.2761C9.33325 13.8856 9.33325 13.2571 9.33325 12V10.6667Z"
        stroke={props.color}
      />
      <path
        d="M9.33325 3.3335C9.33325 2.71224 9.33325 2.40162 9.43472 2.15658C9.57005 1.82988 9.82965 1.57032 10.1563 1.43499C10.4014 1.3335 10.712 1.3335 11.3333 1.3335H12.6666C13.2879 1.3335 13.5985 1.3335 13.8435 1.43499C14.1702 1.57032 14.4298 1.82988 14.5651 2.15658C14.6666 2.40162 14.6666 2.71224 14.6666 3.3335C14.6666 3.95475 14.6666 4.26538 14.5651 4.51041C14.4298 4.83711 14.1702 5.09668 13.8435 5.232C13.5985 5.3335 13.2879 5.3335 12.6666 5.3335H11.3333C10.712 5.3335 10.4014 5.3335 10.1563 5.232C9.82965 5.09668 9.57005 4.83711 9.43472 4.51041C9.33325 4.26538 9.33325 3.95475 9.33325 3.3335Z"
        stroke={props.color}
      />
    </svg>
  );
}

export function ExclamationCircleIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
      />
    </svg>
  );
}

export function FileBookmarkIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 3.83186C2 2.65412 2 2.06525 2.34171 1.69938C2.68342 1.3335 3.23339 1.3335 4.33333 1.3335C5.43328 1.3335 5.98325 1.3335 6.32496 1.69938C6.66667 2.06525 6.66667 2.65412 6.66667 3.83186V5.02788C6.66667 5.9119 6.66667 6.35391 6.44326 6.54146C6.38145 6.59336 6.31048 6.63135 6.23462 6.65316C5.96045 6.73196 5.63019 6.46679 4.9697 5.93638C4.69494 5.71574 4.55757 5.60542 4.40143 5.58576C4.35619 5.58007 4.31048 5.58007 4.26524 5.58576C4.1091 5.60542 3.97173 5.71574 3.69697 5.93638C3.03647 6.46679 2.70622 6.73196 2.43205 6.65316C2.35619 6.63135 2.28522 6.59336 2.22341 6.54146C2 6.35391 2 5.9119 2 5.02788V3.83186Z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.66675 1.3335H8.84855C11.0227 1.3335 12.1097 1.3335 12.8647 1.86539C13.081 2.01778 13.273 2.19851 13.4349 2.40209C14.0001 3.11261 14.0001 4.13574 14.0001 6.18198V7.87896C14.0001 9.85443 14.0001 10.8421 13.6875 11.631C13.1849 12.8992 12.122 13.8996 10.7745 14.3726C9.93635 14.6668 8.88688 14.6668 6.78795 14.6668C5.58858 14.6668 4.98889 14.6668 4.50993 14.4987C3.73994 14.2284 3.13258 13.6568 2.84539 12.9321C2.66675 12.4813 2.66675 11.9169 2.66675 10.788V8.66683"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9999 8C13.9999 9.22727 13.005 10.2222 11.7777 10.2222C11.3339 10.2222 10.8106 10.1445 10.379 10.2601C9.99558 10.3628 9.69605 10.6623 9.59332 11.0457C9.47772 11.4773 9.55545 12.0006 9.55545 12.4445C9.55545 13.6717 8.56052 14.6667 7.33325 14.6667"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Hamburger(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="32"
      height="21"
      viewBox="0 0 32 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="menu-icon">
        <rect id="Rectangle 19" width="32" height="3" rx="1.5" fill="#E36B37" />
        <rect
          id="Rectangle 19 Copy"
          y="9"
          width="32"
          height="3"
          rx="1.5"
          fill="#E36B37"
        />
        <rect
          id="Rectangle 19 Copy 2"
          y="18"
          width="32"
          height="3"
          rx="1.5"
          fill="#E36B37"
        />
      </g>
    </svg>
  );
}

export function ManagerIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.3334 14.6665V11.3332C13.3334 10.0761 13.3334 9.44757 12.9429 9.05704C12.5523 8.6665 11.9238 8.6665 10.6667 8.6665L8.00008 14.6665L5.33341 8.6665C4.07633 8.6665 3.44779 8.6665 3.05727 9.05704C2.66675 9.44757 2.66675 10.0761 2.66675 11.3332V14.6665"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99992 9.99984L7.66659 12.6665L7.99992 13.6665L8.33325 12.6665L7.99992 9.99984ZM7.99992 9.99984L7.33325 8.6665H8.66659L7.99992 9.99984Z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3334 4.3335V3.66683C10.3334 2.37816 9.28875 1.3335 8.00008 1.3335C6.71141 1.3335 5.66675 2.37816 5.66675 3.66683V4.3335C5.66675 5.62216 6.71141 6.66683 8.00008 6.66683C9.28875 6.66683 10.3334 5.62216 10.3334 4.3335Z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NotificationIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99996 14.8729C12.6993 14.8729 14.8733 14.27 15.0833 11.8503C15.0833 9.43217 13.5676 9.58766 13.5676 6.62076C13.5676 4.30329 11.371 1.6665 7.99996 1.6665C4.62894 1.6665 2.43233 4.30329 2.43233 6.62076C2.43233 9.58766 0.916626 9.43217 0.916626 11.8503C1.12742 14.2792 3.30144 14.8729 7.99996 14.8729Z"
        stroke="#6D6D6D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99064 17.3809C8.85386 18.6431 7.08052 18.6581 5.93286 17.3809"
        stroke="#6D6D6D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PropertyIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.66675 7.99984C1.66675 5.01428 1.66675 3.5215 2.59424 2.594C3.52174 1.6665 5.01452 1.6665 8.00007 1.6665C10.9857 1.6665 12.4784 1.6665 13.4059 2.594C14.3334 3.5215 14.3334 5.01428 14.3334 7.99984C14.3334 10.9854 14.3334 12.4782 13.4059 13.4057C12.4784 14.3332 10.9857 14.3332 8.00007 14.3332C5.01452 14.3332 3.52174 14.3332 2.59424 13.4057C1.66675 12.4782 1.66675 10.9854 1.66675 7.99984Z"
        stroke={props.color}
      />
      <path
        d="M1.66675 5.3335H14.3334"
        stroke={props.color}
        strokeLinejoin="round"
      />
      <path
        d="M7.33341 11.3335H11.3334M4.66675 11.3335H5.33341"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.33341 8.6665H11.3334M4.66675 8.6665H5.33341"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ScaleIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.00008 8.66683L11.3334 11.6668M8.00008 8.66683L4.66675 11.6668M8.00008 8.66683V5.3335"
        stroke={props.color}
      />
      <path
        d="M12.1277 10.9636C12.4721 10.7655 12.6443 10.6665 12.8333 10.6665C13.0224 10.6665 13.1946 10.7655 13.539 10.9636L13.961 11.2063C14.3054 11.4044 14.4776 11.5034 14.5721 11.6665C14.6667 11.8296 14.6667 12.0277 14.6667 12.4238V12.9092C14.6667 13.3053 14.6667 13.5034 14.5721 13.6665C14.4776 13.8296 14.3054 13.9286 13.961 14.1267L13.539 14.3694C13.1946 14.5675 13.0224 14.6665 12.8333 14.6665C12.6443 14.6665 12.4721 14.5675 12.1277 14.3694L11.7057 14.1267C11.3613 13.9286 11.1891 13.8296 11.0945 13.6665C11 13.5034 11 13.3053 11 12.9092V12.4238C11 12.0277 11 11.8296 11.0945 11.6665C11.1891 11.5034 11.3613 11.4044 11.7057 11.2063L12.1277 10.9636Z"
        stroke={props.color}
      />
      <path
        d="M2.46093 10.9636C2.80532 10.7655 2.97751 10.6665 3.16659 10.6665C3.35567 10.6665 3.52785 10.7655 3.87224 10.9636L4.29427 11.2063C4.63865 11.4044 4.81084 11.5034 4.90538 11.6665C4.99992 11.8296 4.99992 12.0277 4.99992 12.4238V12.9092C4.99992 13.3053 4.99992 13.5034 4.90538 13.6665C4.81084 13.8296 4.63865 13.9286 4.29427 14.1267L3.87224 14.3694C3.52785 14.5675 3.35567 14.6665 3.16659 14.6665C2.97751 14.6665 2.80532 14.5675 2.46093 14.3694L2.03891 14.1267C1.69452 13.9286 1.52233 13.8296 1.42779 13.6665C1.33325 13.5034 1.33325 13.3053 1.33325 12.9092V12.4238C1.33325 12.0277 1.33325 11.8296 1.42779 11.6665C1.52233 11.5034 1.69452 11.4044 2.03891 11.2063L2.46093 10.9636Z"
        stroke={props.color}
      />
      <path
        d="M7.29441 1.63058C7.63881 1.43252 7.81101 1.3335 8.00008 1.3335C8.18915 1.3335 8.36135 1.43252 8.70575 1.63058L9.12775 1.8733C9.47215 2.07136 9.64435 2.17038 9.73888 2.3335C9.83341 2.49661 9.83341 2.69466 9.83341 3.09078V3.57621C9.83341 3.97233 9.83341 4.17038 9.73888 4.3335C9.64435 4.49661 9.47215 4.59564 9.12775 4.7937L8.70575 5.03641C8.36135 5.23447 8.18915 5.3335 8.00008 5.3335C7.81101 5.3335 7.63881 5.23447 7.29441 5.03641L6.87241 4.7937C6.52801 4.59564 6.35583 4.49661 6.26129 4.3335C6.16675 4.17038 6.16675 3.97233 6.16675 3.57621V3.09078C6.16675 2.69466 6.16675 2.49661 6.26129 2.3335C6.35583 2.17038 6.52801 2.07136 6.87241 1.8733L7.29441 1.63058Z"
        stroke={props.color}
      />
    </svg>
  );
}

export function UserCircleIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.99992 14.6668C11.6818 14.6668 14.6666 11.6821 14.6666 8.00016C14.6666 4.31826 11.6818 1.3335 7.99992 1.3335C4.31802 1.3335 1.33325 4.31826 1.33325 8.00016C1.33325 11.6821 4.31802 14.6668 7.99992 14.6668Z"
        stroke={props.color}
      />
      <path
        d="M5 11.3332C6.55447 9.70504 9.4288 9.62837 11 11.3332M9.6634 6.33317C9.6634 7.25364 8.91613 7.99984 7.99433 7.99984C7.0726 7.99984 6.32531 7.25364 6.32531 6.33317C6.32531 5.4127 7.0726 4.6665 7.99433 4.6665C8.91613 4.6665 9.6634 5.4127 9.6634 6.33317Z"
        stroke={props.color}
        strokeLinecap="round"
      />
    </svg>
  );
}