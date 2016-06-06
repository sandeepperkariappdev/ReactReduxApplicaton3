import {fetchImages} from "./flickr";
import {put, take, fork} from "redux-saga/effects";

export function* sayHello(){
    console.log("Say hello!")
}

export function* loadImages(){
    try{
        const images = yield fetchImages();
        yield put({type:"MAGES_LOADED", image:images[0]})
        console.log(images);    
    } catch(error){
        yield put({type:"IMAGE_LOAD_FAILURE", error})
    }    
}

export function* watchForLoadImages(){
    while(true){
        yield take("LOAD_IMAGES");
        yield fork(loadImages);
    }
}

/*

Because we are using connect, we don’t need to interact with the Redux store directly. We are going to configure a default application state to provide the Redux store.
*/