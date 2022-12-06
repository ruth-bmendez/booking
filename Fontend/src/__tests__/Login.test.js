import { render, act, fireEvent } from '@testing-library/react';
import React from 'react';
import Login from "../components/Auth/Login"
import {MemoryRouter} from "react-router-dom";
import axios from "axios"

jest.mock('axios');

test('Renderizado correcto', () => {
    render( <Login />, { wrapper: MemoryRouter })
})