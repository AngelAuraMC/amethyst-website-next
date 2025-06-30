# AngelAuraMC website
- Index HTML v2025.0630.0
  - Main page structure
- Stylesheet v2025.0621.0
  - Styling, dark mode, layouts
- Quotes JavaScript v2025.0502.0
  - Handles quotes text under the nav buttons, sometimes does other messages
- ContentView JavaScript v2023.1128.2
  - Allows the user to switch between the different views on the site (currently unused)

## Development and contribution
Due to the principles above, this site is incredibly easy to work with.

The site uses just HTML, JavaScript, and CSS. No PHP for now, which makes locally serving it way easier than some other sites.

To get started with the site for local modification:
1. Clone repo
3. Start a local web server and visit the page
4. You are now ready to edit

You can use a live refreshing webserver in your IDE like [Five Server](https://marketplace.visualstudio.com/items?itemName=yandeu.five-server) in VSCode, to make editing even quicker. Or you can use something as basic as Python's integrated webserver.

Do be aware that this site does reference Font Awesome from my files domain ([files.thatstel.la](https://files.thatstel.la)) on load, so you might want to copy the files locally and change the applicable paths for offline editing.

No building, no npm, no node, no Docker, just a good ol website.

### Contribution guidelines
If you'd like to contribute to this repository then by all means feel free to by sending a pull request.

When contributing code, please make sure to update any file versions both in the file itself and on this README in the format YYYY.MMDD.patch. This format should leave you with v2025.0630.1 if the day is June 30th of 2025 and it is the second time you have updated the file in the day.

## Third Party Resources
- [Font Awesome](https://fontawesome.com/) Free [(v6.4.0)](https://fontawesome.com/v6/docs/changelog/#v6-4-0)
  - Used for the icons on the landing site
- [Twitter Twemoji](https://github.com/twitter/twemoji)
  - Currently

---
<sub>With 💜 from Stella</sub></br>
<sub>shit says `<sub>` down here?? i thought i was the sub! - eva</sub>
