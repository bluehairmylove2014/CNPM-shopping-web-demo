import React from 'react';

import Navbar from './components/Navbar/Navbar'
  
export function AddLibrary(urlOfTheLibrary) {
    const script = document.createElement('script');
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
}

function App() {
    return (
        <div className="bg-dark">
            {AddLibrary('https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js')}
            {AddLibrary('https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js')}
            
            <Navbar/>
        </div>
    );
}


export default App;
