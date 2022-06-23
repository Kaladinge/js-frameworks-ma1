import Layout from "./components/layout/Layout";
import {ThemeProvider} from "styled-components"

const theme = {
  primaryColor: "#93A603",
  secondaryColor: "#5A7302",
  tertiaryColor: "#465902",
  attentionColor: "#D99962",
}

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Layout/>
    </ThemeProvider>
  );
}

export default App;
