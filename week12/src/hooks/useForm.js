import { useState } from 'react'

function useForm(initalValues) {
  const [values, setValues] = useState(initalValues)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const reset = () => setValues(initalValues)

  return [values, handleChange, reset]
}

export default useForm
