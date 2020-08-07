export type ActiveMenu = 'main' | 'settings' | 'foods';

export type GoToFn = (goToMenu: ActiveMenu | undefined) => void;
