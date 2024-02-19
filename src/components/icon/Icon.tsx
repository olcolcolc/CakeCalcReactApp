// Define a set of icons as React components
export const icons: Record<string, React.FC> = {
  darkCake: () => (
    <img
      src="/src/assets/illustrations/darkCake.png"
      alt="chocolate cake"
      aria-label="chocolate cake"
      width="300"
      height="300"
    />
  ),
  lightCake: () => (
    <img
      src="/src/assets/illustrations/lightCake.png"
      alt="vanilla cake"
      aria-label="vanilla cake"
      width="300"
      height="300"
    />
  ),
  cakes: () => (
    <img
      src="/src/assets/illustrations/cakes.png"
      alt="two cakes"
      aria-label="two cakes"
      width="100%"
    />
  ),
  cakesHorizontal: () => (
    <img
      src="/src/assets/illustrations/cakesHorizontal.png"
      alt="two cakes"
      aria-label="two cakes"
      width="100%"
    />
  ),
  donut: () => (
    <img
      src="/src/assets/illustrations/donut.png"
      alt="donut"
      aria-label="donut"
      width="300"
      height="300"
    />
  ),
};

export interface IconProps {
  name: keyof typeof icons;
}

// Icon component that renders the specified icon
export const Icon: React.FC<IconProps> = ({ name }) => {
  const IconComponent = icons[name]; // Get the corresponding icon component
  return <IconComponent />;
};
