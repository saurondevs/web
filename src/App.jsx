import { BrowserRouter } from "react-router-dom"
import AnimatedRoutes from "./components/animatedroutes"
import Footer from "./components/footer"
import { Video } from "./components/video"

const App = () => (
      <BrowserRouter>
        <Video />
        <AnimatedRoutes />
        <Footer />
    </BrowserRouter>
)

export default App
