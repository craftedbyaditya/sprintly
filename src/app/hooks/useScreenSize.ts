import { useEffect, useState } from "react";

export function useScreenSize(minWidth = 768) {
  const [isTooSmall, setIsTooSmall] = useState(window.innerWidth < minWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsTooSmall(window.innerWidth < minWidth);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [minWidth]);

  return isTooSmall;
}