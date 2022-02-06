import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  const [users, setUsers] = useState([])
  const [inputTxt, setInputTxt] = useState('')
  const [search, seatSearch] = useState('login')

  // fetch data from github API using query and keyword to get response by name or login search
  useEffect(() => {
    let controller = new AbortController();
    let signal = controller.signal;
    async function fetchData() {
      try {
        if (inputTxt) {
          let response = await fetch(`https://api.github.com/search/users?q=${inputTxt}+in:${search}&order=desc&per_page=7&type=Users`,
            {
              signal,
              headers: {
                authorization: "token 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"
              }
            }
          )
          let { items } = await response.json()
          setUsers(items)
        } else {
          setUsers([])
        }
      } catch (err) {
        console.log(err)
      }
    }
    // call the method to get github users
    fetchData()

    // create controller for cancelling fetching to avoid useEffect memory leak
    return () => {
      controller.abort()
    }
  }, [inputTxt, search])

  // to change input values
  const handleChange = (e) => {
    setInputTxt(e.target.value)
  }
  const onValueChange = (e) => {
    seatSearch(e.target.value)
  }

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
