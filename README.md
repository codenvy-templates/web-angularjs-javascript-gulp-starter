Gulp - AngularJS and Compass Starter Project
==============================

This repository contains a starter project using AngularJS, jQuery and Compass. It already have a gulpfile configured to compile the project to the <code>build</code> directoty. 

### Compilation phase

The compilation phase has some steps described below:

- Cleans the build folder.
- Compile all SASS files and drop then on the .tmp folder.
  - Refresh the livereload server
  - If there's something wrong it stops the stream and show all compilation errors on console.
- Lint all JS files
  - If there's something wrong it stops the stream and show all linting errors on console. 
- Creates a new header to be concatenated on every CSS and JS file.
- Instrospect all HTML files and find all compilation comments.
  - For both CSS and JS we're minifying (uglyfing for JS) and revisioning all files present inside a compilation comment.
  - Concatenate and insert a revision for all JS libraries.
- Minify all HTML files removing comments and line breaks.
- Drop the compilated HTML file on the build directory.

### Serve tasks

There's two serve tasks available to be used. The <code>grunt serve:app</code> and the <code>grunt serve:build</code>.

The <code>grunt serve:app</code> is meant to be used during development. It uses a Express server pointing to the <code>app</code> folder and configures a Livereload server to automatically refresh files. This task depends on another task called watch, that does exactly what you expect it to do.

The <code>grunt serve:build</code> is meant to be used to test the compilation process. It uses a Express server pointing to the <code>build</code> folder. No Livereload server is started on this task.

### Contributing

You can, and you should contribute using PRs and/or issues. 

Feel free to fork this project to make any modifications. It's MIT licensed.



