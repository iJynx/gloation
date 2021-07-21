# Welcome to the gloation!

**TLDR: gloation is a homemade notion theme.** 

Inspired by my last successful theme I decided to make another one, but for notion. The theme is built on top of a [piece of work](https://www.reddit.com/r/Notion/comments/ho2hu5/custom_electron_wrapper_cssjs_injection_details/) by [u/CarbonGhost0](https://www.reddit.com/user/CarbonGhost0/). 

This is a super beta version of the theme and I hope to improve on it. If you find any issues please open an issue on github. Any contributions are greatly appreciated!


## MAKE SURE YOU HAVE DARK MODE ENABLED FOR THE THEME TO WORK

# Preview
![img1](https://i.imgur.com/eTOyja0.png)
![img2](https://i.imgur.com/VZHWF4J.png)
![img3](https://i.imgur.com/oxy8oX6.png)


## Authors note

There are a couple problems with the theme and version of notion due to it being modified. These issues include:
- No automatic updates
- Might lag/freeze for a bit when opening and closing (and you might find yourself using task manager to close it sometimes)
- The theme takes a couple seconds to install
- Theme is inconsistent and doesn't load 2% of the time from my experiences
- Won't show up on windows search without extra configuration

With these issues considered let's move on to the installation. Personally the benifits outweigh the costs.
# How to install
Want to install this godforsaken theme yourself? There's 4 easy steps. Lets go!
1. Download [NodeJS](https://nodejs.org/en/). The version should not matter. Just click `current` if unsure. 
	- Once downloaded double click the installer to start the installation process.
	- Make sure to restart your pc after installing node.
2. Navigate to your desktop and open the folder in file explorer
	- Press the path selector and type "cmd" and press enter
	- ![cmd](https://i.imgur.com/TMjDFnH.png)
	- ![cmd](https://i.imgur.com/Yns0T2G.png)
	- ![cmd](https://i.imgur.com/OyM4eD1.png)
	- This step has opened a cmd tab in that folder.
	- Next type `npm install nativefier -g`
3. After nativefier has finished installing type this command and press enter
	- `nativefier --name "Notion" "https://notion.so" --inject "./inject.css" --inject "./inject.js"` 
4. Next, go back to file explorer and go to the folder `desktop\notion\Notion-win32-x64\resources\app\inject`
5. Download the repo and put it in that folder
	- To download, either use `git clone https://github.com/iJynx/gloation.git` 
	- Or download the zip and unzip it yourselft in that folder![enter image description here](https://i.imgur.com/YDgvclF.png)
	- To check if you did it successfully check that these three files are in that folder. The first one should already have been there by default. You can delete the zip if you want ![file](https://i.imgur.com/Yzsa8Jn.png)
7. Go back to `desktop/notion` and pin `Notion.exe` to your taskbar, startmenu, desktop, wherever you like.
- Now you have it installed. Just click on one of the shortcuts or `notion.exe` and everything should be working

# Want to add your own image?
Open inject.css with notepad or some sort of IDE and change the second line where it says `background-image: url('IMAGE-URL-HERE') !important;` Delete the default one and put in your own. Make sure to keep the quotation marks! Also make sure that you're actually pasting a link to an image, most of the time it'll look something like `domain.com/image/image.png`

# Want to customize?
If you hadn't already figured it out, you can add custom JS and CSS to `inject.js` and `inject.css` respectively. To see your changes in JS just reload notion, and to see updates in css you have to restart the entire app.

# Having trouble?
First check  the [original post](https://www.reddit.com/r/Notion/comments/ho2hu5/custom_electron_wrapper_cssjs_injection_details/fxf1e86?utm_source=share&utm_medium=web2x&context=3) to see if there is any insight into your problem. If not open an issue tab on this repo so I can try fix it, or send me an email. iJynx@protonmail.com 
