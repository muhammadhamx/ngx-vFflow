# Drag-and-Drop Node System

## Overview
The Drag-and-Drop Node System is a dynamic web application built with **Angular** that allows users to create, customize, and visualize interactive nodes. Users can drag nodes from a sidebar, drop them into a central workspace, connect them to represent relationships, and assign custom names to each node and connection. This system is designed to be intuitive, responsive, and visually appealing.

## Features
- **Dynamic Node Creation**: Add custom nodes and name them based on your requirements.
- **Drag-and-Drop Functionality**: Seamlessly drag nodes and place them in the workspace using **ngx-drag-drop**.
- **Connection Visualization**: Connect nodes dynamically to represent workflows or relationships.
- **Customizable UI**: Styled with **Tailwind CSS** and **Daisy UI** for a modern and adaptive interface.
- **Scalable Architecture**: Designed with Angular's modular structure for easy scalability and maintainability.

## Technologies Used

### Frontend
- **Angular**: Framework for building the application.
- **ngx-drag-drop**: For implementing drag-and-drop functionality.
- **ngx-vflow**: For visualizing node connections.

### Styling
- **Tailwind CSS**: For responsive and modern styling.
- **Daisy UI**: For additional UI components.

### State Management
- **RxJS**: For efficient state management and event handling.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd dragable-nodes
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

## Usage
1. **Add Nodes**: Drag nodes from the sidebar and drop them into the workspace.
2. **Customize Nodes**: Assign custom names to nodes and connections.
3. **Connect Nodes**: Link nodes to visualize workflows or relationships.

## Project Structure
```
src/
├── app/
│   ├── components/       # Reusable components like nodes and sidebar
│   ├── services/         # Services for state management and data handling
│   ├── models/           # TypeScript models for nodes and connections
│   └── app.module.ts     # Main module
├── assets/               # Static assets
├── styles/               # Global styling (Tailwind CSS configuration)
└── main.ts               # Application entry point
```

## Scripts
- `npm start`: Run the development server.
- `npm build`: Build the project for production.
- `npm test`: Run unit tests.

## Dependencies

### Main Dependencies
- **Angular**: `^18.1.0`
- **ngx-drag-drop**: `^18.0.2`
- **ngx-vflow**: `^0.12.0`
- **Tailwind CSS**: `^3.4.13`
- **Daisy UI**: `^4.12.11`

### Dev Dependencies
- **@angular/cli**: `^18.1.3`
- **typescript**: `~5.5.2`
- **karma**: `~6.4.0`

## Demo
Check out the live demo of this project here: [Drag-and-Drop Node System](https://ngx-vflow.vercel.app)

## Contributing
Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature/fix.
3. Commit your changes and push them to your fork.
4. Submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgments
- **ngx-drag-drop** and **ngx-vflow** for providing powerful libraries.
- **Tailwind CSS** and **Daisy UI** for their excellent styling solutions.

## Contact
For any questions or suggestions, feel free to reach out:
- **Email**: muhammadhamzasajid6@gmail.com 
- **GitHub**: muhammadhamx

---
Thank you for checking out this project!
