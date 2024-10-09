# ShoppyGlobe

ShoppyGlobe is an e-commerce application built with React and Redux, offering a user-friendly interface for browsing and purchasing products. The application features a dynamic product list, cart functionality, and a smooth checkout process, providing users with a seamless shopping experience.

## Features
- **Product Browsing**: Users can view a list of products with details and add them to their cart.
- **Cart Management**: Users can view, modify quantities, and remove items from their cart.
- **Product Details**: Detailed view of individual products with descriptions and images.
- **Checkout Process**: A smooth checkout experience with order confirmation.
- **Responsive Design**: The application is fully responsive and works on various screen sizes.
- **JWT Authentication**: Secure user authentication using JSON Web Tokens (JWT).

## Technologies

### Frontend:
- **React**: Frontend library for building user interfaces.
- **Redux**: For state management.
- **React Router**: For navigation and routing.
- **Tailwind CSS**: For modern, utility-first styling.
- **Font Awesome**: For icons.

### Backend:
- **Node.js**: JavaScript runtime for backend.
- **Express.js**: Framework for building APIs.
- **MongoDB**: NoSQL database for storing products, users, and cart data.
- **Mongoose**: ODM for MongoDB to manage schemas and collections.
- **JWT**: For authentication and protecting routes.

## Setup Instructions

### Frontend Setup:
To run the frontend locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/NarayananM264059/ShoppyGlobe
   cd shoppyglobe
   ```

2. **Install Dependencies**:
   ```bash
   npm install

   npm install react-router-dom react-redux @reduxjs/toolkit @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons

   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**: Navigate to `http://localhost:3000` in your browser to view the application.


### Backend Setup:

1. **Clone the Backend Repository**:
   
   ```bash
   git clone https://github.com/NarayananM264059/ShoppyGlobe/tree/main/backend
   cd shoppyglobe-backend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the backend directory and add the following variables:
     ```plaintext
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```

4. **Start the Backend Server**:
   ```bash
   npm start
   ```
   The backend will run on `http://localhost:5000`.

### Testing Backend API with ThunderClient/Postman
You can use tools like ThunderClient (VSCode extension) or Postman to test the API. For example:
- **GET /products**: To fetch all products.
- **POST /cart**: To add a product to the cart (requires JWT token in the request headers).

## API Endpoints

### Products:
- **GET /products**: Fetch a list of all products.
- **GET /products/:id**: Fetch details of a single product by ID.
- **POST /products**: Add a new product (admin only).

### Cart:
- **POST /cart**: Add an item to the shopping cart.
- **PUT /cart/:id**: Update the quantity of an item in the cart.
- **DELETE /cart/:id**: Remove an item from the cart.

### Authentication:
- **POST /auth/register**: Register a new user.
- **POST /auth/login**: Authenticate user and receive a JWT token.

## Usage

### Frontend:
- Navigate through the home page to view products.
- Click on any product to view its details.
- Add products to your cart and manage your cart from the cart page.
- Proceed to checkout to complete your purchase.

### Backend:
- Use the API to fetch products, manage the shopping cart, and handle user authentication.
- Only logged-in users can manage their cart.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Github Links
- **Frontend**: [ShoppyGlobe Frontend](https://github.com/NarayananM264059/ShoppyGlobe)
- **Backend**: [ShoppyGlobe Backend](https://github.com/NarayananM264059/ShoppyGlobe-backend)
```
