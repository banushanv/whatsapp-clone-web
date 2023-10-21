import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { OAuth2Client } from 'google-auth-library';

const app = express();
const PORT = 6024;
const CLIENT_ID = process.env.CLIENT_ID; // set this in your .env file
const client = new OAuth2Client(CLIENT_ID);

app.use(bodyParser.json());
app.use(cors());

app.post('/api/google-login', async (req, res) => {
  try {
    const ticket = await client.verifyIdToken({
    idToken: req.body.token
  });

   res.status(200).json(ticket.getPayload());
   } catch (error) {
        res.status(400).json({ message: error.message });
      }
    });
app.listen(PORT, () => {});