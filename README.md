<p align="center">
  <a href="https://github.com/lvjiaxuan/vscode-eslint-disable" target="_blank">
    <img src="./assets/logo-r.png" alt="vscode-eslint-disable" height="280" width="280" />
  </a>
</p>

<hr />

<p align="center">Insert `eslint-disable` directive comment with present problem rules for VS Code.</p>

[![](https://img.shields.io/visual-studio-marketplace/v/lvjiaxuan.vscode-eslint-disable?color=%232ba1f1&logo=visual-studio-code&logoColor=%232ba1f1)
](https://marketplace.visualstudio.com/items?itemName=lvjiaxuan.vscode-eslint-disable)
[![](https://img.shields.io/visual-studio-marketplace/azure-devops/installs/total/lvjiaxuan.vscode-eslint-disable?label=Installs)
](https://marketplace.visualstudio.com/items?itemName=lvjiaxuan.vscode-eslint-disable)
[![](https://img.shields.io/visual-studio-marketplace/azure-devops/installs/total/lvjiaxuan.eslint-disable?label=Deprecated%20Identifier%20Installs)
](https://marketplace.visualstudio.com/items?itemName=lvjiaxuan.eslint-disable)

## Features
Select one or **multiple lines** which have rule problems from the extension of ESLint IntelliSense, and we could either disable rules for lines by `ctrl + alt + d` or disable for the entire file by `ctrl + alt + e`.


> **Note**
> 
> It doesn't need to select all text of lines. See preview below.

## Preview

![](assets/1.gif)

![](assets/2.gif)

## ~~Support [Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new)(WIP)~~

1. Place an `eslint.config.js` file in the root of your project.
2. Enable `eslint.experimental.useFlatConfig` in `settings.json`.

## TODO

- [ ] Support multi-selections disable at the same action.
