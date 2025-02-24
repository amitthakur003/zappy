import { redirect } from 'next/navigation';
import React from 'react'
import { getUserOnboardingStatus } from '@/actions/user';

const IndrustryInsightsPage = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();
  
      if (!isOnboarded) {
        redirect("/onboarding");
      }


  return (
    <div>IndrustryInsightsPage</div>
  )
}

export default IndrustryInsightsPage