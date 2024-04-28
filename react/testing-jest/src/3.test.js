import { render,fireEvent,screen } from "@testing-library/react"
import App from './3';

test("snappshot test",()=>{
    const init=render(<App/>)

    expect(init).toMatchSnapshot();
})
