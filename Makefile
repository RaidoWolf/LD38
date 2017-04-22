##############################
# Makefile for Ludum Dare 38 #
##############################

# CSS BUILD PIPELINE
#
#              _*.scss
#                 |
# *.scss ->[SCSS_COMPILER]-> *.css ->[CSS_MINIFIER]-> *.min.css
# *.css ---------------------------->[CSS_MINIFIER]-> *.min.css

# JAVASCRIPT BUILD PIPELINE
#
#                  *.inc.js
#                     |
# *.src.js ---->[JS_INCLUDER]-> *.integrated.js ->[JS_TRANSPILER]-> *.transpiled.js ->[JS_MINIFIER]-> *.min.js
# *.single.js ----------------------------------->[JS_TRANSPILER]-> *.transpiled.js ->[JS_MINIFIER]-> *.min.js

# NOTE: If you need to use deployment in this file, make sure to set the
# following environment variables before running make:
#
# ld38_remote_production: the RSync remote for production deployment
# ld38_remote_development: the RSync remote for development deployment

# CONFIG
CSS_MINIFIER = yuicompressor
CSS_MINIFIER_FLAGS =
JS_MINIFIER = closure-compiler
JS_MINIFIER_FLAGS =
SCSS_COMPILER = scss
SCSS_COMPILER_FLAGS =
JS_INCLUDER = browserify
JS_INCLUDER_FLAGS =
JS_TRANSPILER = babel
JS_TRANSPILER_FLAGS =
COMPILE_EXCLUDE = src/lib/% src/ui/bootstrap/% src/ui/jquery-ui/%
MINIFY_EXCLUDE = src/lib/% src/ui/bootstrap/% src/ui/jquery-ui/%
REMOTE_SYNCER = rsync
REMOTE_SYNCER_FLAGS = -avlt --progress --delete --delete-during
LOCAL_PRODUCTION = ./src/
REMOTE_PRODUCTION = $(if $(ld38_remote_production), $(ld38_remote_production), ./src/)
SYNC_PRODUCTION_FLAGS = --exclude *.scss --exclude .DS_Store --exclude error_log
LOCAL_DEVELOPMENT = ./src/
REMOTE_DEVELOPMENT = $(if $(ld38_remote_development), $(ld38_remote_development), ./src/)
SYNC_DEVELOPMENT_FLAGS = --exclude .DS_Store --exclude error_log
JS_DEPENDENCY_MANAGER = bower
JS_DEPENDENCY_MANAGER_INSTALL_FLAGS =
JS_DEPENDENCY_MANAGER_UPDATE_FLAGS =
JS_SERVER_DEPENDENCY_MANAGER = npm
JS_SERVER_DEPENDENCY_MANAGER_INSTALL_FLAGS =
JS_SERVER_DEPENDENCY_MANAGER_UPDATE_FLAGS =

# FUNCTIONS
FILTER_OUT_MATCH = $(foreach v,$(2),$(if $(findstring $(1),$(v)),,$(v)))

