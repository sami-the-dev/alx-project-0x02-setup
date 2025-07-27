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
