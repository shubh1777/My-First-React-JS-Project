import React, {useContext,useEffect} from 'react'
import bookContext from '../Context/bookContext';
import { useNavigate } from 'react-router-dom';
import './StyleSheet.css';
const Contact = () => {
    const {user} = useContext(bookContext);
    const navigate = useNavigate();
    useEffect(()=>{
      if(!user) {
        navigate('/login')
      }
    })
  return (
    <div>
      <section className="contact_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="heading_container">
              <h2>Contact Us</h2>
            </div>
            <form>
              <div>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div>
                <input type="text" className="message-box" placeholder="Message" />
              </div>
              <div className="btn-box">
                <button type="submit">SEND</button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="img-box">
            <img src={require('./contact-img.png')} />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact
