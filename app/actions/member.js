import axios from 'axios';
// CONSTANTS
import config from '../config';

export function addMember(member){
    var url =  config.SERVER_URL + 'add_member';

    return (dispatch) => {
        axios.post(url, {
            headers: { "Content-Type": "application/json" },
            member: member
            
        }).then(function(res){

        }).catch(function(err){

        })
    }
}


export function getMember(){
    var url =  config.SERVER_URL + 'get_member';

    return (dispatch) => {
        axios.get(url, {
            headers: { "Content-Type": "application/json" },
            
        }).then(function(res){

            dispatch({
                type:"GET_MEMBER",
                member: res.data
            })

        }).catch(function(err){
            dispatch({
                type:"GET_MEMBER_ERROR",
                member: [res]
            })
        })
    }
}


export function autoUpdateMeal(){
    var url =  config.SERVER_URL + 'add_member';
    console.log(url);
    axios.post(url, {
        headers: { "Content-Type": "application/json" },
       
    })
}