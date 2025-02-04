import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// Lazy Loading Components
const Home = lazy(() => import('./pages/Home'));
const AllBlogs = lazy(() => import('./pages/AllBlogs'));
const BlogDetail = lazy(() => import('./pages/BlogDetail.jsx'));
const BlogForm = lazy(() => import('./pages/BlogForm.jsx'));
const Login = lazy(() => import('./pages/LoginSignupForm.jsx'));
const MyFavourite = lazy(() => import('./pages/MyFavourite.jsx'));

function App() {
  return (
    <div className="flex flex-col min-h-screen">  {/* Full height container */}
      <ToastContainer />
      <Navbar />
      
      <main className="flex-grow">  {/* This pushes footer to the bottom */}
        <Suspense fallback={<div className="text-center py-5">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all" element={<AllBlogs />} />
            <Route path="/allblogs/:category" element={<AllBlogs />} />
            <Route path="/myfavourite" element={<MyFavourite />} />
            <Route path="/blogdetail/:id" element={<BlogDetail />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}

export default App;
