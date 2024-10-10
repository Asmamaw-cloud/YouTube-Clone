export const API_KEY = 'AIzaSyDuBcxW8XsXv4ip6zsWfILyQhC4TR8-EJc';


export const value_converter = (value) =>{
    if(value>=1000000) {
        return Math.floor(value/1000000)+"M"
    }
    else if(value>=1000) {
        return Math.floor(value/1000)+"K"
    }
    else {
        return value
    }
}