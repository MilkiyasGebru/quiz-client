import React from 'react'
import useStateContext from '../hooks/useStateContext'

export default function Quiz() {
   const {context, setContext} = useStateContext();

    console.log(context);
   return (
       <div></div>
   )
}
