"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { generateAIInsights } from "./dashboard";


export async function updateUser(data) {
  const {userId} = await auth();
  if (!userId) throw new Error("unauthorized");

const user = await  db.user.findUnique({
  where: {
    clerkUserId: userId,
  },
});

if(!user) throw new Error("User not found");

try {

  const result = await db.$transaction
    (async (tx) => {
        //Find if the indrustry exists
        let industryInsight = await tx.industryInsight.findUnique({
          where:{
            industry: data.industry,
          },
        });

        // If indrustry doesn't exists, create it with default values  -will replace ut with ai later
        if (!industryInsight) {
          industryInsight = await tx.industryInsight.create({
            data: {
              industry: data.industry,
              salaryRanges: [], //Default empty array
              growthRate: 0,  //Default Value
              demandLevel: "Medium",  //Default Value
              topSkills: [],  //Default empty array
              marketOutlook: "Neutral", //Default Value
              keyTrends: [],  //Default empty array
              recommendedSkills: [],  //Default empty array
              nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 Week from now
            },
          });
        }

        //update the user
        const updatedUser = await tx.user.update({

          where: {
            id: user.id,
          },
          data: {
            industry: data.industry,
            experience: data.experience,
            bio: data.bio,
            skills: data.skills,
          },
        });

        revalidatePath("/");


        return result.user;
    }, {
      timeout : 10000, //default: 5000
    } )
  
return result.user;
} catch (error) {
  console.error("Error updating user and indrustry:", error.message);
  throw new Error ("Failed to update profile");
}

}


export async function getUserOnboardingStatus() {
  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });
  
  if(!user) throw new Error("User not found");

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      select: {
        industry: true,
      }
    });

    return {
      isOnboarded: !!user?.industry,  //if the user industry exists it will be true
    };
  } catch (error) {
    console.error("Error checking onboarding status:", error.message);
    throw new Error("Failed to check onboarding status");
  } 
}