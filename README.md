# angular-url-rewrite


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
         
       #location /api1 {
       #  rewrite ^/api1/(.*) /$1 break;
       #  proxy_redirect off;
       #  proxy_pass https://api1.example.com;
       #  proxy_set_header X-Real-IP $remote_addr;
       #  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       #  proxy_set_header X-Forwarded-Proto https;
       #  proxy_set_header Authorization $http_authorization;
       #}
     
       #location /api2 {
       #  rewrite ^/api2/(.*) /$1 break;
       #  proxy_redirect off;
       #  proxy_pass https://api2.example.com;
       #  proxy_set_header X-Real-IP $remote_addr;
       #  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       #  proxy_set_header X-Forwarded-Proto https;
       #  proxy_set_header Authorization $http_authorization;
       #}
     
       location / {
         try_files $uri /index.html;
       }


## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
