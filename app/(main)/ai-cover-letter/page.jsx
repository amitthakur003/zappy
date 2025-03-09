import { getCoverLetters } from "@/actions/cover-letter";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverLetterList from "./_components/cover-letter-list";

export default async function CoverLetterPage() {
  const coverLetters = await getCoverLetters();

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto">
      
      {/* Title & Button Section */}
      <div className="flex flex-col xl:flex-row gap-6 lg:gap-10 items-center xl:items-start justify-between mb-6 lg:mb-10">
        
        {/* Title & Description */}
        <div className="max-w-3xl xl:max-w-4xl text-center xl:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold gradient-title">
            My Cover Letters
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg mt-2 leading-relaxed">
            Generate AI-powered cover letters in seconds—tailored to your job applications.
          </p>
        </div>

        {/* Button */}
        <Link href="/ai-cover-letter/new">
          <Button className="text-sm md:text-base lg:text-lg px-4 py-2 md:px-5 md:py-3">
            <Plus className="h-4 w-4 mr-2" />
            Create New
          </Button>
        </Link>
      </div>

      {/* Cover Letter List */}
      <CoverLetterList coverLetters={coverLetters} />
    </div>
  );
}
