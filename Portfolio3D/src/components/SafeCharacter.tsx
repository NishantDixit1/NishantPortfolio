import { Component, lazy, ReactNode, Suspense } from "react";

const CharacterModel = lazy(() => import("./Character"));

// Some devices (older phones, blocked or software-only GPUs) cannot create a
// WebGL context. Without this check the three.js scene throws during render
// and takes the whole page down with it, which is worse than having no model.
const webglSupported = (): boolean => {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
};

const markNo3D = () => document.body.classList.add("no-3d");

class CharacterBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    console.warn("3D character disabled:", error);
    markNo3D();
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

/**
 * Renders the 3D character, falling back to the still photo (via the `no-3d`
 * class on <body>) if the device cannot run it.
 */
const SafeCharacter = () => {
  if (!webglSupported()) {
    markNo3D();
    return null;
  }

  return (
    <CharacterBoundary>
      <Suspense fallback={null}>
        <CharacterModel />
      </Suspense>
    </CharacterBoundary>
  );
};

export default SafeCharacter;
