import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { authorise } from './functions'

export function IsAuth(props) {
    const {Component}=props;
    const navigate=useNavigate();
    useEffect(() => {
        authorise('authorise').then(x => {
            if (!x.error) {
              navigate("/addProfile")
            }
          })  
    });  
  return (
    <Component/>
  )
}
export function IsNotAuth(props) {
    const {Component}=props;
    const navigate=useNavigate();
    useEffect(() => {
        authorise('authorise').then(x => {
            if (x.error) {
              navigate("/login")
            }
          })  
    });  
  return (
    <Component/>
  )
}
