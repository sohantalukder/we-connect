/* routes */
interface RouteProps {
  name: string;
  component: _functionalElementReturn;
  title?: string;
  isLazy?: boolean;
  isHide: boolean;
  accessLabel: number | string;
}

export type {RouteProps};
