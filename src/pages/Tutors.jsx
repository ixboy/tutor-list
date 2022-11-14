import { useEffect, useState } from "react";

import ContactCard from '../components/ContactCard';
import React from 'react'
import searchIcon from '../search.svg'

const Tutors = () => {
  const elementPerRow = 6;

  const [contacts, setContacts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [numOfElement, setNumOfElement] = useState(elementPerRow);

  useEffect(() => {
    searchContacts()
  }, [])

  const loadMore = () => {
    setNumOfElement(numOfElement + numOfElement)
  };
  let slice
  if (contacts.length > 0) {
    slice = contacts.slice(0, numOfElement)
    console.log(slice)
  }

  const searchContacts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setContacts(data)
  }


  return (

    <div>
      <div className="search">
        <input
          placeholder="Search Tutor"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="search"
        />
      </div>


      <div className="title"><h1>Online Tutors</h1></div>

      {slice?.length > 0 ?
        (
          <div className="before-card">
            <div className="card-container">
              {slice.map((contact, key) => (
                <ContactCard contact={contact} key={key} />
              ))}
            </div>
            <button className="load-more" onClick={() => loadMore()}>
              Load more
            </button>
          </div>

        )
        :
        (
          <div className="empty">
            <h2>No contacts found</h2>
          </div>
        )}
    </div>
  )
}

export default Tutors