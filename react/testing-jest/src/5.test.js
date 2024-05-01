import { render,fireEvent,screen,configure, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from './5';

test("user event library",async()=>{
    userEvent.setup();
    render(<App/>)

    const  btn=screen.getByText("Click me");
    await userEvent.click(btn);
    
    expect(screen.getByText("hello")).toBeInTheDocument()
});

test("user event change event",async()=>{
    userEvent.setup();
    render(<App/>)
    const  ele=screen.getByRole("textbox");
    await act(async()=>{await userEvent.type(ele,"anideep")})
    
    expect(screen.getByText("anideep")).toBeInTheDocument()
});