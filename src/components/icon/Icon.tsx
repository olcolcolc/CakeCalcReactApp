// Define a set of icons as React components
export const icons: Record<string, React.FC> = {
  sprinkle: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <path
        d="M100 10C110 20 120 10 125 15C130 25 130 40 140 50C145 55 140 65 135 70C125 80 115 75 105 60C100 45 110 40 115 30C120 20 110 15 100 10Z"
        fill="black"
      />
    </svg>
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
