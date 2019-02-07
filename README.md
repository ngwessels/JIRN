# JIRN - The First Choice of Restaurant Connoisseurs - Menu Application

#### A program that allows users to view restaurants around Portland, select them within their region, and then view their menus & contact information.

#### By **Ian Cook Westgate**, **Robbie Kruszynski**, **Nate Wessels**, and **Jack Collins**.

## Description

A website created with HTML, CSS, Bootstrap, JavaScript, jQuery and the Google Maps JavaScript API. A user can submit their city of choice (current functionality only supports Portland, OR) and view a cultivated selection of the best quality restaurants in the displayed map. The restaurants are organized by region and, once clicked, the user is guided to a new page containing contact details and menus displayed across multiple slides for maximum accessibility. From here, the user is armed with the information they need to either order what they like from the restaurant (separate from the website) or to return to the navigation page to explore other options.

The website also offers a sign-up system that, while currently non-functioning, would in the future permit the user to join a JIRN database, the social side of the business, and to encourage repeated usage. This information is displayed and interacted with on the profile page, which shows a photo, biographical information, and lets them review websites through the "Food Diary." The Food Diary is where the user can submit where they have eaten and their thoughts on the food/experience, which is saved on their profile in cards below.

### Specs

Spec: When the user clicks the magnifying glass icon on the Home page, the icon transforms into a search field.
  - Input: User clicks on the magnifying glass icon.
  - Output: The magnifying glass transitions into a search field that can accept new user input.

Spec: Once the user inputs "Portland" in the search bar, they are taken to a new page with a map of Portland and chosen restaurants listed throughout. (This website currently only has support for Portland, OR, and no other city).
  - Input: "Portland", "portland", "Portland, or", or "Portland Oregon".
  - Output: User is sent to a new page of restaurant details pertaining to Portland, OR.

  - Input: "Chicago"
  - Output: User is sent to a new page that explains how JIRN.com does not support other city restaurant information at this time.

Spec: When the user clicks on a map pip within the Google Maps API, they will be given the name of what restaurant it is and some basic information about it.
  - Input: User clicks the most northeastern pip on the Google Map on the navigation page.
  - Output: An info bar pops up displaying: "Tin Shed, 1438 NE Alberta St, Portland, OR, tinshedgardencafe.com".

Spec: When the user hovers over one of the regional tabs, they are displayed a list of restaurants in that region which they can click on to go to the specially crafted page of the selected restaurant.
  - Input: User hovers over the "Northeast" tab.
  - Output: A list of restaurant links are displayed including "Screen Door", "Tapalaya", "Toro Bravo", and "Tin Shed".

  - Input: User clicks on the "Tapalaya" link within the "Northeast" tab.
  - Output: User is sent to a new page filled with information, slides, and imagery relevant to Tapalaya.

Spec: Within any of the restaurant pages, when the user clicks on any of the grey pips underneath the restaurant name in the gray field directly to the right of the "Info" box, they are shown a slide displaying one of the pages of the restaurant's menu. Starting at the left pip shows the first page of the restaurant's menu.
  - Input: User clicks the leftmost gray pip on the tapalaya.html webpage.
  - Output: A picture of the first page of Tapalaya's menu is displayed.

Spec: From nav.html, the user can go to the Sign Up page by clicking "Sign Up" in the top right corner within the picture of Portland.
  - Input: User clicks the "Sign Up" link in the top right corner of the webpage with the map.
  - Output: User is sent to a new page with a form asking for their username, email, and password information. (This form is non-functioning at this time)

Spec: From nav.html, the user can go to the Profile page by clicking "Profile" in the top left corner within the picture of Portland.
  - Input: User clicks the "Profile" link in the top left corner of the webpage with the map.
  - Output: User is sent to a new page with a sample picture, sample bio, and a "Food Diary" below.

Spec: When the user clicks the "New Entry" link below the "Food Diary" text on the user.html page, they are shown they can fill out and submit. The information is saved in a card below.
  - Input: User clicks "New Entry" on user.html.
  - Output: A form appears with fields where the user can input "Date & Time" through a calendar app, fill out "Where'd you eat?", and "Write your review".

  - Input: The user submits in those three fields: "2-7-2019", "Tapalaya", and "It was great".
  - Output: A new card appears below the "Food Diary" box that displays: "When: 2-7-2019", "Where: Tapalaya", "Experience: It was great".

## Setup/Installation Requirements

1. Clone this repository @
2. Use a terminal of your choice (I use Git Bash) to access the webpage and its files by inputting: "git clone {the above clone link}"
3. Open the folder you receive and open the index.html link in the web browser of your choice (I use Google Chrome).

Alternatively, click this gh-pages link to view it directly in the web browser of your choice:

## Known Bugs
* No known bugs at this time.

## Technologies Used
* HTML
* CSS
  * Bootstrap
* JavaScript
  * jQuery
* Google Maps JavaScript API
  * Google Places API
  * Google Search API


## Support and contact details

_Email iwestgate@hotmail.com with any questions, comments, or concerns._

## License

*{This software is licensed under the MIT license}*
Copyright (c) 2019 **_{Ian Cook Westgate, Robbie Kruszynski, Nate Wessels, Jack Collins}_**
