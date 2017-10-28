import axios from 'axios';
// CONSTANTS
import config from '../config';
import { connect } from 'react-redux'

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


export function mealTodayAction(bool_meal){
    var url =  config.SERVER_URL + 'set_bool_meal';
    console.log(url);
    
        axios.post(url, {
            headers: { "Content-Type": "application/json" },
            bool_meal: bool_meal
            
        }).then(function(res){

        }).catch(function(err){

        })
    
}


export function totalMealToday(){
    var url =  config.SERVER_URL + 'get_today_meal';
    
    return (dispatch) => {
        axios.get(url, {
            headers: { "Content-Type": "application/json" },
            
        }).then(function(res){

            dispatch({
                type:"GET_TODAY_MEAL",
                total_today_meal: res.data
            })

        }).catch(function(err){
            dispatch({
                type:"GET_TODAY_MEAL_ERROR",
                total_today_meal: [res]
            })
        })
    }
}


export function autoUpdateMeal(){
    var url =  config.SERVER_URL + 'auto_update_meal';
    return (dispatch) => {
        axios.post(url, {
            
            headers: { "Content-Type": "application/json" },
        
        }).then(function(res){
            dispatch(totalMealToday());
            dispatch(getMember());
        }).catch(function(err){
            console.log(err);
        })
    }
}