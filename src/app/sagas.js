import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchJokes, jokesFetchedFulfilled, jokesFetchedFailed } from '../features/jokes/jokesSlice'


const fetchData = async () => {
        const url = 'https://karljoke.herokuapp.com/jokes/ten'
        const response = await fetch(url)
        const jokes = await response.json()
        return jokes;
}

function* workFetchJokes() {
    try {
        const jokes = yield call(fetchData);
        yield put(jokesFetchedFulfilled({jokes}));
    } catch (e) {
        yield put(jokesFetchedFailed({errMsg: e.message}));
    }
}

export default function* watchfetchJokes() {
    yield takeLatest(fetchJokes().type, workFetchJokes)
}