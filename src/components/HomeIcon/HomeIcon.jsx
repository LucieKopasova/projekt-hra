export const HomeIcon = () => {
  return (
    <div
      className="homeButton"
      style={{
        border: '3px solid #412f01',
        borderRadius: '7px',
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        fill="#3B2600"
      >
        <path d="M16 28L32 14L48 28V48C48 49.1046 47.1046 50 46 50H38C36.8954 50 36 49.1046 36 48V38H28V48C28 49.1046 27.1046 50 26 50H18C16.8954 50 16 49.1046 16 48V28Z" />
      </svg>
    </div>
  );
};
