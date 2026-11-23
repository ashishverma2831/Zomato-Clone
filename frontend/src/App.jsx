import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import AddRestaurant from './pages/AddRestaurant'
import Error404 from './pages/Error404'
import HomePage from './pages/HomePage'
import HomeRestaurants from './pages/HomeRestaurants'
import DeliverCities from './pages/DeliverCities'
import Collections from './pages/Collections'
import RestaurantDetail from './pages/RestaurantDetail'
import { Toaster } from 'react-hot-toast'

function PageMetadata() {
  const { pathname } = useLocation()
  const segments = pathname.split('/').filter(Boolean)
  let title = 'Discover great food and restaurants | Zomato'
  let description = 'Discover restaurants, explore menus, and find great food near you.'

  if (pathname === '/partner-with-us') {
    title = 'Partner with Zomato | Grow your restaurant'
    description = 'Grow your restaurant business and reach more customers with Zomato.'
  } else if (pathname === '/delivery-cities') {
    title = 'Restaurant delivery cities | Zomato'
    description = 'Explore the cities where you can discover restaurants and order food.'
  } else if (segments.length === 3) {
    title = `Restaurants in ${segments[2].replaceAll('-', ' ')} | Zomato`
    description = `Explore restaurants, menus, photos, and reviews in ${segments[2].replaceAll('-', ' ')}.`
  } else if (segments.length === 2 && segments[1] === 'collections') {
    title = `Restaurant collections in ${segments[0]} | Zomato`
    description = `Browse handpicked restaurant collections in ${segments[0]}.`
  } else if (segments.length === 2) {
    title = `Restaurants in ${segments[0]} | Zomato`
    description = `Discover great restaurants, cafes, and food in ${segments[0]}.`
  } else if (segments.length === 1) {
    title = `Discover restaurants in ${segments[0]} | Zomato`
    description = `Explore restaurants, cafes, and local food in ${segments[0]}.`
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="robots" content="index, follow" />
    </Helmet>
  )
}

function AppRoutes() {
  const location = useLocation()

  return (
    <>
      <PageMetadata />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3500,
          style: {
            borderRadius: '12px',
            background: '#202124',
            color: '#fff',
            fontSize: '14px',
          },
        }}
      />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="min-h-screen"
        >
          <Routes location={location}>
            <Route path="/:city/:town" element={<HomeRestaurants />} />
            <Route path="/" element={<Home />} />
            <Route path="/partner-with-us" element={<AddRestaurant />} />
            <Route path="/:city" element={<HomePage />} />
            <Route path="/delivery-cities" element={<DeliverCities />} />
            <Route path="/:city/collections" element={<Collections />} />
            <Route path="/:city/:town/:restaurant" element={<RestaurantDetail />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
    </>
  )
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </MotionConfig>
  )
}

export default App
