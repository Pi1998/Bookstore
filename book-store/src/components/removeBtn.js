import PropTypes from 'prop-types';

const RemoveButton = ({ onClick, children }) => (
  <button type="button" onClick={onClick} className="remove">
    {children}
  </button>
);

RemoveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

RemoveButton.defaultProps = {
  children: null,
};

export default RemoveButton;
