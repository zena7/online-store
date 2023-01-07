import { useRouteError } from 'react-router-dom';
import { Container } from '@/shared/ui/container';

function ErrorPage() {
  const error = useRouteError() as any;

  return (
    <Container>
      <h1>404</h1>
      <p>That page was not found!</p>
      <p> {error.statusText || error.message}</p>
    </Container>
  );
}

export default ErrorPage;
