import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import Loading from "../components/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(() => {
    // Skip loading on mobile
    if (window.innerWidth <= 768) return false;
    return true;
  });
  const [loading, setLoading] = useState(0);

  const value = {
    isLoading,
    setIsLoading,
    setLoading,
  };
  useEffect(() => {
    // On phones there is no loading screen to finish, so the intro timeline is
    // kicked off directly.
    if (window.innerWidth <= 768) {
      import("../components/utils/initialFX").then((module) => {
        if (!module.initialFX) return;
        setTimeout(() => {
          module.initialFX();

          // Failsafe. The intro sets the hero, header and social icons to
          // opacity 0 before animating them in. If that timeline never
          // advances the page would stay blank, so once it has had time to
          // play, anything still hidden is revealed.
          setTimeout(() => {
            const probe = document.querySelector<HTMLElement>(
              ".landing-intro h1 .split-char"
            );
            if (probe && Number(getComputedStyle(probe).opacity) > 0.9) return;

            document
              .querySelectorAll<HTMLElement>(
                ".split-char, .split-h2, .landing-info-h2, .header, .icons-section, .nav-fade"
              )
              .forEach((el) => {
                el.style.opacity = "1";
                el.style.filter = "none";
                el.style.transform = "none";
              });
          }, 3000);
        }, 100);
      });
    }
  }, []);

  useEffect(() => {}, [loading]);

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      {isLoading && <Loading percent={loading} />}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
