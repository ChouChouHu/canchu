import { useEffect, useState } from "react";

const useInfiniteScroll = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const distance = 100;

  useEffect(() => {
    const checkScrollPosition = async () => {
      // 如果已經滾動到接近頁面底部（距離底部 100px 內），執行 callback 函數
      const scrollBottom =
        window.innerHeight + document.documentElement.scrollTop;
      const isScrollToPosition =
        scrollBottom >= document.documentElement.offsetHeight - distance;

      if (!isLoading && isScrollToPosition) {
        setIsLoading(true);
        await callback(); // fetch posts
        setIsLoading(false);
      }
    };

    window.addEventListener("scroll", checkScrollPosition);
    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, [callback, isLoading]); // 依賴 callback 和 isLoading 的變化，若有變化則更新監聽器

  return isLoading;
};

export default useInfiniteScroll;
