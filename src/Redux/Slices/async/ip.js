import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addPrint } from "../printSlice";

export const myIp = createAsyncThunk('printSlice/getIp',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            dispatch(addPrint('Заргужаю'));
            const response = await axios.get(`http://ip-api.com/json/`)
            dispatch(addPrint(''));
            const ip = response.data.query;
            dispatch(addPrint(ip))
        }
        catch (error) {
            dispatch(addPrint('Неверный запрос'))
        }
    }
)