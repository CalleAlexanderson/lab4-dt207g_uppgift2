# Webbsidan som hämtar data från API

Detta är en webbsidan som används för att integrera med ett api jag skapat här: https://github.com/CalleAlexanderson/lab4-dt207g_uppgift1

## Funktioner

Webbsidan består av tre sidor, samt en skyddad/gömd undersida. <br/> <br/>
Första sidan (index.html) ligger det en länk till den dolda sidan, denna länk visas bara om du har en korrekt JWT i localstorage då vid sidans inladdning körs ett fetch anrop till api:et med denna JWT.<br/> <br/>
De andra två sidorna används för att logga in och skapa nya konto, dessa använder också fetch anrop till api:et och skickar med data från formulär som när submit:as kör fetch anropen. 
