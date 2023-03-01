import './error.scss';

function Error({heading, content}) {
   const handleRefresh = () => {
      window.location.reload();
   };

   return (
      <div className="error-container">
         <h2>{heading}</h2>
         <p>{content}</p>
         <button className="error-btn btn" onClick={handleRefresh}>Refresh</button>
      </div>
   );
}

export default Error