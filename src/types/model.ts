export interface IPost {
  id: string;
  createdAt: string | number;
  video?: string;
  description: string;
  user: Iuser;
  nofComments: number;
  nofLikes: number;
  comments: Icomment[];
}

export interface Iuser {
  id: string;
  image?: string;
  username: string;
  bio?: string;
  posts?: IPost[];
  website?: string;
}
export interface Icomment {
  id: string;
  comment: string;
  user: Iuser;
}
