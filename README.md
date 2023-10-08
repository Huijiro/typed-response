# typed-response - Typed HTTP Requests in TypeScript

`typed-response` is a TypeScript utility that simplifies making HTTP requests using the `fetch` API while providing strong typing for both successful and error responses. It allows you to specify the response types based on your application's needs.

## Installation

You can install `typed-response` via npm or yarn:

```bash
npm install typed-response
# or
yarn add typed-response
```

## Usage

How to use typedFetch to make HTTP requests with typed responses:

```typescript
import { typedFetch, TypedResponse } from 'typed-response';

// Define your response types
interface SuccessResponse {
  id: number;
  title: string;
}

interface ErrorResponse {
  error: string;
}

async function fetchData() {
  try {
    // Make a GET request with typed response
    const response: TypedResponse<SuccessResponse, ErrorResponse> = await typedFetch(
      'https://jsonplaceholder.typicode.com/posts/1'
    );

    if (response.ok) {
      // Response is successful, so we can access the data with the SuccessResponse type.
      const data = await response.json();
      console.log('Received data:', data);
    } else {
      // Response is an error, so we can access the error data with the ErrorResponse type.
      const errorData = await response.json();
      console.error('Failed to fetch data:', errorData);
    }
  } catch (error) {
    // Sadly JavaScript errors are not typed, so we can't access the error data with the ErrorResponse type.
    console.error('An error occurred:', error);
  }
}

fetchData();
```