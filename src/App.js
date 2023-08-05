import logo from './logo.svg';
import './App.css';

function App() {
  return (
  
    <>
      <div className="mainDiv">
        <div className='bundle'>
          <div style={{ width: "100px" }}><hr /></div>
          <div> Bundle & Save</div>
          <div style={{ width: "100px" }}><hr /></div>
        </div>
        <div className="hoverClass">
          <div>
            <div className="circle">

            </div>
          </div>
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

        <div className="div2">
          <div className="hoverClass1">
            <div>
              <div className="circle">
                <div className="innerCircleDiv">
                  <div className="innerCircle">

                  </div>
                </div>

              </div>
            </div>
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

            <span style={{fontSize:'10px', textDecorationLine: 'line-through'}}>DKK 195.00</span>
            </div>
            <div >
           <span className='popular'> Most Popular</span><br/>
              40% OFF
            </div>
          </div>
          <div className="cart">
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

        <div className="hoverClass">
          <div>
            <div className="circle">

            </div>
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
