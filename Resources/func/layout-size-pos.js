var w = Ti.UI.createWindow({
	backgroundColor: 'white'
});

var t = Ti.UI.createTableView({
	style: Titanium.UI.iPhone.TableViewStyle.GROUPED
});

var s = Ti.UI.createTableViewSection({
	headerTitle: 'section'
});

var r = Ti.UI.createTableViewRow({
	layout: 'horizontal',
	backgroundColor: 'purple',
	hasChild: true/*,
	//width: Ti.UI.FILL,
	height: Ti.UI.SIZE/*,
	title: 'teste'*/
});

var v0 = Ti.UI.createView({
	layout: 'horizontal',
	backgroundColor: 'purple',
	width: Ti.UI.FILL,
	height: '150dp',
	left: '5dp',
	right: '5dp',
	top: '5dp'
});

var v3 = Ti.UI.createLabel({
	backgroundColor: 'yellow',
	//width: Ti.UI.SIZE,
	//width: '90%',
	width: '10dp',
	height: '90dp',
	//left: '10dp',
	right: '10dp',
	top: '0dp'
});
r.add(v3);

var v2 = Ti.UI.createLabel({
	backgroundColor: 'blue',
	width: '10dp',
	height: '90dp',
	right: '10dp',
	top: '0dp'
});
r.add(v2);

/*var v1 = Ti.UI.createLabel({
	backgroundColor: 'red',
	//width: '10dp',
	height: '90dp',
	right: '10dp',
	left: '10dp',
	top: '0dp'
});
r.add(v1);*/

s.add(r);
t.setData([s]);

w.add(t);
w.open();
