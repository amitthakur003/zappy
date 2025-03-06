import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ 
  id: "zappy" ,
 name: "Zappy",
Credentials: {
  gemini:{
    apikey: process.env.GEMINI_API_KEY,

   },
  },
});
