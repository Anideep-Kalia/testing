import { render,fireEvent,screen } from "@testing-library/react"
import App from './3';
import print from './helper/func1'

test.skip("snappshot test",()=>{
    const init=render(<App/>)
    expect(init).toMatchSnapshot();
})

test("get all by role",()=>{
    render(<App/>)
    const eles=screen.getAllByRole("button");

    for(let i=0;i<eles.length;i++){
    expect(eles[i]).toBeInTheDocument();
    }
})

test("get all by label and checkbox",()=>{
    render(<App/>)
    const eles=screen.getByLabelText("kills");

    expect(eles).toBeInTheDocument();
    expect(eles).toBeChecked();
})

test("input value and placeholder",()=>{
    render(<App/>)
    const input = screen.getByRole("textbox"); 
    const place = screen.getByPlaceholderText("this is trial"); 


    expect(input).toBeInTheDocument();
    expect(place).toBeInTheDocument();
    expect(input).toHaveValue("to be decided");
})

test("for the functions which aren't returning to page",()=>{
    expect(print()).toMatch("this is it")
})
