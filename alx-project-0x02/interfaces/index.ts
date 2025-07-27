export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  onSubmit: (post: Post) => void;
}
export interface Post {
  title: string;
  content: string;
  createdAt: string;
}
export interface ButtonProps {
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export interface PostProps {
  id?: string;
  title: string;
  content: string;
  userId?: string;
  onClick?: () => void;
}

export interface UserProps {
  id: string;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}
