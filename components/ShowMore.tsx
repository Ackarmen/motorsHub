"use client";

import { CustomButton } from "@/components";
import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleNavigation() {
    setLoading(true);
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);

    setTimeout(() => {
      router.push(newPathName, { scroll: false });
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title={loading ? "Loading..." : "Show More"}
          btnType="button"
          containerStyle="bg-primary-blue rounded-full text-white w-36"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
}

export default ShowMore;
