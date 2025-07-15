import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ForgotPassowrd from '../pages/ForgotPassowrd'
import AdminPanel from '../pages/AdminPanel'
import AllUsers from '../pages/AllUsers'
import AllProducts from '../pages/AllProducts'
import CategoryProduct from '../pages/CategoryProduct'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import SearchProduct from '../pages/SearchProduct'
import Test from '../pages/Test'
import SignUp from '../pages/SignUp'
import Header from '../components/Header'
import CloseNavbar from '../components/CloseNavbar'
import Sumit from '../components/sumit'
import Dashboard from '../pages/Dashboard'
import Users from '../pages/Users'
import Survey from '../pages/Survey'
import Table from '../pages/Table'
import AdCreate from '../pages/AdCreate'
import SurveyCreate from '../pages/SurveyCreate'
import DataPage from '../pages/DataPage'
import CreatePage from '../pages/CreatePage'
import ChartPage from '../pages/ChartPage'
import DownloadPage from '../pages/DownloadPage'
import SurveyPage from '../pages/Survey'
import FromPage from '../components/FromPage'
import ProductView from '../pages/ProductView'
import Excutive from '../pages/Excutive'
import CloseNavbarExcutive from '../components/CloseNavbarExcutive'
import CloseNavbar2 from '../components/CloseNavbar2'
import Payment from '../pages/Payment'
import SignUp2 from '../pages/SignUp2'

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Login/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "payment",
                element : <Payment />
            },
            {
                path : "productview",
                element : <ProductView/>
            },
            {
                path : "closenavbarexcutive",
                element : <CloseNavbarExcutive/>
            },
            
            {
                path : "excutive",
                element : <Excutive/>
            },
            {
                path : "dashboard",
                element : <Dashboard/>
            },
            {
                path : "table",
                element : <Table/>
            },
            {
                path : "users",
                element : <Users/>
            },
            {
                path : "data",
                element : <DataPage/>
            },
            {
                path : "createpage",
                element : <CreatePage/>
            },
            {
                path : "frompage",
                element : <FromPage/>
            },
            {
                path : "chartpage",
                element : <ChartPage/>
            },
            {
                path : "downloadpage",
                element : <DownloadPage/>
            },
            {
                path : "adcreate",
                element : <AdCreate/>
            },
            {
                path : "surveycreate",
                element : <SurveyCreate/>
            },
            {
                path : "surveypage",
                element : <SurveyPage/>
            },
            {
                path : "header",
                element : <Header/>
            },
            {
                path : "sumit",
                element : <Sumit/>
            },
            {
                path : "closenavbar",
                element : <CloseNavbar />
            },
            {
                path : "closenavbar2",
                element : <CloseNavbar2 />
            },
            {
                path : "home",
                element : <Home/>
            },
            {
                path : "sign-up",
                element : <SignUp/>
            },
            {
                path : "sign-up2",
                element : <SignUp2/>
            },
        
            
            {
                path : "forgot-password",
                element : <ForgotPassowrd/>
            },
            {
                path : "test",
                element : <Test/>
            },
            {
                path : "product-category",
                element : <CategoryProduct/>
            },
            {
                path : "product/:id",
                element : <ProductDetails/>
            },
            {
                path : 'cart',
                element : <Cart/>
            },
            {
                path : "search",
                element : <SearchProduct/>
            },
            {
                path : "all-users",
                element : <AllUsers/>
            },
            {
                path : "all-products",
                element : <AllProducts/>
            },
            {
                path : "admin-panel",
                element : <AdminPanel/>,
            },
            {
                path : "admin-panel",
                element : <AdminPanel/>,
                children : [
                    {
                        path : "all-users",
                        element : <AllUsers/>
                    },
                    {
                        path : "dashboard",
                        element : <Dashboard/>
                    },
                    {
                        path : "all-products",
                        element : <AllProducts/>
                    }
                ]
            },
        ]
    }
])


export default router