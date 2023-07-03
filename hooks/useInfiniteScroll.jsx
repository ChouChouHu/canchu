import { useEffect, useState } from 'react';

const useInfiniteScroll = (callback) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkScrollPosition = async () => {
      // 如果已經滾動到接近頁面底部（距離底部100px內），則執行回調函數
      if (!isLoading && window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
        setIsLoading(true);
        await callback();
        setIsLoading(false);
      }
    };

    // 添加滾動事件監聽器
    window.addEventListener('scroll', checkScrollPosition);

    // 刪除監聽器當組件卸載
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, [callback, isLoading]); // 依賴回調函數和isLoading的變化，若有變化則更新監聽器

  return isLoading;
};

export default useInfiniteScroll;
