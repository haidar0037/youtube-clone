export const API_KEY = 'AIzaSyC5ct1NOg98Br11H9b1JyW_zwyU0dM8caA';

export const value_converter = (value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+'M'
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"k"
    }
    else{
        return value
    }
}