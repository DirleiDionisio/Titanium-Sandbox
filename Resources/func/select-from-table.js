/* */

var createSelectionListWindow = function(params) {
	var win,
		search,
		table,
		i,
		l,
		data=[],
		checkedItemIndex;
		
	for (i=0, l=params.items.length; i<l; i+=1) {
		if (i===params.selectedIndex) {
			checkedItemIndex = i;
		}
		data.push({
			title: params.items[i],
			hasCheck: (checkedItemIndex===i)
		});
	}
	
	win = Ti.UI.createWindow({
		title: params.caption
	});
	
	search = Ti.UI.createSearchBar({
		showCancel:false,
		hintText:'Pesquisa'
	});
	
	table = Ti.UI.createTableView({
		data: data,
		search:search
	});
	
	table.addEventListener('click', function(e){
		if (e.index!==checkedItemIndex) {
			data[checkedItemIndex].hasCheck = false;
			table.updateRow(checkedItemIndex, data[checkedItemIndex]);
			
			data[e.index].hasCheck = true;
			table.updateRow(e.index, data[e.index]);
			
			checkedItemIndex = e.index;
			
			if (params.onSelectItem)  {
				params.onSelectItem({
					index: checkedItemIndex, 
					title: data[checkedItemIndex].title
				});
			}
		}
	});
	
	win.add(table);
	
	win.addEventListener('close', function(e) {
		win.remove(table);
		table = null;
		search = null;
	});
	
	return win;
};

var g = Ti.UI.createTabGroup();
var wmain = Ti.UI.createWindow({
	title: 'window title'
});

var t = Ti.UI.createTab({
	title: 'tab title',
	window: wmain
});

wmain.addEventListener('click', function(e){
	var w = createSelectionListWindow({
		caption: 'Nome do campo',
		
		items: ['linha1', 'linha2'],
		selectedIndex: 0,
		
		onSelectItem: function(index, displayValue) {
			Ti.API.info('index: ' + index + ' | display: ' + displayValue);
		}
	});
	t.open(w);
});

g.addTab(t);
g.open();
