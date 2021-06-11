echo "
  ___                   _____                
 / _ \ _ __   ___ _ __ | ____|   _  ___  ___                             
| | | | '_ \ / _ \ '_ \|  _|| | | |/ _ \/ __|                            
| |_| | |_) |  __/ | | | |__| |_| |  __/\__ \                            
 \___/| .__/ \___|_| |_|_____\__, |\___||___/                            
      |_|                    |___/                                       
  ____                                _____         _   _                
 / ___|   _ _ __  _ __ ___  ___ ___  |_   _|__  ___| |_(_)_ __   __ _    
| |  | | | | '_ \| '__/ _ \/ __/ __|   | |/ _ \/ __| __| | '_ \ / _' | 
| |__| |_| | |_) | | |  __/\__ \__ \   | |  __/\__ \ |_| | | | | (_| |   
 \____\__, | .__/|_|  \___||___/___/   |_|\___||___/\__|_|_| |_|\__, |   
      |___/|_|                                                  |___/    
      
"
cp package.json.default package.json
echo "Created package.json"
cp cypress.json.default cypress.json
echo "Created cypress.json file"
npm install cypress
if [ $? -eq 0 ]; then
     echo "Finished installing cypress"
     echo "Now run cypress using:"
     echo -e "1. npm run cy:open\t\tFor GUI mode"
     echo -e "2. npm run cy:run\t\tFor headless mode"
else
     echo "Error, try again."
fi