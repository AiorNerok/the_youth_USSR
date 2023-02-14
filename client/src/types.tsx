export interface HomePageProps {}

export interface IconProps {
  pathfill?: string;
  rectfill?: string;
  isHover?: boolean
}

export interface ListItemProps {
  text: string;
  icon?: JSX.Element | string;
  iconHover?: JSX.Element | string;
}
