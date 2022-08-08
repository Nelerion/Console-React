import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addPrint, commandList } from "../printSlice";

export const getWeather = createAsyncThunk('printSlice/getWeather',
    async (city, { rejectWithValue, dispatch }) => {
        const command = city.split(' ');
        const keyWord = command[0];
        const args = command.slice(1);
        if (Object.keys(commandList).includes(keyWord)) {
            commandList[keyWord](dispatch, args);          //args??????
        }
        else {
            try {
                dispatch(addPrint('Заргужаю'));
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=72f8ed585c57d651edb7c3fe39fb3554`)
                const tempInKelvin = response.data.main.temp;
                const tempInCelcius = Math.round(tempInKelvin - 273);
                dispatch(addPrint(''));
                dispatch(addPrint(`Температура в ${city} ${tempInCelcius} ℃`))
            }
            catch (error) {
                dispatch(addPrint('Неверный запрос'))
            }
        }

    }
)