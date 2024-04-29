import { render, screen } from '@testing-library/react';
import App from './1';

// we can use app.spec.js also for name
// and if we put the files in __test__ then folder including all the files are considered as test files
describe('Noobs grouping',()=>{
test('title and text on image', () => {
  render(<App />);
  // so this is written like this because it will pass even if the cases don't match or the something else is written after this string but it we would have pass string then we don't get this privildge
  const linkElement = screen.getByText(/and save to reload/i);   
  const image = screen.getByTitle("ai gen image");   

  expect(linkElement).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});

test('input box and everything related', () => {
  render(<App />);

  const input = screen.getByRole("textbox");   
  const placeholder = screen.getByPlaceholderText("this is trial");    

  expect(input).toBeInTheDocument();
  expect(placeholder).toBeInTheDocument();
  expect(input).toHaveAttribute("name","input box name");   // checking attribute name 
  expect(input).toHaveValue("name");   // checking attribute name 
});

// doesn't consist of classname
test('attributes checking', () => {
  render(<App />);

  const input = screen.getByRole("textbox");     

  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("name","input box name");   // checking attribute name 
  expect(input).toHaveAttribute("id","input id");   // checking attribute id
  expect(input).toHaveAttribute("type","text");   // checking attribute type 
});
})
describe.skip('skipped and only usage',()=>{})
describe.only('skipped and only usage',()=>{
  describe('describe ke ander describe',()=>{})
})

