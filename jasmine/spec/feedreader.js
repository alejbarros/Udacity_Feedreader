/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
         it('Feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
         });
         /* This test that loops through each feed.
         *   a) Check each feed has a URL defined.
         *   b) Check each URL is not empty.
         */
         it('Url are defined', function() {
            allFeeds.forEach(function(feed) {
              expect(feed.url).toBeDefined();
              expect(feed.url.length).not.toBe(0);
            });
         });
         /* This test that loops through each feed.
         *   a) Check each feed has a name defined.
         *   b) Check each name is not empty.
         */
         it('Names are defined', function() {
            allFeeds.forEach(function(feed) {
              expect(feed.name).toBeDefined();
              expect(feed.name.length).not.toBe(0);
            });
         });

    });
    /* Test suite "The menu" - a test suite just contains
     * a related set of tests. This suite is all about
     * the menu of yours functions.
    */
    describe("The menu", function() {
         /*This test ensures the menu element is hidden by default.
         *   a) check if the body has the class menu-hidden.
         */
         it('The menu is hidden', function() {
           expect($('body').hasClass('menu-hidden')).toBe(true);
         });
         /*This test ensures the menu element change the state visible and not visible.
         *   a) check if the boby has not the class menu-hidden
         *   b) Check if the body has the class menu-hidden
         */
         it('The menu changes(hidden-display)', function() {
           $('.menu-icon-link').trigger('click');
           expect($('body').hasClass('menu-hidden')).toBe(false);
           $('.menu-icon-link').trigger('click');
           expect($('body').hasClass('menu-hidden')).toBe(true);
         });
    });
    /* Test suite "Initial Entries" - a test suite just contains
     * a related set of tests. This suite is all about
     * loading the feeds by calls asynchronous.
    */
    describe("Initial Entries", function() {
          /*This test when the loadFeed
          * function is called and completes its work, there is at least
          * a single
          *   a) Check if items has at least a single
          */
          var container = $('.feed');
          beforeEach(function(done) {
             loadFeed(0, done);
          });

          it('Ensures loadFeed get at least a single entry ', function(done) {
               var items = container.find('.entry');
               expect(items.length).toBeGreaterThan(0);
               done();
          });

     });
     /* Test suite "INew Feed Selection" - a test suite just contains
      * a related set of tests. This suite is all about
      * new feed selection.
     */
     describe("New Feed Selection", function() {
       var data;
       beforeEach(function(done){
         loadFeed(0, function(){
           data = $('.feed').html();
           loadFeed(1,done);
          });
        });
        /* This test ensures when a new feed is loaded
        * a)Check the data after call asynchronous.
        */
        it('Ensures content actually changes on loadFeed', function(done){
            expect($('.feed').html()).not.toBe(data);
            done();
        });
      });
}());
