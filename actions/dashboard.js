"use server"

import { db } from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';
import { getIndustryInsight } from '@/actions/dashboard';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Content } from './../node_modules/@google/generative-ai/dist/server/types/content.d';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI.API.KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
})
export const generateAIInsights = async (industry) => {
  const prompt = `
  Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
  {
    "salaryRanges": [
      { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
    ],
    "growthRate": number,
    "demandLevel": "High" | "Medium" | "Low",
    "topSkills": ["skill1", "skill2"],
    "marketOutlook": "Positive" | "Neutral" | "Negative",
    "keyTrends": ["trend1", "trend2"],
    "recommendedSkills": ["skill1", "skill2"]
  }
  
  IMPORTANT: Return ONLY the JSON. No additional text, notes, or markdown formatting.
  Include at least 5 common roles for salary ranges.
  Growth rate should be a percentage.
  Include at least 5 skills and trends.
`;

const result = await model.generate.Content(prompt)
const response = result.response;
const text = response.text()

const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
return JSON.parse(cleanedText);

};

export async function  getIndustryInsights() {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");
  
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });
  
    if (!user) throw new Error("User not found");

    if(!user.industryInsight){
      const insights = await generateAIInsights(user.industry);

      const getIndustryInsight = await db.industryInsight.create({
        data:{
          industry: user.industry,
          ...insights,
          nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        }
      })

      return industryInsight;
    }

    return user.industryInsight;
}  
