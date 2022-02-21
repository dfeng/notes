---
tags:
 - gui
---

# Slack Bot

As a fun little thought experiment, say I want to track the status of all my coworkers on Slack, because I'm curious about people's work habits. This is probably possible via APIs if you were the employer (or some admin), but not for a lowly employee. However, all this information is displayed on the Slack (Electron?) app, ready to be scraped. Doing scraping on the web is much easier, as you have access to all the html (though I wonder if the recent introduction of client-side javascript rendering makes scraping much more difficult). It would be cool to be able to do this all through the actual GUI itself. 

Let's think about a hypothetical GUI-as-a-service.