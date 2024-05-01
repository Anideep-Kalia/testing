import { render,fireEvent,screen,configure, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from './6';

test("API testing",async()=>{
    userEvent.setup();
    render(<App/>)

    const  btn=screen.getByText("Click me");
    await userEvent.click(btn);
    
    expect(screen.getByText("hello")).toBeInTheDocument()
});