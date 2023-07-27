import { PlatformSettings } from '../PlatformSettings'

interface Stage {
  w?: number;
  h?: number;
  clearColor?: string;
  Canvas2D?: boolean;
}

interface AppSettings {
  stage?: Stage;
  debug?: boolean;
}

export type Settings = {
  appSettings?: AppSettings;
  platformSettings?: PlatformSettings;
};
