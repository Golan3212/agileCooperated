import React from 'react';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import { router } from '@inertiajs/react'

export default function Auth() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  })

  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value
    setValues(values => ({
        ...values,
        [key]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    router.post('/auth', values)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" value={values.name} onChange={handleChange} />
      <label htmlFor="email">Email:</label>
      <input id="email" value={values.email} onChange={handleChange} />
      <label htmlFor="password">Password:</label>
      <input id="password" value={values.password} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  )
}
