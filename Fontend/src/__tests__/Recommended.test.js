import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import Recommended from "../components/Home/Recommended"
import { MemoryRouter } from "react-router-dom";

test('Renderizado correcto', () => {
  render( <Recommended />, { wrapper: MemoryRouter })
})