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

    const btn = screen.getByRole("button",{name:"this is it"});    // name is to determine which button we are talking about
    fireEvent.click(btn);
    const shown=screen.getByText("button clicked")

    expect(shown).toBeInTheDocument();
})

// only this is testing
test("data-testid",()=>{
    render(<App/>)

    const btn2 = screen.getByTestId("btn2"); 
    fireEvent.click(btn2);
    const shown2=screen.getByText("button2 clicked")

    expect(shown2).toBeInTheDocument();
})

test("role assigning",()=>{
    render(<App/>)

    const rollin = screen.getByRole("divinerole");
    const shown2=screen.getByText("try new punch") 

    expect(rollin).toBeInTheDocument();
})