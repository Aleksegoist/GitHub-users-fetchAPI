import { Route, Routes } from 'react-router-dom';
import Logo from './components/Logo';
import UserInfo from './routes/UserInfo';
import Users from './routes/Users';

function App() {
    return (
        <div className='min-h-screen bg-slate-900'>
            <div className='container text-gray-200 py-3'>
                <Logo />
                <Routes>
                    <Route path='/' element={<Users />}></Route>
                    <Route path='/:name' element={<UserInfo />}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
