# QUTMS_WebViewer

Web Viewer for viewing the car model as an iframe on our main page.

Full car model not included.

![web-viewer](/wiki/img/web-viewer.gif)

# Development Setup

First you will want to have 3 things installed.

- [git](https://git-scm.com/download)
- [vscode](https://code.visualstudio.com/) (recommended)
- and [conda](https://docs.conda.io/en/latest/miniconda.html) (if installing on windows, selecting `ADD TO PATH (not recommended)`
  during the installation is actually recommended by us. Although it can cause issues, it makes everything else easier.)

# Cross-Platform Install Script

This install script is cross-platform, and should work on windows, mac or linux.
All the aforementioned requirements are... required =)

```bash
python install_dev.py
```

Then run the hot-reloading server:

```bash
conda activate web-viewer
npm run dev
```
