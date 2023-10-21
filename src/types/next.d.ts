// types/next.d.ts

import { NextRequest } from 'next/server';

declare module 'next/server' {
  export interface NextRequest {
    user_id?: string; // Extend the request object with user_id property
  }
}
