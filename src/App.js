import React, {useState} from 'react';
import './App.css';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const Submitfunction = (event) => {
    event.preventDefault();
    alert("Hello " + username+"! Your password is "+password);
  }

  return (
    <div className="App">
      <div>
          <div>
            <div className="tophalf">
              <div className="topleft">
                <div className="bigheading">
                  10,000+ of our users love our products.
                </div>
            
                <div className="textpara">
                  We only provide great products combined with excellent customer service.
                  See what our satisfied customers are saying about our services.
                </div>
              </div>

              <div className="topright">
                <form onSubmit={Submitfunction}>
                  <div><input className="forminput" placeholder={"Enter user name"} onChange={event => setUsername(event.target.value)}/></div>
                  <div><input className="forminput" placeholder={"Enter user password"} onChange={event => setPassword(event.target.value)}/></div>
                  <input className="forminput" type="submit" />
                </form>
              </div>  
          </div>

            <div className="reviews">
              <div className="testimonial" id="t1">
                <div className="testflex1">
                  <div className="testflex2"> 
                    <p className="testname">Colton Smith</p>
                    <p className="testrole">Verified Buyer</p>
                  </div>
                </div>
                <p className="testtxt">"We needed the same printed design as the one we had ordered a week prior.
                  Not only did they find the original order, but we also received it in time.
                  Excellent!"</p>
              </div>        
              <div className="testimonial" id="t2">
                <div className="testflex1"> 
                  <div className="testflex2">
                    <p className="testname">Irene Roberts</p>
                    <p className="testrole">Verified Buyer</p>
                  </div>
                </div>
                <p className="testtxt">"Customer service is always excellent and very quick turn around. Completely
                  delighted with the simplicity of the purchase and the speed of delivery."</p>
              </div>
              <div className="testimonial" id="t3">
                <div className="testflex1">
                  <div className="testflex2">
                    <p className="testname"> Anne Wallace</p>
                    <p className="testrole">Verified Buyer</p>
                  </div>
                </div>
                <p className="testtxt"> "Put an order with this company and can only praise them for the very high
                  standard. Will definitely use them again and recommend them to everyone!"</p>
              </div>
            </div>

          </div>
        </div>  
    </div>
  );
}

export default App;
