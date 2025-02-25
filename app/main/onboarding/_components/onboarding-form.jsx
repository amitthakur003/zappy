"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { onboardingSchema } from "@/app/lib/schema";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card"




const OnboardingForm = ({industries}) => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const router = useRouter();


  const {
    register,
    handleSubmit,
    formState: { errors },
    serValue,
    watch,
} = useForm({
    resolver: zodResolver(onboardingSchema),
  })

  return (
  <div className="flex items-center justify-center bg-background">
    <Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>

</Card>

  </div> )
};

export default OnboardingForm; 
console.log("Hello ji bhbh")

