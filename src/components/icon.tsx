import { icons } from 'lucide-react';

type IconProps = {name : string , color? : string , size?  : number}

const Icon = ({ name, color = "white", size = 24 } : IconProps) => {
  const LucideIcon = icons[name] as any;

  return <LucideIcon color={color} size={size} />;
};

export default Icon;