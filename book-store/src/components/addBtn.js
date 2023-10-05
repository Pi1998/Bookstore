const AddButton = ({ onClick, children }) => {
    return (
      <button onClick={onClick} className="btnAdd">
        {children}
      </button>
    );
  };

  export default AddButton;
  