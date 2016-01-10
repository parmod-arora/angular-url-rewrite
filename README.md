# angular-url-rewrite

Step by Step tutorial to remove hash tag from angular js application
http://parmodarora.com/2016/01/03/remove-hash-from-url-in-angular-project/

Remove # from Url in angular project.

http://localhost/#/about  --->  http://localhost/about

1) Add base url in your index.html
	<head><base href="/"></head>

2) use html5 history in your app.js or routes.js

	if(window.history && window.history.pushState){
        $locationProvider.html5Mode(true);
    }

3) Server side configuration
	- Grunt Server:
	middleware: function (connect) {
	    var middlewares = [];
	    middlewares.push(modRewrite([
	      '!/assets|\\.html|\\.js|\\.css|\\woff|\\ttf|\\swf$ /index.html'
	    ]));
	    
	    middlewares.push(connect.static('.tmp'));
	    middlewares.push(connect().use(
	      '/bower_components',
	      connect.static('./bower_components')
	    ));
	    middlewares.push(connect.static(appConfig.app));
	    
	    //middlewares.push(require('grunt-connect-proxy/lib/utils').proxyRequest);
	    return middlewares;
	  }

	  -Ngnix Server  
	  location ~ ^/(scripts.*js|styles|images) {
            gzip_static on;
            expires 1y;
            add_header Cache-Control public;
            add_header ETag "";
            break;
        }
         
       location / {
         try_files $uri /index.html;
       }


## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
