import './error.scss';

function ErrorFetchingData() {
   const handleRefresh = () => {
      window.location.reload();
   };

   return (
      <div className="error-fetching-data">
         <h2>Error fetching data</h2>
         <p>Please try again later.</p>
         <button className="error-btn btn" onClick={handleRefresh}>Refresh</button>
      </div>
   );
}

export default ErrorFetchingData;
