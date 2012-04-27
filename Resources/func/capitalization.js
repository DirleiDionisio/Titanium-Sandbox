var w = Ti.UI.createWindow({
	layout: 'vertical'
});

var text1 = Ti.UI.createTextField({
	top: '5dp',
	height: '50dp',
	value: '',
	hintText: 'TEXT_AUTOCAPITALIZATION_ALL',
	autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_ALL,
	autocorrect: false,
	color: 'red',
	left: '5dp',
	right: '5dp'
});
w.add(text1);

var text2 = Ti.UI.createTextField({
	top: '5dp',
	height: '50dp',
	value: '',
	hintText: 'TEXT_AUTOCAPITALIZATION_NONE',
	autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
	autocorrect: false,
	color: 'red',
	left: '5dp',
	right: '5dp'
});
w.add(text2);

var text3 = Ti.UI.createTextField({
	top: '5dp',
	height: '50dp',
	value: '',
	hintText: 'TEXT_AUTOCAPITALIZATION_SENTENCES',
	autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_SENTENCES,
	autocorrect: false,
	color: 'red',
	left: '5dp',
	right: '5dp'
});
w.add(text3);

var text4 = Ti.UI.createTextField({
	top: '5dp',
	height: '50dp',
	value: '',
	hintText: 'TEXT_AUTOCAPITALIZATION_WORDS',
	autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_WORDS,
	autocorrect: false,
	color: 'red',
	left: '5dp',
	right: '5dp'
});
w.add(text4);


w.open();
