## Custom Chocolate Pack Builder

**Objective:** The objective of this project is to create a feature for an online chocolate store that allows customers to build a custom pack of 8 items. These items will consist of a combination of different chocolates. The key requirements for this feature are:

- **Item Selection:** Enable customers to select a combination of chocolates for their custom pack.
- **Quantity Limit:** Ensure that the total number of chocolates in the custom pack does not exceed 8 items.
- **Dynamic Pricing:** Display the total price of the custom pack, updating automatically based on the selected items and their respective quantities.
- **User-Friendly Interface:** Design an intuitive and responsive user interface to facilitate easy selection and customization.

### Approach

**Frontend:**

- **HTML/CSS:** Use HTML and CSS for structuring and styling the user interface. Ensure responsiveness for a seamless experience on various devices.
- **Bootstrap:** Utilize Bootstrap to quickly create a responsive and visually appealing layout.
- **JavaScript:** Implement JavaScript for dynamic behavior, including item selection, quantity tracking, and price calculation.

**Item Selection:**

- Display a grid of available chocolates with images, names, and prices.
- Include an "Add to Cart" button for each chocolate, allowing users to add chocolates to their custom pack.
- Implement a counter for each chocolate to track the quantity selected by the user.
- Disable the "Add to Cart" button when the quantity reaches the maximum (8 items).

**Quantity Limit:**

- Implement logic to ensure that the total number of selected chocolates does not exceed 8 items.
- Provide clear feedback to users when they reach the quantity limit.

**Dynamic Pricing:**

- Create an array of chocolates with their respective prices.
- Use JavaScript to calculate the total price based on the selected items and quantities.
- Update the displayed total price whenever the user adds or removes items.

**User-Friendly Interface:**

- Design an intuitive and visually appealing interface with clear product images, names, and prices.
- Provide user feedback on item selection and quantity limits.
- Ensure that the interface is responsive and works well on both desktop and mobile devices.

### Tools and Frameworks

- HTML, CSS, and JavaScript for frontend development.
- Bootstrap for responsive design.
- JavaScript for dynamic behavior and price calculation.

### User

To experience the Custom Chocolate Pack Builder in action, visit the following link: [Custom Chocolate Pack Builder Example](https://choclate-app.onrender.com/#)
