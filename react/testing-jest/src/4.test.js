import { render,fireEvent,screen,configure } from "@testing-library/react"
import App from './4';
configure({testIdAttribute:'id'}) 

test("queryby and queryallby",()=>{
    render(<App/>)

    // const dv=screen.getByText("Logout")  {ontlt query will be able to find it in the code}
    const dv=screen.queryByText("Logout")
    
    expect(dv).not.toBeInTheDocument()
});

test("findby: used for loading elements",async()=>{
    render(<App/>)
    // async and awit only works when delay is within 1 sec and if it is not then we need to use timeout
    const dv=await screen.findByText("anideep")  
    const dv1=await screen.findByText("Kalia",{},{timeout:3000})  
    
    expect(dv).toBeInTheDocument()
    expect(dv1).toBeInTheDocument()
});

test("javascript queryby and queryallby",()=>{
    render(<App/>)

    // const dv=screen.getByText("Logout")  {ontlt query will be able to find it in the code}
    const dv=document.querySelector("#id")
    
    expect(dv).toBeInTheDocument()
});