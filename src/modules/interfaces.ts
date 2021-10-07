interface ProjectLink {
  url: string;
  text: string;
  params?: Array<string>;
}

export interface Project {
  date: string;
  title: string;
  type?: string;
  role?: Array<string>;
  client: string;
  tools?: Array<string>;
  links?: Array<ProjectLink>;
  disabled?: boolean;
  children?: Array<string>;
}

export interface ProjectFirebase {
  date: string,
  title: string,
  type?: number,
  role?: Array<number>,
  client: number,
  tools?: Array<number>,
  links?: Array<ProjectLink>,
  disabled?: boolean,
  children?: Array<string>,
}