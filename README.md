# This is my code2_save_access_token Insomnia plugin

Make requests to a login endpoint (ending with '/login') and save the access token to use in another requests.

## Installation

Go to ```Preferences``` menu item and select the ```Plugins``` tab. Now press ```Reveal Plugins Folder```.

Into the plugins folder, clone this repository.

## How to use

Now that you have installed this plugin, first let it enabled.

Make a request to an endpoint ending with '/login' that will bring an 'access_token' property.

This plugin will create an TemplateTag called ```code2_access_token``` and you use on your Bearer Authentication.

To use that TemplateTag you should use Ctrl+Space and find ```code2_access_token``` in the items or type ```code2```, press Ctrl+Space and select the correct item.
