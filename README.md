# Web Quequeo 🚀

Welcome to __Web Quequeo__, a modern frontend application developed with __ReactJS__ and styled using __Material-UI__. This application serves as the user interface for the Quequeo platform and is designed to work seamlessly with its corresponding backend API.

## System Requirements 🛠️

__Node.js: 18+__
__React: 18.3.1__
__Material-UI: 6.2.1__
__Motion: 11.13.1__

**Project Structure** 📁
  ```bash
  src/
    components/     # Reusable UI components (e.g., Navbar, Footer, Badges)
    context/        # ThemeContext for handling theme and localization
    pages/          # Pages like About Me, Quequeo, and Work Experience
    styles/         # Global styling and theming
    utils/          # Helper functions and API client setup
    App.js          # Main app entry point
    index.js        # React DOM rendering
  ```

__Key Components__
- SimpleNavbar: Navigation bar used across all pages.
- Footer: Footer with relevant links and branding.
- WorkExperienceDetails: Displays details for the Work Experience page.
- AnimatedText: Adds animation effects to text elements.
- Badges: Showcases skill or experience badges.
***
**Initial Setup** ⚙️ 
1. Clone the repository
   ```bash
   git clone https://github.com/your-username/web-quequeo.git
   cd web-quequeo
2. Install dependencies:
    ```bash
    npm install
3. Run the development server:
    ```bash
    npm start
The application will be available at http://localhost:3001
****
**Features** 🌟
1. __Dynamic Content:__
- Fetches data dynamically using Axios from the backend API.
- Localized content based on the selected language (en or es).
2. __Responsive Design:__
- Optimized for desktop and mobile devices using Material-UI.
3. __Smooth Animations:__
- Uses Motion for smooth transitions and animations across.
4. __Reusable Components:__
- Modular design ensures code reusability and ease of maintenance.
****
**Additional Libraries** 🔧
- Material-IU: Provides a modern UI framework with customizable components.
- Motion: Enables smooth animations and transitions.
- Axios: Handles API requests efficiently.
***
**Deployment** 🚢
The application is deployed using __AWS Amplify__. The deployment process is automated through a __Git push__ workflow, where the main branch triggers a build and deployment in Amplify.
****
**Limitations and Future Plans** 🚧
1. No Testing Framework:
- Currently, no automated tests are configured (e.g., Jest or Cypress).
2. Planned Enhancements:
- Integration of testing frameworks.
- Further optimization for performance and accessibility.
***
**Author** 👥
Developed by **Jaime F. García Méndez**
