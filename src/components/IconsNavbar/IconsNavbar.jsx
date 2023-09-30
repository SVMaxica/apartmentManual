/* eslint-disable react/prop-types */
import './IconsNavbar.css';

export const IconsNavbar = ({ setActiveComponent }) => {
    return (
      <nav className="icon-navbar">
        <div className="icon-container" onClick={() => setActiveComponent('CheckIn')}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            shape-rendering="geometricPrecision" 
            text-rendering="geometricPrecision" 
            image-rendering="optimizeQuality" 
            fill-rule="evenodd" 
            clipRule="evenodd" 
            viewBox="0 0 442 512.06" 
            className="svg-icon" // add class for styling
          >
            <path 
              d="M249.52.13 12.07 35.58C5.46 36.56 0 43.4 0 50.19v418.56c0 6.75 5.39 9.37 12.07 10.29l237.45 32.95c6.67.92 12.06-7.76 12.06-14.62V10.43c0-6.86-5.53-11.27-12.06-10.3zm37.66 458.26h31.01v-93.28l25.34 13.54V459c0 6.76-2.79 12.94-7.26 17.43-4.47 4.51-10.67 7.3-17.48 7.3h-31.61v-25.34zm93.13-276.02v34.04c.58-.17 1.19-.27 1.81-.27h53.43c3.48 0 6.45 2.97 6.45 6.45v66.14c0 3.49-2.9 6.45-6.45 6.45h-53.43c-.62 0-1.24-.09-1.81-.26v34.03c-.04 2.87-1.12 5.75-3.3 7.96-4.39 4.46-11.58 4.52-16.05.13l-76.89-75.53c-4.27-4.59-4.01-11.78.58-16.05l75.95-70.84a11.3 11.3 0 0 1 8.32-3.63c6.29 0 11.39 5.1 11.39 11.38zm-62.12-36.15V52.94h-31.01V27.6h31.61c6.81 0 13 2.79 17.48 7.26 4.47 4.47 7.26 10.67 7.26 17.47v80.35l-25.34 13.54zm-87.61 78.39-24.91-5.67v74.18l24.91-7.18v-61.33z"
              fill="#808080" // Set the color directly
            />
          </svg>
          <p className='icon-text'><b>Check In</b></p>
        </div>
        <div className="icon-container" onClick={() => setActiveComponent('CheckOut')}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            shapeRendering="geometricPrecision" 
            textRendering="geometricPrecision" 
            imageRendering="optimizeQuality" 
            fillRule="evenodd" 
            clipRule="evenodd" 
            viewBox="0 0 474 512.46"
            className="svg-icon" // add class for styling
          >
            <path 
              d="M249.71.13 12.08 35.6C5.46 36.59 0 43.43 0 50.23v418.88c0 6.77 5.39 9.38 12.08 10.31l237.63 32.97c6.68.92 12.08-7.77 12.08-14.63V10.44c0-6.86-5.53-11.28-12.08-10.31zm124.96 329.08-.01-34.07c-.58.17-1.2.27-1.83.27h-53.47c-3.55 0-6.45-2.96-6.45-6.45v-66.2c0-3.48 2.97-6.45 6.45-6.45h53.47c.63 0 1.24.1 1.82.27v-34.06c0-6.29 5.1-11.4 11.39-11.4 3.29 0 6.25 1.4 8.33 3.63l76.01 70.9c4.59 4.27 4.85 11.47.58 16.06l-76.95 75.59c-4.47 4.4-11.67 4.34-16.07-.13a11.439 11.439 0 0 1-3.27-7.96zm-87.26 129.54h31.02V345.46h25.37v113.9c0 6.77-2.8 12.95-7.27 17.44-4.47 4.52-10.67 7.31-17.49 7.31h-31.63v-25.36zm31.02-292.48V52.98h-31.02V27.62h31.63c6.81 0 13.01 2.79 17.49 7.27 4.47 4.48 7.27 10.68 7.27 17.49v113.89h-25.37zm-87.67 58.52-24.93-5.68v74.24l24.93-7.18v-61.38z"
              fill="#808080" // Set the color directly
            />
          </svg>
          <p className='icon-text'><b>Check Out</b></p>
        </div>
        <div className="icon-container" onClick={() => setActiveComponent('Houserules')}>
        <svg version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        // eslint-disable-next-line react/no-unknown-property
        xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 122.88 110.37" 
        className="svg-icon">
            <g>
              <path fill="#808080" fillRule="evenodd" clipRule="evenodd" d="M61.92,0c10.42,0,18.86,8.44,18.86,18.86c0,10.42-8.44,18.86-18.86,18.86c-10.42,0-18.86-8.44-18.86-18.86 C43.07,8.44,51.51,0,61.92,0L61.92,0z M30.19,47.55c2.66-3.81,6.29-4.13,11.61-4.75h39.53c6.14,1.12,10.47,2.19,13.42,7.29 l23.21,31.74c2.65,3.62,4.93,5.88,4.92,10.7c-0.01,3.94-1.91,7.56-5.04,9.59c-4.02,2.62-7.09,1.85-11.15,0.43l-15.93-5.56v13.38 H31.64V97.78l-18.5,5.44c-6.04,1.31-10.35-0.93-12.1-5.14c-2.92-6.99,0.82-11.77,4.65-16.93L30.19,47.55L30.19,47.55z M32.19,76.02 V53.35l29.38,9.97l29.74-10.7V76.2c-20.53-4.3-21.39,14.31-8.7,20.31l-21.4,6.71l-20.67-7.25C53.58,89.97,50.92,70.71,32.19,76.02 L32.19,76.02z"/>
            </g>
          </svg>
          <p className='icon-text'><b>House Rules</b></p>
        </div>
        {/* Similarly for other icons */}
      </nav>
    );
}
