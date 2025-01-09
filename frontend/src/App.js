import React from 'react';
import Login from './components/Login.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './components/Signup.js';
import Dashboard from  './components/Dashboard.js';
import Support from './components/Support.js'
import LandingPage from './components/LandingPage.js'
// import Reliance from './pages/Reliance.js';
import UploadPdf from './pages/UploadPdf.js';
import RelianceTextSummarizer from './components/RelianceTextSummarizer'; 
import InsuranceTypePage from './components/InsuranceTypePage';
import ManipalDisplay from './components/ManipalDisplay.js';
import MaxDisplay from './components/MaxDisplay.js';
import AckoDisplay from './components/AckoDisplay.js';
import SBIDisplay from './components/SBIDisplay.js';
import PolicyBazaarDisplay from './components/PolicyBazaarDisplay.js';
import SBILifeDisplay from './components/SBILifeDisplay.js';
import RelianceDisplay from './components/RelianceDisplay.js';
import BajajDisplay from './components/BajajDisplay.js';
// import CarInsurancePage from './components/CarInsurancePage'; // Import the page component


function App() {
  
return (
  
  
  <BrowserRouter>
    <Routes>
    
          
   
    
    {/* <Route path="/insurance-type/car insurance" component={CarInsurancePage} /> */}
      <Route path = '/' element = {<LandingPage />}></Route>
      <Route path = '/login' element = {<Login />}></Route>
      <Route path = '/signup' element = {<Signup />}></Route>
      <Route path = '/dashboard' element = {<Dashboard />}></Route>
      {/* <Route path="/about" element={<AboutUs />} /> */}
      <Route path="/support" element={<Support />} />
      <Route path="/landingpage" element={<LandingPage />} />
      {/* <Route path="/compare" element={<Compare />} /> */}
      <Route path='/company/health-co-1' element={<RelianceDisplay />}></Route> 
      {/* <Route path="/insurance-type/:type" component={InsuranceTypePage} /> */}
      <Route path="/insurance-type/:type" element={<InsuranceTypePage/>}></Route> 
      <Route path="/reliance-text-summarizer" element={<RelianceTextSummarizer />} />

{/* <Route path="/insurance-type/health" component={HealthInsurancePage} />
<Route path="/insurance-type/home" component={HomeInsurancePage} />
<Route path="/insurance-type/life" component={LifeInsurancePage} /> */}

      {/* <Route path='/company/health-co-1' element={<UploadPdf />}></Route> */}
      <Route path='/company/health-co-2' element={<ManipalDisplay />}></Route>
      <Route path='/company/car-co-1' element={<AckoDisplay />}></Route>
      <Route path='/company/car-co-2' element={<BajajDisplay />}></Route>
      <Route path='/company/home-co-1' element={<PolicyBazaarDisplay />}></Route>
      <Route path='/company/home-co-2' element={<SBIDisplay />}></Route>
      <Route path='/company/life-co-1' element={<MaxDisplay />}></Route>
      <Route path='/company/life-co-2' element={<SBILifeDisplay />}></Route>



    </Routes>
  </BrowserRouter>
  )
}
export default App