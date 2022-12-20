import { useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  console.error('MY ERROR', error);

  return (
    <div className="error-page">
      <h1>404</h1>
      <p>That page was not found!</p>
      {/* <p> {error.statusText || error.message}</p> */}
    </div>
  );
}

export default Error;
