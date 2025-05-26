export declare global {
  type TCard = {
    id: number;
    name: string;
    description: string;
    logo: string | undefined;
  };
  type TAbout = {
    title: string;
    description: string;
    className: string;
    icon: React.JSX.Element;
  };
  interface GridItem {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleStyle?: string;
    icon?: React.ReactNode;
    customGrid?: React.ReactNode;
    spanText?: string;
  }
  interface TStacks {
    id: string | number;
    name: string;
    stackLogo: string | undefined;
    className?: string;
  }
  interface AboutGridProps {
    title: string;
    description: string;
    spanText: string;
  }
  interface ServicesGridProps {
    icon: React.ReactNode;
    title: string;
    description: string;
  }
  interface ContactMessage {
    name: string;
    email: string;
    phone: string;
    message: string;
  }
}
