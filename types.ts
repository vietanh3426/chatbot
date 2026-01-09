import { Page } from './App';

export interface NavigationProps {
  onNavigate: (page: Page) => void;
}