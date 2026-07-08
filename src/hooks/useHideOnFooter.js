import { useEffect, useState } from "react";

function useHideOnFooter() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHide(window.innerWidth < 640 && entry.isIntersecting);
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(footer);

    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setHide(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return hide;
}

export default useHideOnFooter;
