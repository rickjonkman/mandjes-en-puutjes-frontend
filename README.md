
# Documentation

## Info
Whether you're a seasoned chef looking for new inspiration or a novice cook eager to learn, Mandjes & Puutjes has
something
for everyone. Browse the collection of recipes. From quick and easy weeknight dinners to gourmet delights for
special occasions, you'll find endless possibilities to satisfy your cravings and impress your loved ones.

However, Mandjes & Puutjes is more than just a recipe repository. Understanding that meal planning can be a
time-consuming task, the platform incorporates powerful organizational tools to streamline kitchen workflows. With an
intuitive interface, users can easily create and manage shopping lists tailored to their recipes, ensuring they have all
the necessary ingredients on hand when it's time to cook.

# Installation

## Dependencies

- SASS / SCSS
- React-router-dom
- Vite-plugin-svgr
- Axios
- jwt-decode

# Directory structure

## Pages

- Personal
    - Dashboard
- Groceries
    - Groceries Main
    - Shopping Mode
    - Grocery Lists
- Recipes
    - Recipes Main
    - All Recipes
    - Recipe Page (:recipeId)
    - Surprise Recipe
    - New Recipe
- Utility pages
    - Error Page
    - Loading Page
    - Not Authorized Page
    - Please Register Page
    - Recipe Not Found Page
- Login / Register
    - Login
    - Register

# App
In this web application you can manage your groceries and recipes. You can create grocery lists and add groceries to
them. You can also create recipes and add ingredients to them. You can also search for recipes and add them to your
recipe list. You can also generate a random recipe if you don't know what to cook.

## Features

## Technical Details

### HTML
- HTML is written in JSX format.
- HTML is written in a semantic way to improve accessibility and SEO.
- Functional and static components are used as much as possible to improve readability and maintainability.
- Components are written in a way that they can be reused in different parts of the application.

### Data
- All data is stored in constants to improve readability, maintainability and scalability.
- Data is fetched from the backend using Axios.
- Data is stored in the local storage to improve performance and reduce the number of requests to the backend.
- Fetch requests are made from the Context API to improve readability and maintainability.

### Styles
- Styles are written in SCSS format.
- Styles are written in a way that they can be reused in different parts of the application.
- Styles are written in a way that they can be easily modified and extended.

### Assets
- Assets are divided in SVG and images.
- SVG assets are used for icons and logos.
- Images are used for photos and illustrations.

### Routing
- Routing is done using React Router.
- Routing is done in a way that it is easy to navigate between different parts of the application.

### Authentication
- Authentication is done using JWT.

### Structure
- API calls are stored separately in the API folder.

### Performance
- Performance is optimized by using useMemo and useCallback hooks.

### Responsiveness

### Accessibility
- Coding is done in a way that it is accessible to all users, including users with visual disabilities.
- The application is available in Dutch and English.