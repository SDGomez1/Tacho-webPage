export const DottedCircle = (props: { className: string | undefined }) => {
  return (
    <svg
      width="436"
      height="436"
      viewBox="0 0 436 436"
      fill="none"
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="218"
        cy="218"
        r="216.5"
        stroke="#8A6CF7"
        strokeWidth="3"
        strokeDasharray="10 10"
      />
    </svg>
  );
};
