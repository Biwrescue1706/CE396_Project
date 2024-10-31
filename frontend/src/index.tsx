import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "@radix-ui/themes/styles.css"; // Import Radix UI styles
import App from './App.tsx'; // Import your main App component
import './index.css'; // Import your global CSS
import { Theme } from "@radix-ui/themes"; // Import the Theme provider from Radix UI

// Create the root element and render the application
createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Theme>
          <App />
      </Theme>
    </StrictMode>,
  );
