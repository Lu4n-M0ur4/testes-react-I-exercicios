import { render, screen } from "@testing-library/react";
import Calculator from "../components/Calculator";
import userEvent from "@testing-library/user-event";

describe("Testando a Calculadora", () => {
  test("Testando a renderização e click das operações de multiplicar, subtrair, somar e dividir", async() => {
    render(<Calculator />);
    const user = userEvent.setup()

    const buttonSum = screen.getByText(/\+/i);
    const buttonSubtract = screen.getByText(/\-/i);
    const buttonMultiply = screen.getByText(/\*/i);
    const buttonToDivide = screen.getByText(/\//i);

  
    await user.click(buttonSum)
    await user.click(buttonMultiply)
    await user.click(buttonToDivide)
    await user.click(buttonSubtract)

    const display =  screen.getByText(/\+\*\/\-/i)

    expect(buttonSum).toBeInTheDocument();
    expect(buttonSubtract).toBeInTheDocument();
    expect(buttonMultiply).toBeInTheDocument();
    expect(buttonToDivide).toBeInTheDocument();
    expect(display).toBeInTheDocument()
    
  });

  test("Testando multiplicador, deve realizar a multiplicação corretamente", async () => {
    render(<Calculator />);
    const user = userEvent.setup();

    const buttonValue5 = screen.getByText(/5/i);
    const buttonValue2 = screen.getByText(/2/i);
    const buttonValueEqual = screen.getByText(/\=/i);
    const buttonMultiply = screen.getByText(/\*/i);

    await user.click(buttonValue5);
    await user.click(buttonMultiply);
    await user.click(buttonValue2);
    await user.click(buttonValueEqual);

    const result = screen.getByText(/10/i);

    expect(result).toBeInTheDocument();
  });

  test("Testando concatenação de operações, deve realizar o calculo corretamente", async () => {
    render(<Calculator />);
    const user = userEvent.setup();

    const buttonValue5 = screen.getByText(/5/i);
    const buttonValue2 = screen.getByText(/2/i);
    const buttonValue1 = screen.getByText(/1/i);
    const buttonValue0 = screen.getByRole("button", { name: /0/i });
    const buttonSum = screen.getByText(/\+/i);
    const buttonValueEqual = screen.getByText(/\=/i);
    const buttonMultiply = screen.getByText(/\*/i);

    await user.click(buttonValue5);
    await user.click(buttonMultiply);
    await user.click(buttonValue2);
    await user.click(buttonSum);
    await user.click(buttonValue1);
    await user.click(buttonValue0);
    await user.click(buttonValueEqual);

    const result = screen.getByText(/20/i);

    expect(result).toBeInTheDocument();
  });

  test("Testando funcionalidade de digitos númerico", async () => {
    render(<Calculator />);
    const user = userEvent.setup()

    const buttonValue0 = screen.getByRole("button", { name: /0/i });
    const buttonValue1 = screen.getByRole("button", { name: /1/i });
    const buttonValue2 = screen.getByRole("button", { name: /2/i });
    const buttonValue3 = screen.getByRole("button", { name: /3/i });
    const buttonValue4 = screen.getByRole("button", { name: /4/i });
    const buttonValue5 = screen.getByRole("button", { name: /5/i });
    const buttonValue6 = screen.getByRole("button", { name: /6/i });
    const buttonValue7 = screen.getByRole("button", { name: /7/i });
    const buttonValue8 = screen.getByRole("button", { name: /8/i });
    const buttonValue9 = screen.getByRole("button", { name: /9/i });

    await user.click(buttonValue0)
    await user.click(buttonValue1)
    await user.click(buttonValue2)
    await user.click(buttonValue3)
    await user.click(buttonValue4)
    await user.click(buttonValue5)
    await user.click(buttonValue6)
    await user.click(buttonValue7)
    await user.click(buttonValue8)
    await user.click(buttonValue9)

    const displayValue = screen.getByText(/0123456789/i);

    expect(displayValue).toBeInTheDocument()
  });

});
