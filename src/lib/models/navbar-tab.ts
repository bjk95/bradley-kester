export enum NavbarTab {
    Home = '/',
    Fun = 'Fun',
    Contact = 'Contact',
}

export const TabPath = {
    [NavbarTab.Home]: '/',
    [NavbarTab.Fun]: '/fun',
    [NavbarTab.Contact]: '/contact',
};
    
export function isCurrent(tab: NavbarTab, path: string) {
    return TabPath[tab] === path;
}