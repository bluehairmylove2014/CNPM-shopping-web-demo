import React from 'react';
import AddLibGenerator from './components/AddLib/AddLib'

import Navbar from './components/Navbar/Navbar'
import PageContent from './components/PageContent/PageContent';

function App() {
    AddLibGenerator('https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js');
    AddLibGenerator('https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js');
    return (
        <div>
            <Navbar/>
            <div className='container'>
                <PageContent/>
            </div>
        </div>
    );
}


export default App;
