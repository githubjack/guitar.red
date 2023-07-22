import React from "react";
import MainLayout from "../layout/MainLayout";
import { useRouteError } from "react-router-dom";

// const error = useRouteError();
// console.error(error);

function NotFoundPage() {
  const error = useRouteError();
  console.log(error);
  console.error(error);
  return (
    <MainLayout>
      <div>Not Found Page</div>
      <div id="error-page">
        <h1>OH No Page Not Found.</h1>
        <div>An unexpected error has occurred
          <div>
            <small><i>{ error.data || error.statusText || error.message}</i></small>.
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default NotFoundPage;
