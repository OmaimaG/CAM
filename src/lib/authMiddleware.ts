// Import getUserIdFromToken function
import jwt, { JwtPayload } from 'jsonwebtoken';

const getUserIdFromToken = (token: string): string | null => {
  try {
    const decoded = jwt.verify(token, 'your-secret-key') as JwtPayload;
    return decoded.userId;
  } catch (error) {
    return null;
  }
};

// Usage example
const token = 'your-jwt-token'; // Replace with an actual JWT token
const userId = getUserIdFromToken(token);

if (userId) {
  console.log('User ID:', userId);
} else {
  console.log('Invalid token or user ID not found.');
}
