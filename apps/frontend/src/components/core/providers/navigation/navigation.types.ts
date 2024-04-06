export type NavigationItem = {
  link: string;
  title: string;
  isActive?: boolean;
};

export type NavigationContextType = {
  general: {
    navigationItems: NavigationItem[];
    isList: boolean;
  };
  hidden: {
    navigationItems: NavigationItem[];
    isList: boolean;
  };
};
