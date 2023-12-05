import { createMocks } from 'node-mocks-http';
import handler from '.././src/pages/api/auth/[...nextauth]'; 

describe('Your API Route', () => {
  it('should return the expected response', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    // Call your API route handler
    await handler(req, res);

    // Assert the response status code
    expect(res.statusCode).toBe(200);

    // Parse the JSON response (assuming your API returns JSON)
    const jsonResponse = JSON.parse(res._getData());

    expect(jsonResponse).toHaveProperty("ObjectId('6563213f9b94e3bcc060a521')");
    expect(jsonResponse).toHaveProperty('Aroooj');
    expect(jsonResponse).toHaveProperty('5fatia92@solent.ac.uk');
    expect(jsonResponse).toHaveProperty("https://avatars.githubusercontent.com/u/91609648?v=4");
    expect(jsonResponse).toHaveProperty('admin');
  });
});
