import React, { useState, useEffect, useCallback } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
function App() {
  const [users, setUsers] = useState([])
  const [inputTxt, setInputTxt] = useState('')
  const [search, seatSearch] = useState('login')

  const fetchData = useCallback(async (q) => {
    try {
      if (q) {
        let response = await fetch(`https://api.github.com/search/users?q=${q}+in:${search}&order=desc&per_page=7&type=Users`,
          {
            headers: {
              authorization: "token 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"
            }
          }
        )
        let { items } = await response.json()
        setUsers(items)
      }
    } catch (err) {
      console.log(err)
    }
  }, [search])

  useEffect(() => {
    if (inputTxt) {
      fetchData(inputTxt)
    } else {
      setUsers([])
    }
  }, [fetchData, inputTxt])

  const handleChange = (e) => {
    setInputTxt(e.target.value)
  }
  const onValueChange = (e) => {
    seatSearch(e.target.value)
  }
  console.log(users, `https://api.github.com/search/users?q=${inputTxt}+in:${search}&order=desc&per_page=7&type=Users`)
  return (
    <>
      <Header />
      <main>
        <Form
          value={inputTxt}
          handleChange={handleChange}
          onValueChange={onValueChange} users={users}
          select={search}
        />
      </main>
      <Footer />
    </>

  );
}

export default App;
