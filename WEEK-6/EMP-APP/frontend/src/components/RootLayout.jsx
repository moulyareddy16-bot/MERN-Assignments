import Header from './Header';
import {Outlet} from 'react-router';

function RootLayout() {
  return (
    <div>
        <Header />
        <div className='min-h-screen p-5 bg-blue-100'>
            <Outlet />
        </div>
    </div>
  )
}

export default RootLayout