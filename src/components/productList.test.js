import React from "react";

import { render, cleanup, fireEvent, waitFor } from "@testing-library/react";
import { ProductList } from './productList';
import { Provider } from "react-redux"
import reduxStore from './../Redux/store';
import '@testing-library/jest-dom';

jest.mock("react-router-dom", () => ({

    useHistory: () => ({
  
      push: jest.fn()
  
    })
  
  }));
  const ReduxWrapper = ({ children }) => (
    <Provider store={reduxStore}>
      {children}
    </Provider>
  );
  

it("should be able to click on sort icon  in the document", async () => {
    const { getByText } = render(<ProductList  />,{wrapper:ReduxWrapper});
   await waitFor(()=>{
        expect(getByText("Product List")).toBeInTheDocument();
    })
   
  });