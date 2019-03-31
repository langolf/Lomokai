const TRANSPARENT = '#00000000';

class ThemeConstructor {
    constructor(colors) {
        this.background = colors.black['600'];
        this.panelBackground = colors.black['800'];
        this.foreground = colors.white;

        this.accent = colors.base.yellow;
        this.error = {
            background: colors.additional.redDark,
            foreground: colors.base.red
        };
        this.disabled = colors.black['400'],
        this.tree = {
            background: this.panelBackground,
            foreground: colors.grey['700'],
            lineHeight: '20'
        };

        this.toolbar = {
            headerBackground: colors.black['810'],
            selectedTabBackground: colors.black['810'],
            borderColor: colors.black['900']
        };

        this.label = {
            foreground: colors.grey['500'],
            selectionForeground: this.accent,
            background: TRANSPARENT
        };

        this.border = colors.black['900'];
        this.borderRadius = '4';
        this.focusColor = this.accent;

        this.textField = {
            background: colors.black['600'],
            highlight: colors.base.pink,
            foreground: this.foreground,
            selectionBackground: colors.grey['300'],
            selectionForeground: colors.black['900']
        };
    }
}

module.exports = function generateTheme(colors) {
    const theme = new ThemeConstructor(colors);

    return {
        name: `Lomokai${colors.mod}`,
        dark: true,
        author: 'Aleksandr Langolf',
        editorScheme: '/themes/Lomokai.xml',
        ui: {
            '*': {
                background: theme.panelBackground,
                foreground: theme.foreground,

                selectionBackground: colors.black['500'],
                selectionForeground: theme.foreground,
                selectionBackgroundInactive: colors.black['100'],
                selectionInactiveBackground: theme.background,
                selectionInfoForeground: colors.grey['800'],

                disabledForeground: theme.disabled,
                disabledText: theme.disabled,
                disabledBorderColor: theme.disabled,

                focusColor: theme.focusColor,
                focusedBorderColor: `${theme.focusColor}19`,
                focusWidth: '0',
                arc: '4',

                infoForeground: colors.grey['800'],
                matchForeground: colors.base.cyan,
                matchSelectionForeground: colors.base.cyan,

                underlineColor: theme.accent,
                separatorColor: theme.border
            },
            ActionButton: {
                hoverBackground: colors.black['600'],
                hoverBorderColor: colors.black['500'],
                pressedBorderColor: colors.black['600'],
                pressedBackground: colors.black['900']
            },
            Button: {
                background: TRANSPARENT,
                endBorderColor: theme.border,
                startBorderColor: theme.border,
                startBackground: theme.background,
                endBackground: theme.background,
                foreground: colors.grey['400'],
                arc: theme.borderRadius,
                shadowWidth: '0',
                default: {
                    startBackground: theme.accent,
                    endBackground: theme.accent,
                    focusedBorderColor: TRANSPARENT,
                    focusColor: '#fff3d0',
                    foreground: theme.panelBackground,
                    startBorderColor: theme.border,
                    endBorderColor: theme.border,
                }
            },
            Borders: {
                color: theme.border,
                ContrastBorderColor: theme.border
            },
            CheckBox: {
                foreground: '#c1c0c0',
                select: '#f44747'
            },
            CheckBoxMenuItem: {
                background: '#82d3dd'
            },
            Component: {
                borderColor: theme.background,
                errorFocusColor: colors.base.purple,
                hoverIconColor: colors.base.red,
                iconColor: colors.base.red,
                infoForeground: colors.black['400'],
                warningFocusColor: colors.base.orange,
                arc: '4'
            },
            ComboBox: {
                background: colors.black['600'],
                foreground: theme.foreground,
                nonEditableBackground: colors.black['600'],
                disabledForeground: colors.base.blue,
                selectionBackground: colors.black['500'],
                ArrowButton: {
                    background: theme.background,
                    iconColor: theme.foreground,
                    nonEditableBackground: theme.background,
                    disabledIconColor: theme.disabled
                }
            },
            'ComboBoxButton': {
                background: colors.black['600']
            },
            'ComboPopup.border': `1,1,1,1,${theme.background}`,
            CompletionPopup: {
                background: theme.panelBackground,
                foreground: colors.grey['400'],
                selectionBackground: theme.background,
                selectionForeground: theme.foreground,
                matchSelectionForeground: theme.accent,
                matchForeground: theme.accent,
                selectionInfoForeground: theme.foreground
            },
            Counter: {
                background: theme.accent,
                foreground: colors.base.pink
            },
            Editor: {
                background: theme.panelBackground,
                foreground: theme.foreground,
                shortcutForeground: colors.base.pink
            },
            EditorTabs: {
                selectedForeground: colors.white,
                inactiveMaskColor: colors.black['700'],
                selectedBackground: theme.background,
                borderColor: theme.border
            },
            'DebuggerTabs.selectedBackground': '#e4e6eb',
            FileColor: {
                Yellow: colors.base.yellow,
                Orange: colors.base.orange,
                Green: colors.base.green,
                Blue: colors.base.blue,
                Rose: colors.base.pink,
                Violet: colors.base.purple
            },
            Label: {
                errorForeground: theme.error.foreground,
                selectedForeground: theme.label.selectionForeground,
                background: colors.black['800'],
                foreground: theme.label.foreground
            },
            Link: {
                activeForeground: colors.base.blue,
                hoverForeground: colors.base.blue,
                pressedForeground: colors.base.blue,
                visitedForeground: colors.base.blue,
                secondaryForeground: colors.base.blue
            },
            List: {
                background: theme.background,
                foreground: colors.grey['600'],
                selectionBackground: colors.black['400'],
                selectionForeground: theme.foreground
            },

            'NavBar.borderColor': TRANSPARENT,
            Notification: {
                'MoreButton.innerBorderColor': '#bec5cd',
                foreground: theme.foreground,
                background: theme.background,
                errorBackground: theme.error.background,
                errorBorderColor: '#ff353500',
                ToolWindow: {
                    warningForeground: '#19181a',
                    informativeBackground: '#ccedcf',
                    informativeBorderColor: '#8ebd91',
                    warningBackground: '#fc9867',
                    warningBorderColor: '#d9b857',
                    errorBackground: '#f44747',
                    errorBorderColor: '#19181a'
                }
            },
            Panel: {
                background: theme.panelBackground,
                foreground: colors.grey['900']
            },
            'PasswordField.background': '#2d2a2e',
            Plugins: {
                'SearchField.background': theme.panelBackground,
                'SectionHeader.foreground': theme.foreground,
                'Tab.selectedBackground': theme.background,
                'Tab.hoverBackground': theme.background,
                lightSelectionBackground: colors.black['500']
            },
            Popup: {
                separatorForeground: theme.label.selectionForeground,
                Header: {
                    activeBackground: theme.panelBackground,
                    inactiveBackground: theme.panelBackground
                },
                Advertiser: {
                    foreground: theme.foreground,
                    background: colors.black['700'],
                    borderInsets: '5,4,5,51',
                    borderColor: colors.black['700']
                },
                Toolbar: {
                    background: theme.background
                }
            },
            ProgressBar: {
                trackColor: colors.black['900'],
                progressColor: colors.base.cyan,
                indeterminateStartColor: colors.base.pink,
                indeterminateEndColor: colors.base.blue,
                passedEndColor: colors.base.pink,
                passedColor: colors.base.green,
                failedEndColor: colors.base.pink,
                failedColor: colors.base.red
            },
            SearchEverywhere: {
                Header: {
                    background: theme.panelBackground
                },
                List: {
                    separatorColor: colors.black['900'],
                    separatorForeground: colors.base.orange
                },
                Tab: {
                    selectedBackground: colors.black['900'],
                    selectedForeground: theme.accent
                },
                SearchField: {
                    background: colors.black['900'],
                    infoForeground: colors.grey['600'],
                    borderColor: colors.black['900']
                },
                Advertiser: {
                    background: theme.panelBackground,
                    foreground: colors.grey['600']
                }
            },
            SearchMatch: {
                startBackground: theme.accent,
                endBackground: theme.accent
            },
            SidePanel: {
                background: colors.black['700']
            },
            SpeedSearch: {
                background: colors.base.pink,
                foreground: theme.foreground,
                errorForeground: theme.error.foreground
            },

            StatusBar: {
                borderColor: theme.border
            },
            TabbedPane: {
                hoverColor: theme.background,
                contentAreaColor: TRANSPARENT
            },
            Table: {
                background: theme.background,
                foreground: theme.foreground,
                stripeColor: colors.black['700'],
                selectionBackground: colors.black['400']
            },
            TableHeader: {
                background: colors.black['710'],
                cellBorder: '5,0,5,0'
            },
            TextArea: {
                background: theme.textField.background,
                foreground: theme.textField.foreground,
            },
            TextField: {
                background: theme.textField.background,
                foreground: theme.textField.foreground,
                selectionBackground: theme.textField.selectionBackground,
                selectionForeground: theme.textField.selectionForeground
            },
            ToggleButton: {
                background: colors.black['900'],
                onBackground: `${colors.base.green}19`,
                onForeground: colors.base.green,
                offBackground: `${colors.base.red}19`,
                offForeground: colors.base.red,
                borderColor: colors.black['800'],
                buttonColor: colors.black['700']
            },
            ToolTip: {
                background: theme.background,
                foreground: theme.foreground,
                'Actions.background': '#78dce8'
            },
            ToolBar: {
                borderHandleColor: colors.base.red
            },
            ToolWindow: {
                Header: {
                    background: theme.toolbar.headerBackground,
                    inactiveBackground: theme.toolbar.headerBackground,
                    borderColor: theme.toolbar.borderColor
                },
                HeaderTab: {
                    selectedBackground: theme.toolbar.headerBackground,
                    selectedInactiveBackground: theme.toolbar.headerBackground,
                    hoverBackground: theme.toolbar.headerBackground,
                    hoverInactiveBackground: theme.toolbar.headerBackground
                },
                Button: {
                    selectedBackground: colors.black['800'],
                    selectedForeground: theme.label.selectionForeground,
                    hoverBackground: colors.black['600']
                }
            },
            Tree: {
                background: theme.tree.background,
                foreground: theme.tree.foreground,
                rowHeight: theme.tree.lineHeight,
                selectionInactiveBackground: theme.background,
            },
            "VersionControl.Log.Commit.currentBranchBackground": theme.background
        },
        icons: {
            ColorPalette: {
                'Actions.Grey': colors.grey['300'],
                'Actions.Red': colors.base.pink,
                'Actions.Green': colors.base.green,
                'Actions.Yellow': colors.base.yellow,
                'Actions.Blue': colors.base.cyan,
                'Actions.GreyInline.Dark': colors.grey['600'],

                'Objects.Grey': colors.white,
                'Objects.RedStatus': colors.base.red,
                'Objects.Red': colors.base.red,
                'Objects.Pink': colors.base.pink,
                'Objects.Yellow': colors.base.orange,
                'Objects.Green': colors.base.green,
                'Objects.Blue': colors.base.cyan,
                'Objects.Purple': colors.base.purple,
                'Objects.BlackText': theme.foreground,
                'Objects.YellowDark': colors.base.cyan,
                'Objects.GreenAndroid': colors.base.green

                // 'Checkbox.Background.Default.Dark': '#343445',
                // 'Checkbox.Border.Default.Dark': '#756b8c',
                // 'Checkbox.Foreground.Selected.Dark': '#a4a1b3',
                // 'Checkbox.Focus.Wide.Dark': '#723b94',
                // 'Checkbox.Focus.Thin.Default.Dark': '#8a64b3',
                // 'Checkbox.Focus.Thin.Selected.Dark': '#8a64b3',
                // 'Checkbox.Background.Disabled.Dark': '#2C2C3B',
                // 'Checkbox.Border.Disabled.Dark': '#4c4766',
                // 'Checkbox.Foreground.Disabled.Dark': '#565073'
            }
        }
    };
};
