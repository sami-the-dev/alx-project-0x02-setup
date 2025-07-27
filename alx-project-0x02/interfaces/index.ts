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
