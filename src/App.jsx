import './App.scss'
import {Route, Routes} from "react-router-dom";
import LandingPage from "./pages/login-register-pages/open/LandingPage.jsx";
import LoginPage from "./pages/login-register-pages/open/LoginPage.jsx";
import RegisterPage from "./pages/login-register-pages/open/RegisterPage.jsx";
import RecipePage from "./pages/recipes-pages/open/RecipePage.jsx";
import AllRecipesPage from "./pages/recipes-pages/open/AllRecipesPage.jsx";
import NavBar from "./components/ui/nav/NavBar.jsx";
import AddNewRecipePage from "./pages/recipes-pages/authenticated/AddNewRecipePage.jsx";
import LogoutPage from "./pages/login-register-pages/open/LogoutPage.jsx";
import DashboardPage from "./pages/personal-pages/authenticated/DashboardPage.jsx";
import GroceriesMainPage from "./pages/groceries-pages/authenticated/GroceriesMainPage.jsx";
import ShoppingModePage from "./pages/groceries-pages/authenticated/ShoppingModePage.jsx";
import ShoppingListsPage from "./pages/groceries-pages/authenticated/ShoppingListsPage.jsx";
import RecipesMainPage from "./pages/recipes-pages/open/RecipesMainPage.jsx";
import SavedRecipesPage from "./pages/recipes-pages/authenticated/SavedRecipesPage.jsx";
import SurpriseRecipePage from "./pages/recipes-pages/authenticated/SurpriseRecipePage.jsx";

function App() {

    return (
        <>
            <NavBar/>

            <Routes>
                <Route index element={<LandingPage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/register" element={<RegisterPage />}/>
                <Route path="/logout" element={<LogoutPage />}/>

                <Route path="/dashboard" element={<DashboardPage />}/>

                <Route path="/groceries/main" element={<GroceriesMainPage />}/>
                <Route path="/groceries/shopping-mode" element={<ShoppingModePage />}/>
                <Route path="/groceries/shopping-lists" element={<ShoppingListsPage />}/>

                <Route path="/recipesmain" element={<RecipesMainPage />}/>
                <Route path="/recipes/all" element={<AllRecipesPage />}/>
                <Route path="/recipe/:recipeId" element={<RecipePage />}/>
                <Route path="/recipes/saved-recipes" element={<SavedRecipesPage />}/>
                <Route path="/recipes/surprise-recipe" element={<SurpriseRecipePage />}/>
                <Route path="/recipes/new-recipe" element={<AddNewRecipePage />}/>
            </Routes>
        </>
    )
}

export default App
