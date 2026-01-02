--  .d8888.  .d8b.  db   d8b   db db   d8b   db d888888b db   dD 
--  88'  YP d8' `8b 88   I8I   88 88   I8I   88   `88'   88 ,8P' 
--  `8bo.   88ooo88 88   I8I   88 88   I8I   88    88    88,8P   
--    `Y8b. 88~~~88 Y8   I8I   88 Y8   I8I   88    88    88`8b   
--  db   8D 88   88 `8b d8'8b d8' `8b d8'8b d8'   .88.   88 `88. 
--  `8888Y' YP   YP  `8b8' `8d8'   `8b8' `8d8'  Y888888P YP   YD 
                                                             
                                                            
AddEventHandler("playerSpawned", function()
    print("[SW] - Loading Screen Off ")
    ShutdownLoadingScreen()
    ShutdownLoadingScreenNui()
end)