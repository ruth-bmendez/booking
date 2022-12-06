import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { FormBooking } from '../components/booking/FormBooking';
import useFetch from "../hooks/useFetch";
import {MemoryRouter} from "react-router-dom"


describe('Deberia mostrarse el form',()=>{
  it.only("debe haber un form",()=>{
    render(<FormBooking/>, {wrapper:MemoryRouter})
    const elemento = screen.queryByText("Completá tus datos");
    expect(elemento).toBeInTheDocument();
  });
  test("correo electronico",()=>{
    render(<FormBooking/>, {wrapper:MemoryRouter})
    // const elemento = screen.queryByText("Correo Electronico");
    // expect(elemento).toBeInTheDocument();
  })


})