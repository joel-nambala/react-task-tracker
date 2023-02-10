import { Link } from 'react-router-dom';

const About = function () {
  return (
    <div>
      <h4>Version 1.1.0. This is the about page</h4>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default About;
