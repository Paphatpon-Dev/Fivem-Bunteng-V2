-- NC PROTECT+
client_scripts { '@nc_PROTECT+/exports/protected.lua', '@nc_PROTECT+/exports/cl.lua' }

fx_version 'adamant'

game 'gta5'

description 'ESX Menu Default'

version '1.0.4'

client_scripts {
	'client/main.lua'
}

ui_page {
	'html/ui.html'
}

files {
	'html/ui.html',
	'html/css/app.css',
	'html/js/mustache.min.js',
	'html/js/app.js',
	'html/fonts/pdown.ttf',
	'html/fonts/bankgothic.ttf',
	'html/sound/select.mp3',
}

lua54 'yes'