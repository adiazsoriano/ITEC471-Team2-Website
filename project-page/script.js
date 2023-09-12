let projectHeaderText = "The Project";
let projectBodyText = `Our project consists of building a microservices-based e-commerce platform that allows users to create
profile, browse products, add them to the cart, and place orders. The platform will consist of several
microservices, each responsible for a specific functionality. Together, all will come together to create a
pristine electronic bookstore for all to use. It is our mission at LATA to deliver the best for our users.`;

let productHeaderText = "The Product Service";
let productBodyText = `The product service is responsible for managing product information. Stores product details such as name,
description, price, and availability. Provides APIs to list all products, retrieve product details, and
check availability.`;

let cartHeaderText = "The Cart Service";
let cartBodyText = `The cart service manages user shopping carts. Allows users to add, remove, and update products in their
carts. Calculates the total price of items in the cart.`;

let orderHeaderText = "The Order Service";
let orderBodyText = `The order service handles order creation and management. Collects user information, cart contents, and
calculates order total. Generates an order ID and handles payment processing.`;

let userHeaderText = "The User Service";
let userBodyText = `The user user service manages user information and authentication. Stores user data like name, address, and
payment information. Provides registration, login, and authentication functionality.`;

let notificationHeaderText = "The Notification Service";
let notificationBodyText = `The notification service handles various notifications to users. Sends confirmation emails after order
placement. Sends alerts for successful registrations, order status updates, & etc.`;

let frontendHeaderText = "The Frontend Service";
let frontendBodyText = `The frontend service provides a frontend interface for users to interact with the microservices.
Communicates with the other services through APIs Responsive or adjusts to other devices.`;

function EnableAll() {
    document.getElementById('project_button').disabled = false;
    document.getElementById('product_button').disabled = false;
    document.getElementById('cart_button').disabled = false;
    document.getElementById('order_button').disabled = false;
    document.getElementById('user_button').disabled = false;
    document.getElementById('notification_button').disabled = false;
    document.getElementById('frontend_button').disabled = false;
}

function ProjectButtonClick() {
    document.getElementById('text_header').innerHTML = projectHeaderText;
    document.getElementById('text_body').innerHTML = projectBodyText;

    EnableAll();
    document.getElementById('project_button').disabled = true;
}

function ProductButtonClick() {
    document.getElementById('text_header').innerHTML = productHeaderText;
    document.getElementById('text_body').innerHTML = productBodyText;

    EnableAll();
    document.getElementById('product_button').disabled = true;
}

function CartButtonClick() {
    document.getElementById('text_header').innerHTML = cartHeaderText;
    document.getElementById('text_body').innerHTML = cartBodyText;

    EnableAll();
    document.getElementById('cart_button').disabled = true;
}

function OrderButtonClick() {
    document.getElementById('text_header').innerHTML = orderHeaderText;
    document.getElementById('text_body').innerHTML = orderBodyText;

    EnableAll();
    document.getElementById('order_button').disabled = true;
}

function UserButtonClick() {
    document.getElementById('text_header').innerHTML = userHeaderText;
    document.getElementById('text_body').innerHTML = userBodyText;

    EnableAll();
    document.getElementById('user_button').disabled = true;
}

function NotificationButtonClick() {
    document.getElementById('text_header').innerHTML = notificationHeaderText;
    document.getElementById('text_body').innerHTML = notificationBodyText;

    EnableAll();
    document.getElementById('notification_button').disabled = true;
}

function FrontendButtonClick() {
    document.getElementById('text_header').innerHTML = frontendHeaderText;
    document.getElementById('text_body').innerHTML = frontendBodyText;

    EnableAll();
    document.getElementById('frontend_button').disabled = true;
}