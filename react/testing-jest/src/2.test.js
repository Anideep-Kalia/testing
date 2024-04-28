import { render,fireEvent,screen } from "@testing-library/react"
import App from './2';

// hooks
beforeAll(()=>{
    console.log("this is where journey starts")
})

beforeEach(()=>{
    console.log("every fucking time")
})

afterAll(()=>{
    console.log("this is where journey ends")
})


test("onchange input",()=>{
    render(<App/>)

    const input = screen.getByRole("textbox"); 
    fireEvent.change(input,{target:{value:"a"}});
    
    expect(input.value).toBe("a");
})

test("button clicking input",()=>{
    render(<App/>)

    const btn = screen.getByRole("button"); 
    fireEvent.click(btn);
    const shown=screen.getByText("button clicked")

    expect(shown).toBeInTheDocument();
})