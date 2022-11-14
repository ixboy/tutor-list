import React from 'react'

const ContactCard = ({ contact }) => {
  return (

    <div className="row" id="content-wrapper">
      <div className="col-sm-12">
        <div className="info-card" data-name="jane doe" data-job="designer" data-location="san fransisco">
          <div className="personal-detail-section">
            <img src="https://via.placeholder.com/400" alt="User's" />
            <div className="text-detail">
              <h2>{contact.name}</h2>
              <h3>Online</h3>
              <p>{contact.address.city}</p>
            </div>
          </div>
          <div className="contact-detail-section">
            <ul>
              <li><p>{contact.email}</p></li>
              <li><p>{contact.website}</p></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ContactCard
