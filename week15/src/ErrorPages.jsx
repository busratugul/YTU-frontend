import { useRouteError } from "react-router-dom";

export default function ErrorPages() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Üzgünüz, beklenmeyen bir hata oluştu. Hata Detayları: </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}