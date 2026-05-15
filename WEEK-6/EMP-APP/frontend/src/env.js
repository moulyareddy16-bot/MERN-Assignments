// This file handles environment variables using dotenv as requested
import * as dotenv from 'dotenv';

// Note: In a production browser environment, dotenv.config() will not work 
// because it requires Node.js internals (fs). 
// However, Vite will automatically inject variables from .env into process.env 
// during the build process because of our vite.config.js settings.

export const configureEnv = () => {
    // dotenv.config(); // This will fail in browser, but leaving here as per request
};
