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

test("user event change event and props",async()=>{
    userEvent.setup();
    const testfn=jest.fn();

    render(<App name={"anil"} func={testfn}/>)
    const  ele=screen.getByRole("textbox");
    const btn=screen.getAllByRole("button");

    await userEvent.click(btn[1]);
    await act(async()=>{await userEvent.type(ele,"anideep")})
    
    expect(screen.getByText("anideep")).toBeInTheDocument()
    expect(screen.getByText("anil")).toBeInTheDocument()
    expect(testfn).toBeCalled();
});