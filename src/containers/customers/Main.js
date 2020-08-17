import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Column } from "simple-flexbox";

// components
import InvoiceTable from "./InvoiceTable"
import Invoice from "./Invoice/Invoice"


export default function Main() {
    return (
      <Fragment>
        <Helmet>
          <style>{"body { background-color: white; }"}</style>
          <title>Customer Page</title>
        </Helmet>
        <Column>
          <div>
            <InvoiceTable />
          </div>
          <div>
            <Invoice />
          </div>
        </Column>
      </Fragment>
    );
}
