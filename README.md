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

### Deploying to Vercel

This application is configured to deploy easily on Vercel. Follow these steps:

#### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import Your Repository**
   - Click "Add New Project"
   - Import your `web-quequeo` repository from GitHub
   - Vercel will automatically detect it's a React app

3. **Configure Environment Variables**
   - In the project settings, add these environment variables:
     - `REACT_APP_API_BASE_URL`: Your backend API URL
     - `REACT_APP_WEB_QUEQUEO_SECRET_KEY`: Your secret key
   - You can find these in your current `.env` file

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your app automatically
   - You'll get a URL like `https://web-quequeo.vercel.app`

#### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Add environment variables when asked

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

#### Automatic Deployments

Once connected to Vercel:
- Every push to `main` branch automatically deploys to production
- Pull requests create preview deployments
- No manual intervention needed!

#### Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
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
