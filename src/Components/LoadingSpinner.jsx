const LoadingSpinner = () => {
  return(
<div className="vh-100 d-flex flex-column justify-content-center align-items-center">


<div className="d-flex justify-content-center">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
      <h5 className="text-center">Loading...</h5>
</div>
    )
};

export default LoadingSpinner;
