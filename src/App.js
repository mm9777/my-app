import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true)
  return (

    <>
      <div className="mainDiv">
        <div className='bundle'>
          <div style={{ width: "100px" }}><hr /></div>
          <div style={{ color: '#128d12' }}> Bundle & Save</div>
          <div style={{ width: "100px" }}><hr /></div>
        </div>
        <div className='div2'>

          <div className="hoverClass1">
          
        
         

            
            <div className="items">
              <span>
                1 Pair
              </span>
              <br />
              <span>
                DKK 195.00
              </span>
            </div>
            <div style={{ width: '70px' }}>

            </div>
            <div style={{}}>
              50% OFF
            </div>
            
          </div>
          <input type="radio" name="contentOption" id="option1"/>
         {/* <label for="option1">Option 1</label> */}
          <div class="content" id="content1">
          {/* <p>This is the content for Option 1.</p> */}
            <div className="num">
              <div style={{ height: "20px" }}>

              </div>
              <div>
                #1
              </div>
              <div>
                #2
              </div>
            </div>
            <div className="num1" >
              <div>
                Size
              </div>
              <div>
                <div className="box" >
                  <div>
                    S
                  </div>
                  <div>
                    <div className="icon">

                    </div>
                  </div>
                </div>
                <div className="box">
                  <div>
                    S
                  </div>
                  <div>
                    <div className="icon">

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="num1">
              <div>
                colour
              </div>
              <div>
                <div className="box1">
                  <div>
                    Colour
                  </div>
                  <div>
                    <div className="icon">

                    </div>
                  </div>
                </div>
                <div className="box1" >
                  <div>
                    Colour
                  </div>
                  <div>
                    <div className="icon">

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>

            </div>
          </div>
         
        </div>

        <div className="div2">
          <div className="hoverClass1">
             
            <div className="items">
              <span>
                2 Pair
              </span>
              <br />
              <span>
                DKK 345.00
              </span>
            </div>
            <div style={{ width: '70px' }}>

              <span style={{ fontSize: '10px', textDecorationLine: 'line-through' }}>DKK 195.00</span>
            </div>
            <div >
              <span className='popular'> Most Popular</span><br />
              40% OFF
            </div>
          </div>
          <input type="radio" name="contentOption" id="option1"/>
          <div class="content" id="content1">
          {/* <p>This is the content for Option 1.</p> */}
            <div className="num">
              <div style={{ height: "20px" }}>

              </div>
              <div>
                #1
              </div>
              <div>
                #2
              </div>
            </div>
            <div className="num1" >
              <div>
                Size
              </div>
              <div>
                <div className="box" >
                  <div>
                    S
                  </div>
                  <div>
                    <div className="icon">

                    </div>
                  </div>
                </div>
                <div className="box">
                  <div>
                    S
                  </div>
                  <div>
                    <div className="icon">

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="num1">
              <div>
                colour
              </div>
              <div>
                <div className="box1">
                  <div>
                    Colour
                  </div>
                  <div>
                    <div className="icon">

                    </div>
                  </div>
                </div>
                <div className="box1" >
                  <div>
                    Colour
                  </div>
                  <div>
                    <div className="icon">

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
        <div className='div2'>

          <div className="hoverClass1">
            <div>
              
            </div>
            <div className="items">
              <span>
                3 Pair
              </span>
              <br />
              <span>
                DKK 528.00
              </span>
            </div>
            <div style={{ width: '70px' }}>

            </div>
            <div style={{}}>
              60% OFF
            </div>
          </div>
          <input type="radio" name="contentOption" id="option1"/>
          <div class="content" id="content1">
          {/* <p>This is the content for Option 1.</p> */}
            <div className="num">
              <div style={{ height: "20px" }}>

              </div>
              <div>
                #1
              </div>
              <div>
                #2
              </div>
            </div>
            <div className="num1" >
              <div>
                Size
              </div>
              <div>
                <div className="box" >
                  <div>
                    S
                  </div>
                  <div>
                    <div className="icon">

                    </div>
                  </div>
                </div>
                <div className="box">
                  <div>
                    S
                  </div>
                  <div>
                    <div className="icon">

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="num1">
              <div>
                colour
              </div>
              <div>
                <div className="box1">
                  <div>
                    Colour
                  </div>
                  <div>
                    <div className="icon">

                    </div>
                  </div>
                </div>
                <div className="box1" >
                  <div>
                    Colour
                  </div>
                  <div>
                    <div className="icon">

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
        <div className="div5">
          <div className='freeShipingClass'>
            Free 2 day shipping
          </div>
          <div className='total'>
            Total : DKK 360.00
          </div>
        </div>
        <button>+Add To Card</button>
        <div className='pumper'>
          &#169; Powered by Pumper
        </div>
      </div>
    </>
  );
}

export default App;
