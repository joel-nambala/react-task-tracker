import PropTypes from 'prop-types';
import Button from './Button';

const Header = function ({ title, onAdd, showAdd }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Open'}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string,
};

// Add CSS in JS
// const headingStyling = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
