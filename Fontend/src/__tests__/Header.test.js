import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import Header from "../components/Layout/Header.jsx";
import { MemoryRouter } from "react-router-dom";

test('Renderizado correcto del header', () => {
  render( <Header />, { wrapper: MemoryRouter })
})