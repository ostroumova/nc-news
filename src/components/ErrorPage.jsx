const ErrorPage = () => {
  return (
    <div className="pageNotFound">
      <p className="notFound">Page not found</p>
      <p className="error">404</p>
      <img
        src={
          "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        }
        alt="page not found"
      />
    </div>
  );
};

export default ErrorPage;
