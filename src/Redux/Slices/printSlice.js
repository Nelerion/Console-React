import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { myIp } from "./async/ip";
import { getWeather } from "./async/weather";

export const commandList = {
    $reduxT(dispatch) {
        dispatch(addPrint(
            'npm install @reduxjs/toolkit'
        ));
    },
    $react(dispatch) {
        dispatch(addPrint(
            'npx create-react-app my-app'
        ));
    },
    $ip(dispatch) {
        dispatch(myIp());
    },
    сhucknorris(dispatch) {
        dispatch(addPrint('Даже с этой фотки — Чак смотрит на тебя презренно…'));
        dispatch(сhuk());
        setTimeout(() => {
            dispatch(сhuknull());
        }, 4000);
    },
    $bg(dispatch, [color]) {
        console.log(color)
        dispatch(bgchange(color));
    },
  
}

getWeather(commandList)

const initialState = {
    print: [],
    weather: '',
    chuk: '',
    background: localStorage.getItem('color'),
};

const printSlice = createSlice({
    name: 'printSlice',
    initialState,
    reducers: {
        addPrint: (state, { payload: text }) => {
            state.print.pop();
            state.print.push(text);
        },
        сhuk: (state) => {
            state.weather += 'https://pngimg.com/uploads/chuck_norris/small/chuck_norris_PNG27.png';

        },
        сhuknull: (state) => {
            state.weather = '';
            if (state.print !== null) {
                state.print = [];
            }
        },
        bgchange: (state, { payload: color }) => {
            state.background = color;
            localStorage.setItem('color', color)
        },
    },
});

export const printReducer = printSlice.reducer;
export const {
    addPrint,
    сhuk,
    сhuknull,
    bgchange,
} = printSlice.actions;
