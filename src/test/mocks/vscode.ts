// Mock vscode module for testing
export class TreeItem {
    label: string;
    tooltip: string | undefined;
    description: string | undefined;
    iconPath: any;
    contextValue: string | undefined;
    command: any;
    collapsibleState: any;
    
    constructor(label: string, collapsibleState?: any) {
        this.label = label;
        this.collapsibleState = collapsibleState;
    }
}

export class ThemeIcon {
    constructor(public id: string, public color?: any) {}
}

export class ThemeColor {
    constructor(public id: string) {}
}

export const TreeItemCollapsibleState = {
    Collapsed: 1,
    Expanded: 2,
    None: 0
};

export const window = {
    createTreeView: () => ({}),
    showInformationMessage: () => {},
    showWarningMessage: () => {},
    showErrorMessage: () => {}
};

export const commands = {
    registerCommand: () => ({ dispose: () => {} })
};

export const workspace = {
    getConfiguration: () => ({
        get: (key: string, defaultValue: any) => defaultValue
    })
};