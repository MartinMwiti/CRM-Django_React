import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Column } from "simple-flexbox";

// Components
import ProductTable from './ProductsTable'

const Main = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Product Page</title>
      </Helmet>
      <Column>
        <div className="contentContainer">
          <ProductTable />
        </div>
      </Column>
    </Fragment>
  );
};
export default Main;
