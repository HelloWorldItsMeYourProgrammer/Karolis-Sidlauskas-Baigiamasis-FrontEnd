import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/index";
// import Invoices from "./scenes/invoices/index";
// import Contacts from "./scenes/contacts/index";
// import Team from "./scenes/team/index";
import Pie from "./scenes/pie/index";
import Bar from "./scenes/bar/index";
// import Form from "./scenes/form/index";
import Line from "./scenes/line/index";
import Geography from "./scenes/geography/index";
// import FAQ from "./scenes/faq/index";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
// import Calendar from "./scenes/calendar/index";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/invoices" element={<Invoices />} /> */}
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              {/* <Route path="/team" element={<Team />} /> */}
              <Route path="/pie" element={<Pie />} />
              <Route path="/bar" element={<Bar />} />
              {/* <Route path="/form" element={<Form />} /> */}
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
