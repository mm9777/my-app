import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <>
      <input type="radio" name="contentOption" id="option1"/>
        <label for="option1">Option 1</label>

        <input type="radio" name="contentOption" id="option2"/>
          <label for="option2">Option 2</label>

          <input type="radio" name="contentOption" id="option3"/>
            <label for="option3">Option 3</label>

            <div class="content" id="content1">
              <p>This is the content for Option 1.</p>
            </div>

            <div class="content" id="content2">
              <p>This is the content for Option 2.</p>
            </div>

            <div class="content" id="content3">
              <p>This is the content for Option 3.</p>
            </div>

          </> */}
          <App/>
        </React.StrictMode>
        );

        // If you want to start measuring performance in your app, pass a function
        // to log results (for example: reportWebVitals(console.log))
        // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
        reportWebVitals();
