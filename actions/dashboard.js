"use server"
import { getIndustryInsights } from '@/actions/dashboard';
import { db } from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';

export async function getIndustryInsights() {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");
  
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });
  
    if (!user) throw new Error("User not found");

    if (!industryInsight) {
      industryInsight = await tx.industryInsight.create({
        data: {
          industry: data.industry,
          dalaryRanges: [],
          growthRate: 0,
          demandLevel: "MEDIUM" ,
          topSkills: [],
          marketOutLook : "NEUTRAL",
          keyTrends: [],
          recommendedSkills: [],
          nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
console.log("hii amit jii kese");
        }
      })
    }
}