# locate all SCSS files except those under COMPILE_EXCLUDE directories or _*.scss files
SCSS_FILES = $(call FILTER_OUT_MATCH,/_, $(filter-out $(COMPILE_EXCLUDE), $(wildcard \
	src/*.scss \
	src/**/*.scss \
	src/**/**/*.scss \
	src/**/**/**/*.scss \
	src/**/**/**/**/*.scss \
	src/**/**/**/**/**/*.scss \
	src/**/**/**/**/**/**/*.scss \
	src/**/**/**/**/**/**/**/*.scss \
	src/**/**/**/**/**/**/**/**/*.scss \
))) # the redundant christmas tree of paths is because Xcode's make doesn't work right.

# locate all compiled SCSS files (or would-be compiled files)
SCSS_COMPILED = $(SCSS_FILES:.scss=.css)

# locate all _*.scss files except those under COMPILE_EXCLUDE
SCSS_INCLUDES = $(filter-out $(COMPILE_EXCLUDE) $(SCSS_FILES), $(wildcard \
	src/*.scss \
	src/**/*.scss \
	src/**/**/*.scss \
	src/**/**/**/*.scss \
	src/**/**/**/**/*.scss \
	src/**/**/**/**/**/*.scss \
	src/**/**/**/**/**/**/*.scss \
	src/**/**/**/**/**/**/**/*.scss \
	src/**/**/**/**/**/**/**/**/*.scss \
))

JS_INCLUDER_FILES = $(filter-out $(COMPILE_EXCLUDE), $(wildcard \
	src/*.src.js \
	src/**/*.src.js \
	src/**/**/*.src.js \
	src/**/**/**/*.src.js \
	src/**/**/**/**/*.src.js \
	src/**/**/**/**/**/*.src.js \
	src/**/**/**/**/**/**/*.src.js \
	src/**/**/**/**/**/**/**/*.src.js \
	src/**/**/**/**/**/**/**/**/*.src.js \
))

# locate all compiled (with includes) JavaScript files (or would-be compiled files)
JS_INCLUDER_COMPILED = $(JS_INCLUDER_FILES:.src.js=.integrated.js)

# locate all JavaScript files that are to be included by the includer.
JS_INCLUDES = $(filter-out $(COMPILE_EXCLUDE), $(wildcard \
	src/*.inc.js \
	src/**/*.inc.js \
	src/**/**/*.inc.js \
	src/**/**/**/*.inc.js \
	src/**/**/**/**/*.inc.js \
	src/**/**/**/**/**/*.inc.js \
	src/**/**/**/**/**/**/*.inc.js \
	src/**/**/**/**/**/**/**/*.inc.js \
	src/**/**/**/**/**/**/**/**/*.inc.js \
))

# locate all "single" javascript files for transpiling
JS_SINGLE = $(filter-out $(COMPILE_EXCLUDE) $(JS_INCLUDES) $(JS_INCLUDER_FILES), $(wildcard \
	src/*.single.js \
	src/**/*.single.js \
	src/**/**/*.single.js \
	src/**/**/**/*.single.js \
	src/**/**/**/**/*.single.js \
	src/**/**/**/**/**/*.single.js \
	src/**/**/**/**/**/**/*.single.js \
	src/**/**/**/**/**/**/**/*.single.js \
	src/**/**/**/**/**/**/**/**/*.single.js \
))

# locate all transpiled JavaScript files (or would-be transpiled files)
JS_TRANSPILER_TRANSPILED = $(JS_INCLUDER_COMPILED:.integrated.js=.transpiled.js) $(JS_SINGLE:.single.js=.transpiled.js)

# locate all CSS files except those under MINIFY_EXCLUDE directories or .min.css files
CSS_MINIFY_FILES = $(filter-out %.min.css $(MINIFY_EXCLUDE), $(wildcard \
	src/*.css \
	src/**/*.css \
	src/**/**/*.css \
	src/**/**/**/*.css \
	src/**/**/**/**/*.css \
	src/**/**/**/**/**/*.css \
	src/**/**/**/**/**/**/*.css \
	src/**/**/**/**/**/**/**/*.css \
	src/**/**/**/**/**/**/**/**/*.css \
))

# locate all minified CSS files (or would-be minified files)
CSS_MINIFIED = $(CSS_MINIFY_FILES:.css=.min.css)

# locate javascript files for minifying
JS_MINIFY_FILES = $(JS_TRANSPILER_TRANSPILED) $(filter-out $(MINIFY_EXCLUDE), $(wildcard \
	src/*.transpiled.js \
	src/**/*.transpiled.js \
	src/**/**/*.transpiled.js \
	src/**/**/**/*.transpiled.js \
	src/**/**/**/**/*.transpiled.js \
	src/**/**/**/**/**/*.transpiled.js \
	src/**/**/**/**/**/**/*.transpiled.js \
	src/**/**/**/**/**/**/**/*.transpiled.js \
	src/**/**/**/**/**/**/**/**/*.transpiled.js \
))

# locate all minified JavaScript files (or would-be minified files)
JS_MINIFIED = $(JS_MINIFY_FILES:.transpiled.js=.min.js)

# target: all                   - build all files.
.PHONY: all
all: # actions instead of dependencies because see below
	$(MAKE) prepare
	$(MAKE) compile
	$(MAKE) minify
# this recursive make operation is done so that the minify option knows about
# any CSS files produced during the compilation of SCSS, which would
# otherwise be skipped due to them not existing at initial run time.

# HACK: okay, so this isn't ideal, but make REALLY HATES files with spaces.
# target: prepare               - prepare source code for makefile. (basically get rid of spaces in paths)
.PHONY: prepare
prepare:
	@echo '==> Installing Dependencies...'
	$(MAKE) install-deps
	@echo '==> Removing Spaces From Directory Names...'
	find src -depth -name "* *" -type d -execdir rename ' ' '_' "{}" \;
	@echo '==> Removing Spaces From File Names...'
	find src -depth -name "* *" -type f -execdir rename ' ' '_' "{}" \;
	@echo

# target: test                  - run a test of the build system.
.PHONY: test
test: test-compile test-minify

# target: compile               - compile all compilable source code.
.PHONY: compile
compile: # recursive because of needed build order again
	$(MAKE) scss-compile
	$(MAKE) js-include
	$(MAKE) js-transpile

# target: test-compile          - show files that would be compiled
.PHONY: test-compile
test-compile: test-scss-compile test-js-include test-js-transpile

# target: scss-compile          - compile all SCSS to CSS.
.PHONY: scss-compile
scss-compile: $(SCSS_FILES) $(SCSS_COMPILED)

# target: test-scss-compile     - show SCSS files that would be compiled
.PHONY: test-scss-compile
test-scss-compile: print-SCSS_FILES

# target: %.css                 - compile individual SCSS file.
%.css: %.scss $(SCSS_INCLUDES) # always recompile every SCSS file if ANY dependency file changes
	@echo '==> Compiling $<'
	$(SCSS_COMPILER) $(SCSS_COMPILER_FLAGS) $< > $@
	@echo

# target: js-include            - compile includes into pre-defined JavaScript files.
.PHONY: js-include
js-include: $(JS_INCLUDER_FILES) $(JS_INCLUDER_COMPILED)

# target: test-js-include       - show JavaScript files that would be integrated.
.PHONY: test-js-include
test-js-include: print-JS_INCLUDER_FILES

# target: %.integrated.js       - compile includes into individual JavaScript file.
%.integrated.js: %.src.js $(JS_INCLUDES) # always recompile every pre-defined JavaScript file when ANY dependency file changes
	@echo '==> Integrating $<'
	$(JS_INCLUDER) $(JS_INCLUDER_FLAGS) $< -o $@
	@echo

# target: js-transpile          - transpile modern JavaScript into a more universally supported version
.PHONY: js-transpile
js-transpile: $(JS_INCLUDER_COMPILED) $(JS_SINGLE) $(JS_TRANSPILER_TRANSPILED)

# target: test-js-transpile     - show JavaScript files that would be transpiled.
.PHONY: test-js-transpile
test-js-transpile: print-JS_INCLUDER_COMPILED print-JS_SINGLE

# target: %.transpiled.js       - transpile individual JavaScript file into a more universally supported version
%.transpiled.js: %.integrated.js
	@echo '==> Transpiling $<'
	$(JS_TRANSPILER) $(JS_TRANSPILER_FLAGS) $< > $@
	@echo
%.transpiled.js: %.single.js
	@echo '==> Transpiling $<'
	$(JS_TRANSPILER) $(JS_TRANSPILER_FLAGS) $< > $@
	@echo

# target: minify                - minify CSS and JavaScript files.
.PHONY: minify
minify: # recursive because whatever. compile is like this for a reason, so...
	$(MAKE) minify-css
	$(MAKE) minify-js

# target: test-minify           - show the files that would be minified.
.PHONY: test-minify
test-minify: test-minify-css test-minify-js

# target: minify-css            - minify CSS files.
.PHONY: minify-css
minify-css: $(CSS_MINIFY_FILES) $(CSS_MINIFIED)

# target: test-minify-css       - show CSS files that would be minified.
.PHONY: test-minify-css
test-minify-css: print-CSS_MINIFY_FILES

# target: %.min.css             - minify individual CSS file.
%.min.css: %.css
	@echo '==> Minifying $<'
	$(CSS_MINIFIER) $(CSS_MINIFIER_FLAGS) $< > $@
	@echo

# target: minify-js             - minify JavaScript files.
.PHONY: minify-js
minify-js: $(JS_MINIFY_FILES) $(JS_MINIFIED)

# target: test-minify-js        - show JavaScript files that would be minified.
.PHONY: test-minify-js
test-minify-js: print-JS_MINIFY_FILES

# target: %.min.js              - minify individual JavaScript file.
%.min.js: %.transpiled.js
	@echo '==> Minifying $<'
	$(JS_MINIFIER) $(JS_MINIFIER_FLAGS) $< > $@
	@echo

# target: clean                 - delete all built files.
.PHONY: clean
clean: clean-minified clean-compiled

# target: clean-minified        - delete all minified files.
.PHONY: clean-minified
clean-minified: clean-minified-css clean-minified-js

# target: clean-minified-css    - delete all minified CSS files.
.PHONY: clean-minified-css
clean-minified-css:
	@echo '==> Removing Minified CSS Files...'
	rm -fv $(CSS_MINIFIED)
	@echo

# target: clean-minified-js     - delete all minified JavaScript files.
.PHONY: clean-minified-js
clean-minified-js:
	@echo '==> Removing Minified JavaScript Files...'
	rm -fv $(JS_MINIFIED)
	@echo

# target: clean-compiled        - delete all compiled SCSS and JavaScript.
.PHONY: clean-compiled
clean-compiled: clean-compiled-scss clean-included-js clean-transpiled-js

# target: clean-compiled-scss   - delete all compiled SCSS files (the CSS equivalents).
.PHONY: clean-compiled-scss
clean-compiled-scss:
	@echo '==> Removing Compiled SCSS Files...'
	rm -fv $(SCSS_COMPILED)
	@echo

# target: clean-compiled-js     - delete all compiled JavaScript files.
.PHONY: clean-included-js
clean-included-js:
	@echo '==> Removing Compiled JavaScript Files...'
	rm -fv $(JS_INCLUDER_COMPILED)
	@echo

# target: clean-transpiled-js   - delete all transpiled JavaScript files.
.PHONY: clean-transpiled-js
clean-transpiled-js:
	@echo '==> Removing Transpiled JavaScript Files...'
	rm -fv $(JS_TRANSPILER_TRANSPILED)
	@echo

# target: publish-all           - publish current version to both development-site and production-site.
.PHONY: publish-all
publish-all: publish publish-dev

# target: publish               - publish current version to production-site.
.PHONY: publish
publish:
	@echo '==> Publishing Production Copy...'
	$(REMOTE_SYNCER) $(REMOTE_SYNCER_FLAGS) $(LOCAL_PRODUCTION) $(REMOTE_PRODUCTION) $(SYNC_PRODUCTION_FLAGS)
	@echo

# target: publish-dev           - publish current version to development-site.
.PHONY: publish-dev
publish-dev:
	@echo '==> Publishing Development Copy...'
	$(REMOTE_SYNCER) $(REMOTE_SYNCER_FLAGS) $(LOCAL_DEVELOPMENT) $(REMOTE_DEVELOPMENT) $(SYNC_DEVELOPMENT_FLAGS)
	@echo

# target: install-deps          - install library dependencies
.PHONY: install-deps
install-deps: install-js-deps install-js-serv-deps

# target: install-js-deps       - install Javascript library dependencies
.PHONY: install-js-deps
install-js-deps:
	@echo '==> Installing JavaScript Dependencies...'
	$(JS_DEPENDENCY_MANAGER) $(JS_DEPENDENCY_MANAGER_INSTALL_FLAGS) install
	@echo

# target: install-js-serv-deps  - install JavaScript (npm) dependencies
.PHONY: install-js-serv-deps
install-js-serv-deps:
	@echo '==> Installing JavaScript Server-Side Dependencies...'
	$(JS_SERVER_DEPENDENCY_MANAGER) $(JS_SERVER_DEPENDENCY_MANAGER_INSTALL_FLAGS) install
	@echo

# target: update-deps           - update library dependencies
.PHONY: update-deps
update-deps: update-js-deps update-js-server-deps

# target: update-js-deps        - update JavaScript library dependencies
.PHONY: update-js-deps
update-js-deps:
	@echo '==> Updating JavaScript Dependencies...'
	$(JS_DEPENDENCY_MANAGER) $(JS_DEPENDENCY_MANAGER_UPDATE_FLAGS) update
	@echo

# target: update-js-serv-deps   - update JavaScript (npm) dependencies
.PHONY: update-js-serv-deps
update-js-serv-deps:
	@echo '==> Updating JavaScript Server-Side Dependencies...'
	$(JS_SERVER_DEPENDENCY_MANAGER) $(JS_SERVER_DEPENDENCY_MANAGER_UPDATE_FLAGS) update
	@echo

# target: help                  - display this help info.
.PHONY: help
help:
	@egrep '^# target:' makefile

# target: print-%               - print the value of a variable %.
print-%:
	@echo '$*=$($*)'
