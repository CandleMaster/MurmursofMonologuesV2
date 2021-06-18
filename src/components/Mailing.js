import addToMailchimp from 'gatsby-plugin-mailchimp'
import React, { useState } from 'react'
import "../css/global.scss"

export default function Mailing({ position, fontColor }) {

const [message, setResult] = useState("")
 async function handleSubmit(e) {
    e.preventDefault();
    const result = await addToMailchimp(email)
    setResult(prop => "Thank you for supporting me!:)")
  
  }
handleSubmit().catch(e=>{console.log('An error occursed with MailChimp')})
  const [email,setEmail] = useState("")
  function handleChange(e)  {
    const newValue = e.target.value;
      setEmail(newValue)
  }

    return (
      <div className='bottomHorizontal' style={position}>
        <form className="join" onSubmit={handleSubmit}>
              <label className="mailingLabel" style={fontColor} for="email" >JOIN MAILING LIST</label>
              <input onChange={handleChange} nameName="email" id="email" value={email} required />
              <input type="submit" value="+" id="submitEmail" style={position}/>
              <div className="error">{message}</div>
        </form>
      </div>
    )

}

// const [eResult, setResult] = useState("")
//  let message ="+"

//  async function handleSubmit(e) {
//     e.preventDefault();
//     const result = await addToMailchimp(email)
//     setResult(prop => {
//       return result;
//       message = ":)"
//      })
//   }

//   const [email,setEmail] = useState("")
//   function handleChange(e)  {
//     const newValue = e.target.value;
//       setEmail(newValue)
//   }