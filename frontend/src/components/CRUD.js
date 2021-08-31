import React, { useState } from 'react'
import axios from 'axios'
import './crud.css'

const CRUD = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [msg, setMsg] = useState('')

  const setToEmpty = () => {
    setMsg('')
    setError('')
  }

  const addHandler = async (e) => {
    e.preventDefault()
    setToEmpty()
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post('/', { name, email }, config)
    if (data.error) {
      setError(data.error)
    } else {
      setMsg(data.message)
    }
  }

  const getHandler = async (e) => {
    e.preventDefault()
    setToEmpty()
    const { data } = await axios.get(`/${email}`)
    if (data.error) {
      setError(data.error)
    } else {
      setName(data.Name)
    }
  }

  const deleteHandler = async (e) => {
    e.preventDefault()
    setToEmpty()
    const { data } = await axios.delete(`/${email}`)
    if (data.error) {
      setError(data.error)
    } else {
      setMsg(data.message)
    }
  }

  const updateHandler = async (e) => {
    e.preventDefault()
    setToEmpty()
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.put('/', { name, email }, config)
    if (data.error) {
      setError(data.error)
    } else {
      setMsg(data.message)
    }
  }

  return (
    <>
      <h1>CRUD Operations</h1>
      {error && <p className='error'>{error}</p>}
      {msg && <p className='msg'>{msg}</p>}
      <form>
        <div className='inputs'>
          <input
            type='text'
            placeholder='Enter Name: '
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />{' '}
          <br />
          <input
            type='text'
            placeholder='Enter Email: '
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <button
          type='submit'
          onClick={addHandler}
          style={{ backgroundColor: '#66d483' }}
        >
          ADD USER
        </button>
        <button
          type='submit'
          onClick={getHandler}
          style={{ backgroundColor: '#4871ab' }}
        >
          GET USER
        </button>
        <button
          type='submit'
          onClick={updateHandler}
          style={{ backgroundColor: '#4ab0b5' }}
        >
          UPDATE USER
        </button>
        <button
          type='submit'
          onClick={deleteHandler}
          style={{ backgroundColor: '#c42134' }}
        >
          DELETE USER
        </button>
      </form>
    </>
  )
}

export default CRUD
