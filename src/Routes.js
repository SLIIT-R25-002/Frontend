import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes as RouterRoutes, Route } from 'react-router-dom';
import Error from './components/Error';
import Loader from './components/Helper/Loader';
import ScrollToTop from './components/Helper/ScrollToTop';
import HeatScape from './components/App';
import ModelViewer from './components/SimulationModule/ModelViewer';

function Routes() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    });
    return (
        <>
            {loading && (
                <div className={`appie-loader ${loading ? 'active' : ''}`}>
                    <Loader />
                </div>
            )}
            <div className={`appie-visible ${loading === false ? 'active' : ''}`}>
                <Router>
                    <ScrollToTop>
                        <RouterRoutes>
                            <Route path="/" element={<HeatScape />} />
                            <Route path="/modelviewer" element={<ModelViewer />} />
                            <Route path="*" element={<Error />} />
                        </RouterRoutes>
                    </ScrollToTop>
                </Router>
            </div>
        </>
    );
}

export default Routes;
