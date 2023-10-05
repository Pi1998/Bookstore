const RemoveButton = ({ onClick, children }) => {
    return (
      <button onClick={onClick} className="remove">
        {children}
      </button>
    );
  };

export default RemoveButton;
  