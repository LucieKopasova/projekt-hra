export const SoundOffIcon = () => {
  return (
    <div
      className="soundOffIcon"
      style={{
        border: '3px solid #412f01',
        borderRadius: '7px',
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        fill="#3B2600"
      >
        <path d="M8 24V40C8 41.1 8.9 42 10 42H18L32 54V10L18 22H10C8.9 22 8 22.9 8 24Z" />
        <line
          x1="40"
          y1="20"
          x2="52"
          y2="44"
          stroke="#3B2600"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="52"
          y1="20"
          x2="40"
          y2="44"
          stroke="#3B2600"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
