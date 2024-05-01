import { render,fireEvent,screen,configure } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from './5';

test("user event library",async()=>{
    userEvent.setup();
    render(<App/>)

    const  btn=screen.getByText("Click me");
    await userEvent.click(btn);
    
    expect(screen.getByText("hello")).toBeInTheDocument()
});