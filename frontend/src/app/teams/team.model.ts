import { BlogPostItem } from "../blog/BlogPostItem";
export interface Team {
    id: number;
    name: string;
    users: BlogPostItem[];
  }