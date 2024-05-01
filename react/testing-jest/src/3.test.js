import { render,fireEvent,screen,configure } from "@testing-library/react"
import App from './3';
import print from './helper/func1'
configure({testIdAttribute:'id'})   //used so that we don't have to make test-id and can use id as test-id


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

test("input value and placeholder and displayvalue",()=>{
    render(<App/>)
    const input = screen.getAllByRole("textbox"); 
    const tessid = screen.getByTestId("skills"); 
    const place = screen.getByPlaceholderText("this is trial"); 
    const display=screen.getByDisplayValue("decided");


    expect(input[0]).toBeInTheDocument();
    expect(display).toBeInTheDocument();
    expect(tessid).toBeInTheDocument();
    expect(place).toBeInTheDocument();
    expect(input[1]).toHaveValue("to be decided");
})

test("for the functions which aren't returning to page",()=>{
    expect(print()).toMatch("this is it")
})
