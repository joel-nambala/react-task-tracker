import { Link } from 'react-router-dom';

const Footer = function () {
  // const changeCopyYear = function () {
  //   const today = new Date().getFullYear();
  //   return today;
  // };

  return (
    <footer>
      <p>Copyright &copy; 2023</p>
      <Link to="/about">About</Link>
    </footer>
  );
};
export default Footer;
