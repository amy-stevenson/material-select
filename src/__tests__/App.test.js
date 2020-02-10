import React from "react";
import {cleanup, render, waitForElement} from "@testing-library/react";
import App from "./../components/App";
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom/extend-expect";

describe("Select", () => {
  afterEach(() => {
    cleanup();
  });

  it("MUI select change", async () => {

    const {
      getByText,
      getByTestId,
      getByRole,
      container
    } = render(<App/>);

    const selectInput = getByTestId('selectInput');
    const output = getByTestId('output');
    const label = getByTestId('label');
    const selectButton = getByRole('button');

    const selectText = 'Thirty';
    const selectValue = '30';

    expect(selectButton).not.toBeNull();
    expect(selectInput).not.toBeNull();
    expect(output).not.toBeNull();

    expect(label).toHaveTextContent('Age');
    expect(selectInput).toHaveValue('');
    expect(output.innerHTML.toString()).toEqual('age appears here');

    userEvent.click(selectButton);
    await waitForElement(() => getByText(selectText), {container});
    const itemClickable = getByText(selectText);
    userEvent.click(itemClickable);

    expect(selectInput).toHaveValue(selectValue);
    expect(output.innerHTML.toString()).toEqual('Age is: ' + selectValue);

  });
});
