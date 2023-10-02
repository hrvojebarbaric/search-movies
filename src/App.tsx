import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'
import Layout from './components/Layout/Layout'
import DetailsPage from './pages/DetailsPage/DetailsPage'

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/movie/:id" element={<DetailsPage />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
