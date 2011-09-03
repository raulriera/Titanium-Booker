// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var ui = {
    home: {}
};

var events = {
	// Fired when a page is pages (swipted left or right)
	pageChanged: function() {
		
	}
};


// Start building the UI
ui.home.window = Titanium.UI.createWindow();
ui.home.book = Titanium.UI.createScrollableView({showPagingControl: false});

ui.home.init = function() {	
	// Read the "book" repository
	var bookRepository = Titanium.Filesystem.getFile("../book").getDirectoryListing();
	var bookPages = [];
	
	// Go through all the files in the repository
	for (var file in bookRepository) {
		// Only load .html files
		if (bookRepository[file].split(".")[1] === "html") {
			bookPages.push(Titanium.UI.createWebView({ url: "../book/" + bookRepository[file] }));
		}
		
		// Debug information
		// Ti.API.info('file name = ' + bookRepository[file]);
		// Ti.API.info("file extension = " + bookRepository[file].split(".")[1]);
	};
	
	ui.home.book.views = bookPages;
	
	// Build the UI
	ui.home.window.add(ui.home.book);
	ui.home.window.open();
};

// Start the application
ui.home.init();