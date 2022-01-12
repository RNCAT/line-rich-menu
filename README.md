# AlpacaShop Rich Menu

## Example
<img src="https://raw.githubusercontent.com/RNCAT/line-rich-menu/main/img/example1.jpg" alt="drawing" width="150"/>
<img src="https://raw.githubusercontent.com/RNCAT/line-rich-menu/main/img/example2.jpg" alt="drawing" width="150"/>
  
## How to use

### Requirement

- [Node.js v16+](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)

### Install dependencies

```shell
$ yarn
```

### Configuration

```python
### .env file

# default 3000
# Node
NODE_PORT = 5000

# LINE
LINE_API_URL = "https://api.line.me/v2/bot/message/"
CHANNEL_ACCESS_TOKEN = "xxx"
CHANNEL_SECRET = "xxx"

```

### Run

```shell
$ yarn dev
```

### Need to do this if you using VSCode.

1. Install yarn sdks

```shell
$ yarn dlx @yarnpkg/sdks vscode
```

2. Install VSCode extension [ZipFS](https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs)

More info [click](https://yarnpkg.com/getting-started/editor-sdks#vscode)
