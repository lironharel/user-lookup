import { Link } from 'react-router-dom';
import '../components/common/error/error.scss'

const PageNotFound = () => {
  return (
    <div className='page-not-found'>
      <h1 className='error-heading'>404 - Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to={'/'}>
         <button className="error-btn btn">Home</button>
      </Link>
    </div>
  );
};

export default PageNotFound;