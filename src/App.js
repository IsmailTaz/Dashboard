import { CssBaseline, ThemeProvider } from '@mui/material';
import SideBar from './scenes/global/SideBar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopBar from './scenes/global/TopBar.jsx';
import {colorModeContext, useMode} from './theme.js';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Dashboard from './scenes/dashboard/index.jsx';
import Team from './scenes/team/index.jsx';
import Clients from './scenes/contacts/index.jsx';
import Quotes from './scenes/quotes/index.jsx';
import Form from './scenes/form/index.jsx';
import Pie from './scenes/piechart/index.jsx';
import Line from './scenes/linechart/index.jsx';
function App() {
  const [theme,colorMode] = useMode();
  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <ProSidebarProvider>
            <SideBar />
          </ProSidebarProvider>
          <main className='content'>
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />}/>
              <Route path="/team" element ={<Team />} />
              <Route path="/contacts" element ={<Clients />} />
              <Route path="/quotes" element ={<Quotes />} />
              <Route path="/lead" element={<Form />}/>
              <Route path="/pie" element={<Pie />}/>
              <Route path="/quotes-analysis" element={<Line />}/>
            </Routes>
            
          </main>
          
        </div>
    </ThemeProvider>
    </colorModeContext.Provider>
    
  );
}

export default App;